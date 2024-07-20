import Image from "next/image"


export default function OurServices() {

	const servicesData = [
		{
			img: './HealthyCare.svg',
			title: 'Diagnóstico',
			subtitle: 'Diagnóstico hecho por expertos.'
		},
		{
			img: './Consultation.svg',
			title: 'Consulta',
			subtitle: 'Consulta a precios bajos y de calidad.'
		},
		{
			img: './DentalCare.svg',
			title: 'Tratamiento',
			subtitle: 'Mejor tratamiento y seguimiento.'
		},
		{
			img: './CustomerService.svg',
			title: 'Servicio al cliente',
			subtitle: 'Servicio al cliente las 24 hrs.'
		}
	]

	return (
		<div className="p-24 mt-9">
			<div className="w-full flex gap-20 justify-center">
				<h2 className="text-5xl font-bold w-1/2">Le brindamos los mejores servicios</h2>
				<span className="text-xl text-[#B1B1C6] w-1/2">
					Nuestros clientes son nuestra prioridad, le ofrecemos servicio dental de calidad con un equipo de especialistas.
					Más detalles de nuestros servicios a continuación.
				</span>
			</div>
			<div className="mt-32 flex items-center justify-around">
				{
					servicesData.map(service => (
						<div className="flex flex-col gap-6 items-center">
							<Image src={service.img} alt="XD" width={50} height={30} />
							<span className="text-xl font-bold">{service.title}</span>
							<span className="text-md text-[#B1B1C6]">{service.subtitle}</span>
						</div>
					))
				}
			</div>
		</div>
	)
}
