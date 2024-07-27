import Link from 'next/link'


export default function Head() {
	return (
		<div className='w-full flex flex-wrap md:flex-nowrap md:px-10 text-white bg-[#299FF4] px-5 pb-3 items-center pt-4'>
			<div className='w-auto flex flex-col gap-8 p-3 mr-6 sm:w-full'>
				<h1 className='w-auto text-5xl font-extrabold sm:w-full xl:text-7xl'>Sea atendido por dentistas experimentados</h1>
				<span className='flex flex-wrap w-auto text-xl'>Nuestros clientes son nuestra prioridad, ofrecemos servicios dentales de calidad con un equipo de especialistas</span>
				<Link
					href="#"
					className='flex text-xl border border-solid w-32 p-3 justify-center bg-white text-[#299FF4] rounded-md'
				>Comenzar</Link>
			</div>
			<div>
				<img className='w-full' src="./Rectangle.svg" alt="HealthyCare" />
			</div>
		</div>
	)
}
