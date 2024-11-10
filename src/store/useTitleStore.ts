import { create } from 'zustand'

interface ITitleStoreProps {
	title: string | null
	setTitle: (arg: string | null) => void
}

const useTitleStore = create<ITitleStoreProps>(set => ({
	title: null,
	setTitle: state => set({ title: state }),
}))

export default useTitleStore
