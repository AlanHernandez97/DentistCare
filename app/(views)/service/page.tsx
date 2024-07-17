import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Servicios',
	description: 'Estos son los servicios que manejamos'
}
export default function ServicePage() {


	return (
		<div>
			<h1 className='text-5xl font-extrabold'>Servicios</h1>
		</div>
	)
}
