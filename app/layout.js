import '../styles/globals.css';

export const metadata = {
	title: 'Metaverse World',
	icons: { icon: '/favicon.ico' },
}

export const viewport = {
	width: 'device-width',
	initialScale: 1,
}

const RootLayout = ({ children }) => (
	<html lang='en'>
		<head>
			<link rel='preconnect' href='https://stijndv.com' />
			<link rel='stylesheet' href='https://stijndv.com/fonts/Eudoxus-Sans.css' />
		</head>
		<body className='min-w-0 w-full max-w-full antialiased'>
			<div className='w-full min-w-0 max-w-full overflow-x-clip'>{children}</div>
		</body>
	</html>
)

export default RootLayout
