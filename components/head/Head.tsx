import Link from 'next/link'


export default function Head() {
	return (
		<div className='text-white bg-[#299FF4] flex flex-col gap-6 p-3'>
			<h1 className='text-3xl font-extrabold'>Sea atendido por dentistas experimentados</h1>
			<span className='text-xl'>Nuestros clientes son nuestra prioridad, ofrecemos servicios dentales de calidad con un equipo de especialistas</span>
			<Link href="#" className='flex text-xl border w-32 p-2 mb-10 justify-center'>Comenzar</Link>
		</div>
	)
}
