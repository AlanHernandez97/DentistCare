'use client'
import DentistLogo from "../Atoms/DentistLogo"
import LinkButton from '../Atoms/LinkButton';
import PathLink from "../Atoms/PathLink";
import { usePathname } from "next/navigation";


function MoleculeNav() {




	const navItems = [
		{
			path: '/',
			text: 'Inicio'
		},
		{
			path: '/pricing',
			text: 'Precios'
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
		<nav className='flex justify-between p-8 bg-[#299FF4] text-white items-center'>
			<DentistLogo />
			<div className='flex gap-20 items-center'>
				{
					navItems.map(item => (

						<PathLink path={item.path} text={item.text} />

					))
				}
				<LinkButton path={'/contact'} text="Contacto" />
			</div>
		</nav>
	)
}

export default MoleculeNav