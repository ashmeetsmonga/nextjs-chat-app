"use client";
import Link from "next/link";
import React, { useState } from "react";

const AuthForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

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
				<button className='w-full text-lg bg-primary-green p-4 text-white rounded-3xl font-semibold'>
					Log In
				</button>
				<p className='mt-7 text-center text-gray-300'>
					Do not have an account?{" "}
					<Link href={"signin"} className='font-semibold text-white'>
						Signin
					</Link>
				</p>
			</div>
		</div>
	);
};

export default AuthForm;
