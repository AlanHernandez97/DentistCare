import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Precios',
	description: 'Conoce nuestros precios'
}

export default function PricingPage() {
	return (
		<div>
			<h1 className='text-5xl font-extrabold'>Precios</h1>
		</div>
	)
}
