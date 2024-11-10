import Swiper from 'swiper'

export class SwiperType extends Swiper {}
export type LangType = {
	uz: string
	ru: string
	eng: string
}
export interface IBook {
	id: string
	selfLink: string
	volumeInfo: {
		title: string
		subtitle?: string
		authors?: string[]
		publisher?: string
		publishedDate?: string
		description?: string
		industryIdentifiers?: {
			type: string
			identifier: string
		}[]
		pageCount?: number
		dimensions?: {
			height?: string
			width?: string
			thickness?: string
		}
		printType?: string
		categories?: string[]
		averageRating?: number
		ratingsCount?: number
		maturityRating?: string
		allowAnonLogging?: boolean
		contentVersion?: string
		imageLinks?: {
			smallThumbnail?: string
			thumbnail?: string
			small?: string
			medium?: string
			large?: string
			extraLarge?: string
		}
		language?: string
		previewLink?: string
		infoLink?: string
		canonicalVolumeLink?: string
	}
	saleInfo?: {
		country?: string
		saleability?: string
		isEbook?: boolean
		listPrice?: {
			amount?: number
			currencyCode?: string
		}
		retailPrice?: {
			amount?: number
			currencyCode?: string
		}
		buyLink?: string
		offers?: {
			finskyOfferType?: number
			listPrice?: {
				amountInMicros?: number
				currencyCode?: string
			}
			retailPrice?: {
				amountInMicros?: number
				currencyCode?: string
			}
			giftable?: boolean
		}[]
	}
	accessInfo?: {
		country?: string
		viewability?: string
		embeddable?: boolean
		publicDomain?: boolean
		textToSpeechPermission?: string
		epub?: {
			isAvailable?: boolean
			acsTokenLink?: string
		}
		pdf?: {
			isAvailable?: boolean
			acsTokenLink?: string
		}
		webReaderLink?: string
		accessViewStatus?: string
		quoteSharingAllowed?: boolean
	}
	searchInfo?: {
		textSnippet?: string
	}
}

export interface IText {
	onBase: string
	onLarge: string
}

export interface ILogin {
	code: string
}

export interface ILoginResponse {
	token: string
}

export interface IProfile {
	first_name: string
	last_name: string
	phone_number: string
	passport_number: string
	token: string
}

export interface IUser {
	id: string
	first_name: string
	last_name: string
	phone_number: string
	createdAt: string
	updatedAt: string
}
