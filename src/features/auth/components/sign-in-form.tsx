"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
	email: z.string().email({ message: "无效的邮箱格式" }),
	password: z.string().min(1, { message: "密码不能为空" }),
});

type SignInForm = z.infer<typeof formSchema>;

export function SignInForm() {
	const form = useForm<SignInForm>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	function onSubmit(values: SignInForm) {
		console.log(values);
	}
	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-2xl">账号登录</CardTitle>
				<CardDescription>欢迎使用帅斌饼干，请输入您的邮箱账号.</CardDescription>
			</CardHeader>

			<CardContent>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="flex flex-col gap-6"
					>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>邮箱</FormLabel>
									<FormControl>
										<Input
											type="email"
											placeholder="m@example.com"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										<div className="flex w-full items-center text-sm">
											<span>密码</span>
											<Link
												href="#"
												className="ml-auto inline-block font-thin underline-offset-4 hover:underline"
											>
												忘记密码?
											</Link>
										</div>
									</FormLabel>
									<FormControl>
										<Input type="password" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button type="submit" className="w-full">
							开始使用
						</Button>
					</form>
				</Form>
			</CardContent>
			<CardFooter>
				<div className="w-full text-center text-sm">
					还有没有账号?{" "}
					<Link href="#" className="underline underline-offset-4">
						点击注册
					</Link>
				</div>
			</CardFooter>
		</Card>
	);
}
