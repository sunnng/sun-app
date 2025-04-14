"use client";

import {
	CheckIcon,
	MoonIcon,
	RepeatIcon,
	SunIcon,
	SunMoonIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

import { useThemeConfig } from "@/components/theme/active-theme";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { baseColors } from "@/lib/colors";
import { cn } from "@/lib/utils";

export function ThemeSelector() {
	const { activeTheme, setActiveTheme } = useThemeConfig();
	const [mounted, setMounted] = React.useState(false);
	const { setTheme, resolvedTheme: theme } = useTheme();

	React.useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<div className="w-full">
			<div className="flex items-start pt-4 md:pt-0">
				<div className="space-y-1 pr-2">
					<div className="font-semibold leading-none tracking-tight">
						Customize
					</div>
					<div className="text-muted-foreground text-xs">
						Pick a style and color for the website.
					</div>
				</div>
				<Button
					variant="ghost"
					size="icon"
					className="ml-auto rounded-[0.5rem]"
					onClick={() => setTheme("system")}
				>
					<RepeatIcon />
					<span className="sr-only">Reset</span>
				</Button>
			</div>
			<div className="flex flex-1 flex-col space-y-4 md:space-y-6">
				<div className="space-y-1.5">
					<Label className="text-xs">Color</Label>
					<div className="flex flex-col gap-2">
						{baseColors.map((color) => {
							const isActive = activeTheme === color.name;

							return mounted ? (
								<Button
									variant={"outline"}
									size="sm"
									key={color.name}
									onClick={() => {
										setActiveTheme(color.name);
									}}
									className={cn(
										"justify-start",
										isActive && "border-2 border-primary dark:border-primary",
									)}
									style={
										{
											"--theme-primary": `${
												color?.activeColor[theme === "dark" ? "dark" : "light"]
											}`,
										} as React.CSSProperties
									}
								>
									<span
										className={cn(
											"-translate-x-1 mr-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-[var(--theme-primary)]",
										)}
									>
										{isActive && <CheckIcon className="size-4 text-white" />}
									</span>
									{color.label}
								</Button>
							) : (
								<Skeleton className="h-8 w-full" key={color.name} />
							);
						})}
					</div>
				</div>
				<div className="space-y-1.5">
					<Label className="text-xs">Mode</Label>
					<div className="grid grid-cols-3 gap-2">
						{mounted ? (
							<>
								<Button
									variant={"outline"}
									size="sm"
									onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
									className={cn(theme !== "dark" && "border-2 border-primary")}
								>
									<SunIcon className="-translate-x-1 mr-1" />
									Light
								</Button>
								<Button
									variant={"outline"}
									size="sm"
									onClick={() => setTheme(theme === "light" ? "dark" : "light")}
									className={cn(
										theme === "dark" &&
											"border-2 border-primary dark:border-primary",
									)}
								>
									<MoonIcon className="-translate-x-1 mr-1" />
									Dark
								</Button>
								<Button
									variant={"outline"}
									size="sm"
									onClick={() => setTheme("system")}
									className={cn(
										theme === "system" && "border-2 border-primary",
									)}
								>
									<SunMoonIcon className="-translate-x-1 mr-1" />
									System
								</Button>
							</>
						) : (
							<>
								<Skeleton className="h-8 w-full" />
								<Skeleton className="h-8 w-full" />
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
