import Link from 'next/link'

type LinkButtonProps = {
	path: string;
	text: string;
}

export default function LinkButton({ path, text }: LinkButtonProps) {
	return (
		<Link className='border p-3 hover:underline rounded-md' href={'/contact'}>Contáctanos</Link>
	)
}
