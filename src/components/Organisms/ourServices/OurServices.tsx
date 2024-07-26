import Link from "next/link";
import DentistImages from "../../Atoms/DentistImages";
import ServicesImages from "../../Molecules/ServicesImages";
import LinkButton from "../../Atoms/LinkButton";


export default function OurServices() {



	return (
		<div>
			<div className=" flex flex-col w-full">
				<div className="flex items-center w-full my-10 mx-10 gap-7 flex-wrap">
					<h2 className="text-4xl font-bold">Le brindamos los mejores servicios</h2>
					<span className="text-lg text-[#B1B1C6] w-full md:w-1/2 2xl:text-center">
						Nuestros clientes son nuestra prioridad, le ofrecemos servicio dental de calidad con un equipo de especialistas.
						Más detalles de nuestros servicios a continuación.
					</span>
				</div>
				<div className="py-10">
					<ServicesImages />
				</div>
			</div>
			<div className="w-auto flex flex-wrap gap-10 justify-evenly items-center my-10">
				<div className="w-auto">
					<DentistImages
						src="/Odontologia.png"
						height={1}
						width={500}
					/>
				</div>
				<div className="flex flex-col mx-10 my-10 gap-10 w-full md:w-1/2 sm:justify-center">
					<div className="flex flex-col gap-10 w-full">
						<h2 className="text-4xl font-bold">Dientes saludables comienzan con un dentista de calidad</h2>
						<span className="text-xl text-[#B1B1C6]">
							Nuestros clientes son nuestra prioridad, le ofrecemos servicio dental de calidad con un equipo de especialistas.
							Más detalles de nuestros servicios a continuación.
						</span>
					</div>
					<div className="flex justify-center items-center text-white">
						<LinkButton
							path='#'
							text={'Agendar'}
						/>
					</div>
					{/* <Link
						href="#"
						className='flex text-xl border border-solid w-32 p-3 mb-10 justify-center bg-[#299FF4] text-white rounded-md'
					>Comenzar</Link> */}
				</div>
			</div>
		</div>
	)
}
