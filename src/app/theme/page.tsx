import { ThemeSelector } from "@/components/theme/theme-selector";
import { env } from "@/env";

export default function HomePage() {
	console.log(env.NODE_ENV);
	return (
		<div className="grid min-h-svh place-items-center">
			<div className="w-[340px]">
				<ThemeSelector />
			</div>
		</div>
	);
}
