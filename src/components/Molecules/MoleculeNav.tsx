'use client'
import { usePathname } from "next/navigation";
import DentistLogo from "../Atoms/DentistLogo"
import PathLink from "../Atoms/PathLink";
import Link from "next/link";


type LinkProps = {
	path?: string;
}

function MoleculeNav({ path }: LinkProps) {

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
		<nav className='w-auto flex justify-around gap-10 py-10 px-4 bg-[#299FF4] text-white items-center xl:justify-between'>
			<div className="px-3">
				<DentistLogo />
			</div>
			<div className='flex mr-10 gap-20 items-center'>
				{
					navItems.map(item => (

						<PathLink key={null} path={item.path} text={item.text} />

					))
				}
				<Link className={`border p-3 rounded-md ${(pathname === path) && 'font-extrabold]'}`} href="/contact">Contacto</Link>
			</div>
		</nav>
	)
}

export default MoleculeNav