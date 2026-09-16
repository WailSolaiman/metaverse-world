import { motion } from 'framer-motion'

import styles from '../styles'
import { fadeIn } from '../utils/motion'

// Both content layers stay mounted and cross-fade, so nothing is rendered
// mid-resize: the outgoing layer fades out while the card is still growing,
// the incoming one fades in once it has nearly reached its target width.
const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => {
	const isActive = active === id

	return (
		<motion.div
			variants={fadeIn('right', 'spring', index * 0.2, 0.5)}
			className={`relative ${
				isActive ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
			} flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
			onClick={() => handleClick(id)}>
			<img
				src={imgUrl}
				alt='planet-04'
				className='absolute inset-0 w-full h-full object-cover rounded-[24px]'
			/>
			<h3
				aria-hidden={isActive}
				className={`font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 whitespace-nowrap lg:left-8 lg:bottom-20 lg:[writing-mode:vertical-rl] lg:rotate-180 transition-opacity duration-[0.25s] ease-linear ${
					isActive
						? 'opacity-0 pointer-events-none'
						: 'opacity-100 delay-[0.4s]'
				}`}>
				{title}
			</h3>
			<div
				aria-hidden={!isActive}
				className={`absolute bottom-0 left-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px] overflow-hidden transition-opacity duration-[0.25s] ease-linear ${
					isActive
						? 'opacity-100 delay-[0.4s]'
						: 'opacity-0 pointer-events-none'
				}`}>
				<div
					className={`${styles.flexCenter} w-[60px] h-[60px] shrink-0 rounded-[24px] glassmorphism mb-[16px]`}>
					<img
						src='./headset.svg'
						alt='headset'
						className='w-1/2 h-1/2 object-contain'
					/>
				</div>
				<p className='font-normal text-[16px] leading-[20.16px] text-white uppercase whitespace-nowrap'>
					Enter Metaverse
				</p>
				<h2 className='mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white whitespace-nowrap'>
					{title}
				</h2>
			</div>
		</motion.div>
	)
}

export default ExploreCard
