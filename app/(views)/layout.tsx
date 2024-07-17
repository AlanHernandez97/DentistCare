
export default function PageLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className="flex flex-col items-center p-24">
				<h1 className="text-2xl">Hola Mundo</h1>
				{children}
			</div>
		</>
	);
}