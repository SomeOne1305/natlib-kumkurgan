import axios, {
	AxiosError,
	AxiosResponse,
	InternalAxiosRequestConfig,
} from 'axios'
import useAuthStore from '../store/useAuthStore'

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
	_retry?: boolean
	_isRefreshRequest?: boolean // New flag to identify refresh requests
}

const baseURL = import.meta.env.VITE_API_BASE_URL
if (!baseURL) {
	console.error('API base URL is not defined in environment variables.')
} else {
	axios.defaults.baseURL = `${baseURL}/v1/api`
}

axios.defaults.withCredentials = true

// Add a response interceptor
axios.interceptors.response.use(
	(response: AxiosResponse) => response,
	async (error: AxiosError) => {
		const originalRequest = error.config as CustomAxiosRequestConfig

		// Check for 401 error, ensure it's not a refresh request, and the request hasn't been retried yet
		if (
			error.response?.status === 401 &&
			!originalRequest._retry &&
			!originalRequest._isRefreshRequest
		) {
			originalRequest._retry = true

			try {
				// Mark this request as a refresh request to avoid interceptor loop
				const refreshRequestConfig: CustomAxiosRequestConfig = {
					...originalRequest,
					_isRefreshRequest: true,
				}

				// Attempt to refresh the token
				const res = await axios.post(
					'/auth/refresh',
					{},
					{ ...refreshRequestConfig, withCredentials: true }
				)

				if (res.status === 200) {
					// Retry the original request with the new token
					return axios(originalRequest)
				} else {
					// If refresh fails, update auth state and redirect to login
					useAuthStore.getState().setIsAuthAvailable(false)
				}
			} catch (refreshError) {
				useAuthStore.getState().setIsAuthAvailable(false)
				return Promise.reject(refreshError)
			}
		}

		return Promise.reject(error)
	}
)

export default axios
