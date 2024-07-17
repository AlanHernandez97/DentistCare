import Link from "next/link";

type PathLinkProps = {
	path: string;
	text: string;
}

export default function PathLink({ path, text }: PathLinkProps) {
	return (
		<Link className='hover:underline' href={path}>{text}</Link>
	)
}
