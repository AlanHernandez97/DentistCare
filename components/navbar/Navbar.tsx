import Link from 'next/link'
import React from 'react'

function Navbar() {
	return (
		<nav className='flex justify-between p-8 bg-[#299FF4] text-white items-center'>
			<span className='text-2xl'>DentistCare</span>
			<div className='flex gap-20 items-center'>
				<Link className='hover:underline' href={'/'}>Inicio</Link>
				<Link className='hover:underline' href={'/pricing'}>Precios</Link>
				<Link className='hover:underline' href={'/about'}>Nosotros</Link>
				<Link className='hover:underline' href={'/service'}>Servicios</Link>
				<Link className='border p-3 hover:underline rounded-md' href={'/contact'}>Contáctanos</Link>
			</div>
		</nav>
	)
}

export default Navbar