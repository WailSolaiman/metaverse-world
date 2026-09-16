import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [react()],
	// Relative asset paths so the build works from any subfolder
	// (deployed at wailsolaiman.com/templates/metaverse-world) without a hardcoded prefix.
	base: './',
	build: {
		// Kept as `out` rather than Vite's default `dist` to match the existing deploy flow.
		outDir: 'out',
		emptyOutDir: true,
	},
})
