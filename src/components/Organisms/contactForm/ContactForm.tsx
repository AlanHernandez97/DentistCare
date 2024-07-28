import React from 'react'
import LinkButton from '../../Atoms/LinkButton'
import DentistImages from '../../Atoms/DentistImages'

export default function ContactForm() {
	return (
		<div className='w-full py-10 px-10'>
			<div className='w-auto flex flex-wrap items-center gap-12 md:gap-24'>
				<div className='w-auto flex flex-col flex-wrap  gap-10 xl:w-1/2'>
					<h3 className='w-full text-4xl text-center font-bold xl:w1/2'>¡Mantente en contacto con nosotros!</h3>
					<span className='w-full text-xl text-center text-[#B1B1C6] xl:1/2'>
						Comprometidos en conducir su salud bucal de acuerdo con los más altos principios de honestidad y equidad.
					</span>
				</div>
				<form className='w-full h-fit flex flex-col flex-wrap gap-10 justify-center bg-[#F8F8F8] shadow-2xl shadow-black px-10 py-7 rounded-md xl:w-2/5'>
					<div className='relative w-auto flex flex-col flex-wrap gap-2 lg:w-4/5'>
						<label htmlFor="name">Nombre</label>
						<input
							name='name'
							className='p-4 border-solid border-black rounded-lg'
							type="text"
							placeholder='Nombre completo'
							style={{ paddingLeft: '60px' }}
						/>
						<div className="absolute left-3 top-2/3 m-auto transform -translate-y-1/2 text-gray-400">
							<DentistImages
								src='/User.svg'
								width={40}
								height={1}
							/>
						</div>
					</div>
					<div className='relative w-auto flex flex-col flex-wrap gap-2 lg:w-4/5'>
						<label htmlFor="email">Email</label>
						<input
							className='p-4 border-solid border-black rounded-lg'
							name='email'
							type="email"
							placeholder='Correo Electrónico'
							style={{ paddingLeft: '60px' }}
						/>
						<div className="absolute left-3 top-2/3 m-auto transform -translate-y-1/2 text-gray-400">
							<DentistImages
								src='/Email.svg'
								width={40}
								height={1}
							/>
						</div>
					</div>
					<div className=' text-white'>
						<LinkButton
							path='#'
							text='Suscribirse'
						/>
					</div>
				</form>
			</div>
		</div>
	)
}
