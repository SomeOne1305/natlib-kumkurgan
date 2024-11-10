import { Viewer, Worker } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

export default function BookViewer({ url }: { url: string | Uint8Array }) {
	const defaultLayoutPluginInstance = defaultLayoutPlugin()
	return (
		<Worker workerUrl='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js'>
			<div className='w-full lg:w-[80vw] 2xl:w-[60vw] h-screen mx-auto'>
				<Viewer fileUrl={url} plugins={[defaultLayoutPluginInstance]} />
			</div>
		</Worker>
	)
}
