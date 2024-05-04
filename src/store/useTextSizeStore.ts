import { create } from 'zustand'

interface ISize {
	size: 'default' | 'base' | 'large'
	setSize: (arg: 'default' | 'base' | 'large') => void
}

const useTextSizeStore = create<ISize>(set => ({
	size: 'default',
	setSize: () => set(state => ({ size: state.size })),
}))

export default useTextSizeStore
