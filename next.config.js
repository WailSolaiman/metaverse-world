/** @type {import('next').NextConfig} */
const nextConfig = {
	// Static HTML + assets → `out/` (upload that folder to any static host)
	output: 'export',
	images: {
		unoptimized: true,
	},
}

module.exports = nextConfig
