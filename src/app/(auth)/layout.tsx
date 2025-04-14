import { cn } from "@/lib/utils";
import { CookieIcon } from "lucide-react";
import Link from "next/link";

export default async function AuthLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className="relative flex min-h-svh w-full items-center justify-center">
			<div
				className={cn(
					"absolute inset-0",
					"[background-size:8px_8px]",
					"[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
					"dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
				)}
			/>
			<div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
			<div className="absolute top-10 left-10 flex justify-center gap-2 md:justify-start">
				<Link href="#" className="flex items-center gap-2 font-medium">
					<div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
						<CookieIcon className="size-4" />
					</div>
					帅斌饼干
				</Link>
			</div>
			<div className="relative z-20 w-full max-w-sm">{children}</div>
		</div>
	);
}
