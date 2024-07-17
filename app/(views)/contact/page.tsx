import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Contacto',
	description: 'Conoce la forma de poder contactarnos para agendar tu cita o pedir información mas específica'
}

function ContactPage() {
	return (
		<div>
			<h1 className='text-5xl font-extrabold'>Contacto</h1>
		</div>
	)
}
export default ContactPage;
