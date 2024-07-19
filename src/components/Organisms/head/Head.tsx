import Link from 'next/link'


export default function Head() {
	return (
		<div className=' flex text-white bg-[#299FF4] p-12 pb-0 gap-10 items-center pt-20'>
			<div className='flex flex-col gap-16 p-3 w-1/2 mr-6'>
				<h1 className='text-7xl font-extrabold'>Sea atendido por dentistas experimentados</h1>
				<span className='text-xl'>Nuestros clientes son nuestra prioridad, ofrecemos servicios dentales de calidad con un equipo de especialistas</span>
				<Link
					href="#"
					className='flex text-xl border border-solid w-32 p-3 mb-10 justify-center bg-white text-[#299FF4] rounded-md'
				>Comenzar</Link>
			</div>
			<div>
				<img className='mr-20' src="./Rectangle.svg" alt="HealthyCare" />
			</div>
		</div>
	)
}
