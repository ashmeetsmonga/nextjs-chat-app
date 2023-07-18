"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const AuthForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const session = useSession();
	const router = useRouter();

	useEffect(() => {
		if (session.status === "authenticated") router.push("/users");
	}, [session.status, router]);

	const onSubmit = () => {
		const toastID = toast.loading("Registering user");
		setIsLoading(true);
		axios
			.post("/api/register", { name, email, password })
			.then((data) => {
				toast.success("Successfully registered", { id: toastID });
				signIn("credentials", { email, password });
			})
			.catch(() => toast.error("Someting went wrong", { id: toastID }))
			.finally(() => setIsLoading(false));
	};

	return (
		<div className='w-full h-full flex flex-col gap-8'>
			<div className='flex flex-col gap-2'>
				<div className='text-primary-green text-lg'>Your name</div>
				<input
					type='text'
					value={name}
					onChange={(e) => setName(e.target.value)}
					className='bg-transparent text-white p-2 outline-none focus:outline-none border-b border-gray-300'
				/>
			</div>
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
			<div className='flex flex-col gap-2'>
				<div className='text-primary-green text-lg'>Confirm password</div>
				<input
					type='password'
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
					className='bg-transparent text-white p-2 outline-none focus:outline-none border-b border-gray-300'
				/>
			</div>
			<div className='mt-20'>
				<button
					disabled={isLoading}
					onClick={onSubmit}
					className='w-full text-lg bg-primary-green p-4 text-white rounded-3xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed'
				>
					Sign up
				</button>
				<p className='mt-7 text-center text-gray-300'>
					Already have an account?{" "}
					<Link href={"login"} className='font-semibold text-white'>
						Login
					</Link>
				</p>
			</div>
		</div>
	);
};

export default AuthForm;
