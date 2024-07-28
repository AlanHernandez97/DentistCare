import TalentTeam from '@/src/components/Organisms/team/TalentTeam'
import type { Metadata } from 'next'
import DentistImages from '../../../src/components/Atoms/DentistImages';
import LinkButton from '../../../src/components/Atoms/LinkButton';

export const metadata: Metadata = {
	title: 'Acerca de',
	description: 'Conoce nuestra historia y sobre nosotros'
}

export default function AboutPage() {
	return (
		<div>
			<section className='w-full flex flex-col py-5'>
				<h3 className='w-full text-4xl text-center font-bold'>Conoce nuestra historia</h3>
				<div className='w-auto flex flex-wrap justify-around items-center py-10 gap-8'>
					<div className='w-auto py-5'>
						<DentistImages
							src='/Consultorio.jpg'
							width={500}
							height={1}
						/>
					</div>
					<div className='w-auto flex flex-col items-center justify-center lg:w-1/2'>
						<span className='font-bold text-center'>Somos una empresa dedicada a los servicios odontológicos, brindamos el mejor servicio desde 2012.</span>
						<span className='font-bold text-center'>
							Para poder darte el mejor servicio tenemos la opcion de agendar una cita vía telefónica,
							tenemos una serie de sencillos pasos para hacer la consulta vía telefónoica o bien puede
							agendar su cita desde la página llenando el formulario de registro
						</span>
					</div>
				</div>
				<div className='text-white flex justify-center'>
					<LinkButton
						path='#'
						text='Agendar'
					/>
				</div>
			</section>
			<TalentTeam />
		</div>
	)
}
