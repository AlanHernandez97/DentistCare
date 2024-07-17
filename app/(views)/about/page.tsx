import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Acerca de',
	description: 'Conoce nuestra historia y sobre nosotros'
}

export default function AboutPage() {
	return (
		<div>
			<h1 className='text-5xl font-extrabold'>Acerca de</h1>
		</div>
	)
}
