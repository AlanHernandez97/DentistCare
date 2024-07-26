
export default function PageLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className="w-full flex flex-col ">
				<h1 className="text-2xl">Hola Mundo</h1>
				{children}
			</div>
		</>
	);
}