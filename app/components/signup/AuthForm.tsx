"use client";
import Link from "next/link";
import React, { useState } from "react";

const AuthForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

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
				<button className='w-full text-lg bg-primary-green p-4 text-white rounded-3xl font-semibold'>
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
