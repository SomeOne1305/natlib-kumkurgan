import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

interface SEOProps {
	title: string
	description?: string
	image_url?: string
}

const Seo = ({ title, description, image_url }: SEOProps) => {
	const location = useLocation()
	const currentUrl = `https://kumkurgan-takm.uz${location.pathname}`

	return (
		<Helmet>
			<title>{title}</title>
			<meta name='title' content={title} />
			<meta
				name='description'
				content={description || "Qumqo'rg'on TAKM rasmiy veb-sayti"}
			/>

			{/* Open Graph / Facebook */}
			<meta property='og:type' content='website' />
			<meta property='og:url' content={currentUrl} />
			<meta property='og:title' content={title} />
			<meta
				property='og:description'
				content={
					description || "Qumqo'rg'on TAKM rasmiy veb-sayti admin paneli"
				}
			/>
			<meta
				property='og:image'
				content={
					image_url ||
					'https://shadcn-admin.netlify.app/images/shadcn-admin.png'
				}
			/>

			{/* Twitter */}
			<meta property='twitter:card' content='./logo.png' />
			<meta property='twitter:url' content={currentUrl} />
			<meta property='twitter:title' content={title} />
			<meta
				property='twitter:description'
				content={description || "Qumqo'rg'on axborot-kutubxona markazi"}
			/>
			<meta
				property='twitter:image'
				content={
					image_url ||
					'https://shadcn-admin.netlify.app/images/shadcn-admin.png'
				}
			/>
		</Helmet>
	)
}

export default Seo
