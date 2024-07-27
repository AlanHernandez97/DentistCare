import ContactForm from '@/src/components/Organisms/contactForm/ContactForm';
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Contacto',
	description: 'Conoce la forma de poder contactarnos para agendar tu cita o pedir información mas específica'
}

function ContactPage() {
	return (
		<div className='w-full'>
			<div className='w-auto py-5 px-5 flex flex-col justify-center items-center '>
				<h1 className='text-4xl font-extrabold'>Contáctenos</h1>
				<div className='w-auto flex flex-col gap-2 py-5 text-center lg:text-start'>
					<span className='text-xl text-[#B1B1C6]'>Para mayor informacion acerca de nuestros servicios contactenos, para nosotros será un placer atenderle.</span>
					<span className='text-xl text-[#B1B1C6] '>Puede contactarnos vía teléfono o bien, si usted lo desea, puede llebar el siguiente formulario y nosotros nos pondremos en contacto con usted</span>
				</div>
			</div>
			<ContactForm />
		</div>
	)
}
export default ContactPage;
