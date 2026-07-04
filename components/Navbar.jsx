'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'

import styles from '../styles'

const HEADER_BRAND_CLASS =
	'font-extrabold text-white text-center hover:opacity-90 transition-opacity min-w-0 px-1 text-sm leading-snug tracking-tight min-[400px]:text-base sm:text-lg md:text-[24px] md:leading-[30px]'

const DRAWER_BRAND_CLASS =
	'font-extrabold text-white hover:opacity-90 transition-opacity min-w-0 flex-1 text-left text-xl leading-tight tracking-tight sm:text-2xl md:text-3xl md:leading-tight'

const CloseIcon = ({ className = 'h-6 w-6' }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		className={className}
		aria-hidden>
		<path d='M18 6L6 18M6 6l12 12' />
	</svg>
)

const NAV_LINKS = [
	{ href: '#home', label: 'Home' },
	{ href: '#about', label: 'About' },
	{ href: '#explore', label: 'Explore' },
	{ href: '#get-started', label: 'Get Started' },
	{ href: '#whats-new', label: "What's New" },
	{ href: '#worlds', label: 'Worlds' },
	{ href: '#insights', label: 'Insights' },
	{ href: '#feedback', label: 'Feedback' },
]

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false)
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	useEffect(() => {
		if (!menuOpen) return undefined
		const prevOverflow = document.body.style.overflow
		document.body.style.overflow = 'hidden'
		return () => {
			document.body.style.overflow = prevOverflow
		}
	}, [menuOpen])

	useEffect(() => {
		if (!menuOpen) return undefined
		const onKeyDown = (e) => {
			if (e.key === 'Escape') setMenuOpen(false)
		}
		window.addEventListener('keydown', onKeyDown)
		return () => window.removeEventListener('keydown', onKeyDown)
	}, [menuOpen])

	const closeMenu = () => setMenuOpen(false)

	const menuPortal =
		mounted &&
		createPortal(
			<AnimatePresence>
				{menuOpen && (
					<>
						<motion.button
							type='button'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
							className='fixed inset-0 z-[260] bg-black/55 backdrop-blur-[2px] cursor-pointer border-0 p-0'
							aria-label='Close menu'
							onClick={closeMenu}
						/>
						<motion.div
							id='mobile-menu'
							role='dialog'
							aria-modal='true'
							aria-label='Site navigation'
							initial={{ x: '100%' }}
							animate={{ x: 0 }}
							exit={{ x: '100%' }}
							transition={{ type: 'spring', damping: 28, stiffness: 280 }}
							className='fixed inset-y-0 right-0 z-[261] w-full max-w-sm bg-primary-black border-l border-white/10 shadow-2xl flex flex-col overflow-y-auto pt-[max(1.5rem,env(safe-area-inset-top))] px-8 pb-10'>
							<div className='mb-6 flex flex-row items-center justify-between gap-4 border-b border-white/10 pb-6'>
								<a
									href='#home'
									onClick={closeMenu}
									className={`${DRAWER_BRAND_CLASS} rounded-lg py-1 outline-none focus-visible:ring-2 focus-visible:ring-white/50`}>
									METAVERSE WORLD
								</a>
								<button
									type='button'
									onClick={closeMenu}
									className='shrink-0 rounded-md p-2 text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60'
									aria-label='Close menu'>
									<CloseIcon className='h-8 w-8' />
								</button>
							</div>
							<nav className='flex-1' aria-label='Page sections'>
								<ul className='flex flex-col gap-1'>
									{NAV_LINKS.map(({ href, label }, i) => (
										<li key={href}>
											<motion.a
												href={href}
												onClick={closeMenu}
												initial={{ opacity: 0, x: 24 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{
													delay: 0.04 * i,
													duration: 0.25,
												}}
												className='block py-3 px-2 text-lg font-semibold text-white border-b border-white/5 hover:text-secondary-white hover:bg-white/5 rounded-md transition-colors'>
												{label}
											</motion.a>
										</li>
									))}
								</ul>
							</nav>
						</motion.div>
					</>
				)}
			</AnimatePresence>,
			document.body,
		)

	return (
		<>
			<header
				className={`fixed inset-x-0 top-0 z-[150] w-full min-w-0 max-w-full overflow-x-clip ${styles.xPaddings} py-6 sm:py-8 bg-primary-black/95 backdrop-blur-sm border-b border-white/5 [contain:layout] [transform:translateZ(0)]`}>
				<div
					className='absolute left-0 top-0 bottom-0 w-[min(55%,20rem)] gradient-01 pointer-events-none opacity-90'
					aria-hidden
				/>
				<div
					className={`${styles.innerWidth} mx-auto flex justify-between gap-2 sm:gap-6 md:gap-8 items-center relative z-10 min-w-0 w-full`}>
					<img
						src='./search.svg'
						alt='search'
						className='h-5 w-5 object-contain shrink-0 sm:h-6 sm:w-6'
					/>
					<a
						href='#home'
						onClick={closeMenu}
						className={`${HEADER_BRAND_CLASS} flex-1`}>
						METAVERSE WORLD
					</a>
					<button
						type='button'
						onClick={() => setMenuOpen((o) => !o)}
						className='p-1 rounded-md text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 shrink-0'
						aria-expanded={menuOpen}
						aria-controls='mobile-menu'
						aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
						{menuOpen ? (
							<CloseIcon className='h-5 w-5 sm:h-6 sm:w-6' />
						) : (
							<img
								src='./menu.svg'
								alt=''
								className='h-5 w-5 object-contain pointer-events-none sm:h-6 sm:w-6'
							/>
						)}
					</button>
				</div>
			</header>
			{menuPortal}
		</>
	)
}

export default Navbar
