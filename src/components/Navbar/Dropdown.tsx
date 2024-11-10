import { useMutation } from '@tanstack/react-query'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthServices } from '../../services'
import { useLangStore } from '../../store'
import useAuthStore from '../../store/useAuthStore'

const Dropdown: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const buttonRef = useRef<HTMLDivElement>(null)

	const toggleDropdown = () => {
		setIsOpen(prev => !prev)
	}

	const handleItemClick = () => {
		mutate()
		setIsOpen(false)
	}

	const handleClickOutside = (event: MouseEvent) => {
		if (
			buttonRef.current &&
			!buttonRef.current.contains(event.target as Node)
		) {
			setIsOpen(false)
		}
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])
	const { user, setIsAuthAvailable } = useAuthStore()
	const { lang } = useLangStore()
	const navigate = useNavigate()
	const { mutate } = useMutation({
		mutationKey: ['LOGOUT'],
		mutationFn: async () => await AuthServices.logout(),
		onSuccess: () => {
			toast.success(
				lang === 'uz'
					? 'Muvaffaqiyatli chiqdingiz'
					: lang === 'ru'
					? 'Успешно вышли'
					: 'Successfully logged out'
			)
			setIsAuthAvailable(false)
			navigate('/')
		},
		onError: () =>
			toast.error(
				lang === 'uz'
					? "Xatolik bo'ldi!"
					: lang === 'ru'
					? 'Ошибка произошла!'
					: 'An error occurred!'
			),
	})
	return (
		<div className='relative inline-block text-left' ref={buttonRef}>
			<button
				onClick={toggleDropdown}
				className='flex items-center justify-center w-10 h-10 rounded-full  hover:bg-[#4329ac] focus:outline-none bg-[#361ba2] text-white'
				aria-haspopup='true'
				aria-expanded={isOpen}
			>
				{user &&
					(
						user?.first_name.charAt(0) + user?.last_name.charAt(0)
					).toUpperCase()}
			</button>

			{isOpen && (
				<div className='absolute right-0 z-10 w-48 mt-2 bg-white dark:bg-primary rounded-md shadow-lg'>
					<div className='py-1'>
						<button
							onClick={() => handleItemClick()}
							className='block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#252836] w-full text-left text-red-500'
						>
							{lang === 'uz' ? 'Chiqish' : lang === 'ru' ? 'Выход' : 'Logout'}
						</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default Dropdown
