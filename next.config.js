/** @type {import('next').NextConfig} */
const nextConfig = {
	// Static HTML + assets → `out/` (upload that folder to any static host, including a subfolder)
	output: 'export',
	images: {
		unoptimized: true,
	},
	// Relative asset paths so the build works from any subfolder without a hardcoded prefix.
	// trailingSlash keeps every route as its own `.../index.html`, so `./` always resolves correctly.
	assetPrefix: './',
	trailingSlash: true,
}

module.exports = nextConfig
