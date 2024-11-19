import { create } from 'zustand'
import { UserService } from '../services/user.service'
import { IUser } from '../types'

interface IAuthStore {
	isAuthAvailable: boolean
	setIsAuthAvailable: (arg: boolean) => void
	checkAuth: () => Promise<void>
	isLoading: boolean
	user: null | IUser
	setUser: (arg: IUser | null) => void
}

const useAuthStore = create<IAuthStore>(set => ({
	isAuthAvailable: false,
	user: null,
	setUser: arg => set({ user: arg }),
	setIsAuthAvailable: arg => set({ isAuthAvailable: arg }),
	isLoading: false,
	checkAuth: async () => {
		set({ isLoading: true })
		try {
			const user = await UserService.get_me()
			set({ isAuthAvailable: !!user, user })
		} catch (error) {
			console.error('Authentication check failed:', error)
			set({ isAuthAvailable: false, user: null })
		} finally {
			set({ isLoading: false })
		}
	},
}))

export default useAuthStore
