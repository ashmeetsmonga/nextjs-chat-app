"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const AuthForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const session = useSession();
	const router = useRouter();

	useEffect(() => {
		if (session.status === "authenticated") router.push("/loggedIn");
	}, [session.status, router]);

	const onSubmit = () => {
		const toastID = toast.loading("Logging in");
		setIsLoading(true);
		signIn("credentials", { email, password, redirect: false })
			.then((cb) => {
				if (cb?.error) toast.error("Invalid Credentials", { id: toastID });
				if (cb?.ok && !cb?.error) {
					toast.success("Logged in", { id: toastID });
					router.push("/users");
				}
			})
			.finally(() => setIsLoading(false));
	};

	return (
		<div className='w-full h-full flex flex-col gap-8'>
			<div className='flex flex-col gap-2'>
				<div className='text-primary-green text-lg'>Your email</div>
				<input
					type='text'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className='bg-transparent text-white p-2 outline-none focus:outline-none border-b border-gray-300'
				/>
			</div>
			<div className='flex flex-col gap-2'>
				<div className='text-primary-green text-lg'>Password</div>
				<input
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className='bg-transparent text-white p-2 outline-none focus:outline-none border-b border-gray-300'
				/>
			</div>
			<div className='mt-20'>
				<button
					disabled={isLoading}
					onClick={onSubmit}
					className='w-full text-lg bg-primary-green p-4 text-white rounded-3xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed'
				>
					Log In
				</button>
				<p className='mt-7 text-center text-gray-300'>
					Do not have an account?{" "}
					<Link href={"signup"} className='font-semibold text-white'>
						Signup
					</Link>
				</p>
			</div>
		</div>
	);
};

export default AuthForm;
