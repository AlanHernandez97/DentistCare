import React from 'react'
import LinkButton from '../../Atoms/LinkButton'
import DentistImages from '../../Atoms/DentistImages';

export default function TalentTeam() {

	const teams = [
		{
			name: 'Alan López',
			img: '/Team/AlanE.jpg',
			ocupation: "Ortodoncista"
		},
		{
			name: 'Eduardo Ramírez',
			img: '/Team/EduardoR.jpg',
			ocupation: "Protodoncista"
		},
		{
			name: 'Carlos Utrilla',
			img: '/Team/CarlosU.jpg',
			ocupation: "Maxiolofacial"
		},
		{
			name: 'Regina Ayala',
			img: '/Team/ReginaA.jpg',
			ocupation: "Enfermera Desntista"
		}

	]


	return (
		<div className='w-full flex flex-col gap-4 justify-center'>
			<div className='px-5'>
				<h3 className='w-full text-4xl font-bold text-center'>Conoce a nuesto equipo de trabajo</h3>
				<div className='w-full flex flex-wrap justify-evenly py-10'>
					{
						teams.map(team => (
							<div className='w-auto flex flex-col flex-wrap gap-5 items-center'>
								<div>
									<DentistImages
										src={team.img}
										width={300}
										height={1}
									/>
								</div>
								<div className='pb-10'>
									<p className='text-xl font-bold'>
										{team.name}
									</p>
									<span>{team.ocupation}</span>
								</div>
							</div>
						))

					}
				</div>
			</div >
		</div >
	)
}
