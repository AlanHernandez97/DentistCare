import ServiceCard from '@/src/components/Atoms/ServiceCard'
import Steps from '@/src/components/Organisms/steps/Steps'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Servicios',
	description: 'Estos son los servicios que manejamos'
}

export default function ServicePage() {

	const DentistServices = [
		{
			id: 1,
			serviceTitle: "Exámenes de laboratorio",
			services: ["Biometría Hemática", "Quimica Sanguinea", "Examen Histopatológico"],
			prices: [400, 500, 800]
		},
		{
			id: 2,
			serviceTitle: "Radiografías Dentales",
			services: ["Radiografía Periapical", "Aleta De Mordida", "Ortopantomografía"],
			prices: [400, 700, 600]
		},
		{
			id: 3,
			serviceTitle: "Cirugías Dentales",
			services: ["Injerto de encía", "Cirugía Maxilofacial", "Implantes Dentales"],
			prices: [1200, 6000, 3400]
		},
		{
			id: 4,
			serviceTitle: "Consultas",
			services: ["Consulta General"],
			prices: [800]
		},
		{
			id: 5,
			serviceTitle: "Cirugías Maxilofaciales",
			services: ["Cirugía Ortonágtica", "Cirugía Mandibular Correctiva", "Exodoncia", "Implantología"],
			prices: [1200, 6000, 3400, 4700]
		},
		{
			id: 6,
			serviceTitle: "Otros Servicios",
			services: ["Ortodoncia", "Endodoncia", "Limpieza Dental", "Odontología Pediátrica"],
			prices: [1200, 6000, 3400, 4700, 1000]
		},


	];


	return (
		<div className='w-full'>
			<div className='w-auto'>
				<div className='w-full flex flex-wrap items-center justify-center px-8 py-8 gap-6 xl:gap-0'>
					<h3 className='w-full text-4xl text-center font-bold xl:w-1/2'>¡Agenda tu cita con nosotros!</h3>
					<span className='w-full text-xl text-[#B1B1C6] xl:w-1/2'>Puedes agendar tu cita con los pasos a continuación o bien puedes llenar el fórmulario de contáctanos</span>
				</div>
				<div>
					<Steps />
				</div>
			</div>
			<div>
				<div>
					<h3 className="text-4xl font-bold text-center">Conoce nuestros servicios</h3>
				</div>
				<div className='flex flex-wrap justify-center gap-5 py-10 px-5'>
					{
						DentistServices.map(services => (

							<ServiceCard
								key={services.id}
								serviceTitle={services.serviceTitle}
								services={services.services[0]}
								price={services.prices[0]}
							/>

						))
					}
				</div>
			</div>
		</div>
	)
}
