import { Footer, Navbar } from '../components'
import {
	About,
	Explore,
	Feedback,
	GetStarted,
	Hero,
	Insights,
	WhatsNew,
	World,
} from '../sections'

const Page = () => (
	<div className='bg-primary-black w-full min-w-0 max-w-full [isolation:isolate]'>
		<Navbar />
		<main className='w-full min-w-0 max-w-full pt-[var(--site-header-offset)]'>
			<Hero />
			<div className='relative'>
				<About />
				<div className='gradient-03 z-0' />
				<Explore />
			</div>
			<div className='relative'>
				<GetStarted />
				<div className='gradient-04 z-0' />
				<WhatsNew />
			</div>
			<World />
			<div className='relative'>
				<Insights />
				<div className='gradient-04 z-0' />
				<Feedback />
			</div>
			<Footer />
		</main>
	</div>
)

export default Page
