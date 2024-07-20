import React from 'react'
import DentistImages from '../Atoms/DentistImages'

export default function ServicesImages() {
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
		<div className="mt-32 flex items-center justify-around">
			{
				servicesData.map(service => (
					<div key={null} className="flex flex-col gap-6 items-center">
						<DentistImages
							src={service.img}
							width={50}
							height={30}
						/>
						<span className="text-xl font-bold">{service.title}</span>
						<span className="text-md text-[#B1B1C6]">{service.subtitle}</span>
					</div>
				))
			}
		</div>
	)
}
