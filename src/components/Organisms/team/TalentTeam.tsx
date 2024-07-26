import React from 'react'
import LinkButton from '../../Atoms/LinkButton'

export default function TalentTeam() {

	const steps = [
		{
			step: '01',
			img: './Phone.svg',
			text: "Llamanos y agenda tu cita"
		},
		{
			step: '02',
			img: './CustomerService.svg',
			text: "Te confirmaremos tu cita"
		},
		{
			step: '03',
			img: './Map.svg',
			text: "Llega a nuestra clínica clínica"
		},
		{
			step: '04',
			img: './DentalCare.svg',
			text: "Te daremos el mejor servicio"
		}

	]


	return (
		<div className='w-full flex flex-col gap-4 justify-center'>
			<div className='w-auto px-12 flex flex-wrap justify-between items-start'>
				<div className='w-full flex flex-col items-center gap-10 xl:w-1/2'>
					<h3 className='text-4xl font-bold'>Sencillos pasos para realizar una reserva online</h3>
					<span className="text-lg text-[#B1B1C6] w-full">
						Nuestros clientes son nuestra prioridad, le ofrecemos servicio dental de calidad con un equipo de especialistas.
						Más detalles de nuestros servicios a continuación.
					</span>
					<div className="flex justify-center items-center text-white">
						<LinkButton
							path='#'
							text={'Agendar'}
						/>
					</div>
				</div>
				<div className='w-auto flex flex-wrap items-center justify-center gap-12 py-10 xl:w-1/2 xl:py-0'>
					{
						steps.map(step => (
							<div className='flex items-start'>
								<h3 className='text-4xl font-bold'>{step.step}</h3>
								<div className='flex flex-col flex-wrap gap-6 items-center'>
									<img className='w-auto' src={step.img} alt="StepImage" />
									<span className="text-lg text-[#B1B1C6]">
										{step.text}
									</span>

								</div>
							</div>
						))
					}
				</div>
			</div>
		</div>
	)
}
