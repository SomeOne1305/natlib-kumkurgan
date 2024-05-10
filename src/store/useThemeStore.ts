import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ITheme {
	theme: 'dark' | 'light'
	setTheme: (theme: string) => void
}
const useThemeStore = create(
	persist<ITheme>(
		set => ({
			theme: window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light',
			setTheme: () =>
				set(state => ({
					theme: state.theme === 'light' ? 'dark' : 'light',
				})),
		}),
		{
			name: 'theme',
		}
	)
)

export default useThemeStore
