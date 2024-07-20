import DentistImages from "../../Atoms/DentistImages";
import ServicesImages from "../../Molecules/ServicesImages";


export default function OurServices() {



	return (
		<>
			<div className="p-24 mt-9">
				<div className="w-full flex gap-20 justify-center">
					<h2 className="text-5xl font-bold w-1/2">Le brindamos los mejores servicios</h2>
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
					height={5}
					width={500}
				/>
				<div className="flex flex-col gap-12 w-1/2">
					<h2 className="text-5xl font-bold">Dientes saludables comienzan con un dentista de calidad</h2>
					<span className="text-xl text-[#B1B1C6]">
						Nuestros clientes son nuestra prioridad, le ofrecemos servicio dental de calidad con un equipo de especialistas.
						Más detalles de nuestros servicios a continuación.
					</span>
				</div>
			</div>
		</>
	)
}
