import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function SignInForm({
	className,
	...props
}: React.ComponentPropsWithoutRef<"div">) {
	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<Card className="px-1">
				<CardHeader className="py-3">
					<CardTitle className="text-2xl">账号登录</CardTitle>
					<CardDescription>
						欢迎使用帅斌饼干，请输入您的邮箱账号.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form>
						<div className="flex flex-col gap-6">
							<div className="grid gap-2">
								<Label htmlFor="email">邮箱</Label>
								<Input
									id="email"
									type="email"
									placeholder="m@example.com"
									required
								/>
							</div>
							<div className="grid gap-2">
								<div className="flex items-center">
									<Label htmlFor="password">密码</Label>
									<a
										href="#"
										className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
									>
										忘记密码?
									</a>
								</div>
								<Input id="password" type="password" required />
							</div>
							<Button type="submit" className="w-full">
								开始使用
							</Button>
							<div className="text-center text-sm">
								还有没有账号?{" "}
								<a href="#" className="underline underline-offset-4">
									点击注册
								</a>
							</div>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
