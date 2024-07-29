'use client'
import DentistLogo from '@/src/components/Atoms/DentistLogo'
import PathLink from '@/src/components/Atoms/PathLink'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type LinkProps = {
	path?: string;
}

export default function MobileNavBar({ path }: LinkProps) {

	const pathname = usePathname()


	const navItems = [
		{
			path: '/',
			text: 'Inicio'
		},
		{
			path: '/about',
			text: 'Nosotros'
		},
		{
			path: '/service',
			text: 'Servicios'
		}
	]

	return (
		<div>
			<nav className='w-full flex justify-between gap-10 py-10 bg-[#299FF4] text-white items-center'>
				<div className="px-3">
					<DentistLogo />
				</div>
				<button className='flex mr-10 gap-0 items-center'>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
						<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
					</svg>
				</button>
				<div className='bg-[#299FF4]/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm'></div>
				<div className='bg-[#299FF4] min-h-screen w-80 fixed top-0 right-0'>
					<div className='py-8'>
						<button className='ml-64'>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
							</svg>
						</button>
						<div className='flex flex-col justify-center items-center gap-10 py-10 text-xl'>
							{
								navItems.map((item, index) => (
									<Link className={`hover:underline ${pathname === path && 'font-extrabold'} `} key={index} href={item.path}>{item.text}</Link>
								))
							}
							<Link className={`hover:underline border p-3 rounded-md ${(pathname === path) && 'font-extrabold'}`} href="/contact">Contacto</Link>
						</div>
					</div>
				</div>
			</nav>
		</div>


	)
}
