import Link from 'next/link'
import React from 'react'

function Navbar() {
	return (
		<nav className='flex justify-between p-10 bg-[#299FF4] text-white items-center'>
			<span className='text-2xl'>DentistCare</span>
			<div className='flex gap-20 items-center'>
				<Link href={'#'}>Inicio</Link>
				<Link href={'#'}>Precios</Link>
				<Link href={'#'}>Nosotros</Link>
				<Link href={'#'}>Servicios</Link>
				<Link className='border p-4' href={'#'}>Contáctanos</Link>
			</div>
		</nav>
	)
}

export default Navbar