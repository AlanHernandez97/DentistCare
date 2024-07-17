'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

type PathLinkProps = {
	path: string;
	text: string;
}

export default function PathLink({ path, text }: PathLinkProps) {
	const pathname = usePathname()
	console.log(pathname)
	return (
		<Link className={`hover:underline ${(pathname === path) && 'font-extrabold'}`} href={path}>{text}</Link>
	)
}
