'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

type LinkButtonProps = {
	path: string;
	text: string;
	color?: string;
}

export default function LinkButton({ path, text, color = '#299FF4' }: LinkButtonProps) {
	const pathname = usePathname()
	return (
		<Link className={`flex text-xl border border-solid w-32 p-3 mb-10 justify-center bg-[${color}]  rounded-md ${(pathname === path) && 'font-extrabold]'}`} href={path}>{text}</Link>
	)
}
{/* <Link className={`border p-3 bg-[${color}] text-[${textColor}] rounded-md ${(pathname === path) && 'font-extrabold]'}`} href={path}>{text}</Link> */ }

