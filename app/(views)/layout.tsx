
export default function PageLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className="w-full flex flex-col py-10">
				{children}
			</div>
		</>
	);
}