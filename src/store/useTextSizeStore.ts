import { create } from 'zustand'

interface ISize {
	size: 'default' | 'base' | 'large'
}

interface ISizeStore extends ISize {
	setSize: (arg: 'default' | 'base' | 'large') => void
}

const useTextSizeStore = create<ISizeStore>(set => ({
	size: 'default',
	setSize: size => set(() => ({ size })),
}))

export default useTextSizeStore
