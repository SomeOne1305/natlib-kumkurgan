import { AxiosResponse } from 'axios'
import { ILogin, ILoginResponse } from '../types'
import { UserRegisterType } from '../types/user.type'
import axios from './api'

const AuthServices = {
	async getMe<T>() {
		return (await axios.get<T>('/me')).data
	},
	async login(data: ILogin) {
		return (
			await axios.post<ILogin, AxiosResponse<ILoginResponse | void>>(
				'/auth/verify/',
				data
			)
		).data
	},
	async updateUser(data: UserRegisterType) {
		return (await axios.post('/auth/register', data)).data
	},
	async logout() {
		return (await axios.post('/auth/logout', {})).data
	},
}

export default AuthServices
