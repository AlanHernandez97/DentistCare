'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

type LinkButtonProps = {
	path: string;
	text: string;
}

export default function LinkButton({ path, text }: LinkButtonProps) {
	const pathname = usePathname()
	console.log(pathname)
	return (
		<Link className={`border p-3 hover:underline rounded-md ${(pathname === path) && 'font-extrabold'}`} href={path}>{text}</Link>
	)
}
