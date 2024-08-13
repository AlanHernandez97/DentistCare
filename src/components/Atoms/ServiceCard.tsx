

type ServiceCardProps = {
	id: number;
	serviceTitle?: string;
	services?: string[];
	prices?: number[];
}

export default function ServiceCard() {
	const DentistServices: ServiceCardProps[] = [
		{
			id: 1,
			serviceTitle: "Exámenes de laboratorio",
			services: ["Biometría Hemática", "Quimica Sanguinea", "Examen Histopatológico"],
			prices: [400, 500, 800]
		},
		{
			id: 2,
			serviceTitle: "Radiografías Dentales",
			services: ["Radiografía Periapical", "Aleta De Mordida", "Ortopantomografía"],
			prices: [400, 700, 600]
		},
		{
			id: 3,
			serviceTitle: "Cirugías Dentales",
			services: ["Injerto de encía", "Cirugía Maxilofacial", "Implantes Dentales"],
			prices: [1200, 6000, 3400]
		},
		{
			id: 4,
			serviceTitle: "Consultas",
			services: ["Consulta General"],
			prices: [800]
		},
		{
			id: 5,
			serviceTitle: "Cirugías Maxilofaciales",
			services: ["Cirugía Ortonágtica", "Cirugía Mandibular Correctiva", "Exodoncia", "Implantología"],
			prices: [1200, 6000, 3400, 4700]
		},
		{
			id: 6,
			serviceTitle: "Otros Servicios",
			services: ["Ortodoncia", "Endodoncia", "Limpieza Dental", "Odontología Pediátrica"],
			prices: [1200, 6000, 3400, 4700, 1000]
		},


	];
	return (
		<>
			{
				DentistServices.map(services => (
					<div
						className='w-full h-fit shadow-sm bg-[#F8F8F8] px-5 py-7 rounded-md hover:shadow-2xl hover:shadow-black hover:-translate-y-4 transition ease-in-out duration-500 md:w-96'
					>

						<div className="flex flex-col gap-3">
							<span className="text-2xl font-bold text-center">
								{services.serviceTitle}
							</span>
							<div className="flex justify-between items-center">
								<div className="flex flex-col">
									{
										services.services?.map(service => (
											<li>{service}</li>
										))
									}
								</div>
								<div className="flex flex-col">
									{
										services.prices?.map(price => (
											<span>{price} MXN</span>
										))
									}
								</div>

							</div>
						</div>
					</div>
				))
			}
		</>
	)
}
