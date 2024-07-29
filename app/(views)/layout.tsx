
export default function PageLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className="w-auto flex flex-col py-10">
				{children}
			</div>
		</>
	);
}