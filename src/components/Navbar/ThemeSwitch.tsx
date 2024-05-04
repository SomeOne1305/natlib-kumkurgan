import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { LuMoon, LuSun } from 'react-icons/lu'
import { useThemeStore } from '../../store'
import { applyTheme } from '../../utils'

const ThemeSwitch = () => {
	const { theme, setTheme } = useThemeStore()
	useEffect(() => {
		applyTheme(theme)
	}, [theme])
	return (
		<motion.label
			htmlFor='themeSwitch'
			className={`w-11 h-6 flex items-center px-0.5 rounded-full bg-[#4465BA] shadow-inner shadow-white cursor-pointer dark:bg-[#8383cc]`}
		>
			<input
				type='checkbox'
				id='themeSwitch'
				className='hidden'
				checked={theme === 'dark'}
				onChange={e => setTheme(e.target.checked ? 'dark' : 'light')}
			/>
			<motion.div
				key={theme}
				className='w-5 h-5 flex items-center justify-center rounded-full bg-white'
				initial={{ x: theme === 'dark' ? 0 : 20 }}
				animate={{ x: theme === 'dark' ? 20 : 0 }}
				transition={{ duration: 0.3, delay: 0.1 }}
			>
				{theme === 'dark' ? (
					<LuSun className='text-lg' />
				) : (
					<LuMoon className='text-lg' />
				)}
			</motion.div>
		</motion.label>
	)
}

export default ThemeSwitch
