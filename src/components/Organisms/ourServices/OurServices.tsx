import Link from "next/link";
import DentistImages from "../../Atoms/DentistImages";
import ServicesImages from "../../Molecules/ServicesImages";
import LinkButton from "../../Atoms/LinkButton";


export default function OurServices() {



	return (
		<>
			<div className="p-24 mt-9">
				<div className="w-full flex gap-20 justify-center">
					<h2 className="text-4xl font-bold w-1/2">Le brindamos los mejores servicios</h2>
					<span className="text-xl text-[#B1B1C6] w-1/2">
						Nuestros clientes son nuestra prioridad, le ofrecemos servicio dental de calidad con un equipo de especialistas.
						Más detalles de nuestros servicios a continuación.
					</span>
				</div>
				<ServicesImages />
			</div>
			<div className="w-full flex justify-between px-28 py-10 gap-32 items-center">
				<DentistImages
					src="/Odontologia.png"
					height={1}
					width={500}
				/>
				<div className="flex flex-col gap-10">
					<div className="flex flex-col gap-10 w-full">
						<h2 className="text-4xl font-bold">Dientes saludables comienzan con un dentista de calidad</h2>
						<span className="text-xl text-[#B1B1C6]">
							Nuestros clientes son nuestra prioridad, le ofrecemos servicio dental de calidad con un equipo de especialistas.
							Más detalles de nuestros servicios a continuación.
						</span>
					</div>
					<Link
						href="#"
						className='flex text-xl border border-solid w-32 p-3 mb-10 justify-center bg-[#299FF4] text-white rounded-md'
					>Comenzar</Link>
				</div>
			</div>
		</>
	)
}
