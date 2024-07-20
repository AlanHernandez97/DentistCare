import Image from 'next/image'

type DestinstImageProps = {
	src: string;
	width: number;
	height?: number
}

export default function DentistImages({ height, src, width }: DestinstImageProps) {
	return (
		<Image src={src} alt="imagen-ilustrativa" width={width} height={height} />
	)
}
