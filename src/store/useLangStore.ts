import { create } from 'zustand'

interface ILang {
	lang: 'uz' | 'ru' | 'eng'
}

interface ILangStoreProps extends ILang {
	setLang: (arg: 'uz' | 'ru' | 'eng') => void
}

const useLangStore = create<ILangStoreProps>(set => ({
	lang: 'uz',
	setLang: state => set({ lang: state }),
}))

export default useLangStore
