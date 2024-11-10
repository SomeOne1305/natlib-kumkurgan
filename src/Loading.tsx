import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useEffect } from 'react'
import useAuthStore from './store/useAuthStore'

const Loading = () => {
	const { setIsAuthAvailable } = useAuthStore()
	const { mutateAsync } = useMutation({
		mutationKey: ['REFRESH'],
		mutationFn: async () => await axios.post('/auth/refresh', {}),
		onSuccess: () => {
			setIsAuthAvailable(true)
		},
		onError: () => {
			setIsAuthAvailable(false)
		},
	})

	useEffect(() => {
		mutateAsync()
	}, [mutateAsync])

	return <div>Loading</div>
}

export default Loading
