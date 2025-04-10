import { ThemeSelector } from "@/components/theme/theme-selector";

export default function HomePage() {
	return (
		<div className="grid min-h-svh place-items-center">
			<div className="w-[340px]">
				<ThemeSelector />
			</div>
		</div>
	);
}
