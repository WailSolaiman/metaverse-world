import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [react()],
	// Relative asset paths so the build works from any subfolder
	// (deployed at wailsolaiman.com/templates/metaverse-world) without a hardcoded prefix.
	base: './',
	build: {
		// Vite's default output directory.
		outDir: 'dist',
		emptyOutDir: true,
	},
})
