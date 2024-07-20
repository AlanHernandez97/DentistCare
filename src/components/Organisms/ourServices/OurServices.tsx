import ServicesImages from "../../Molecules/ServicesImages";


export default function OurServices() {



	return (
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
	)
}
