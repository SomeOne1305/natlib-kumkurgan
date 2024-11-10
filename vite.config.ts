import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	optimizeDeps: {
		include: ['@react-pdf-viewer/core', '@react-pdf-viewer/default-layout'],
	},
	server: {
		host: '0.0.0.0',
		port: 5173,
	},
})
