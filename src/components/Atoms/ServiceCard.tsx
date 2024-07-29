

type ServiceCardProps = {
	serviceTitle?: string;
	services?: string[] | string;
	price?: number | number[];
}

export default function ServiceCard({ price, serviceTitle, services }: ServiceCardProps) {
	return (
		<div
			className='w-full h-fit shadow-sm bg-[#F8F8F8] px-5 py-7 rounded-md hover:shadow-2xl hover:shadow-black hover:-translate-y-4 transition ease-in-out duration-500 md:w-96'
		>

			<div className="flex flex-col gap-3">
				<span className="text-2xl font-bold text-center">
					{serviceTitle}
				</span>
				<div className="flex justify-between items-center">
					<li>{services}</li>
					<span>${price} MXN</span>
				</div>
			</div>
		</div>
	)
}
