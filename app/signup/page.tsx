import React from "react";
import AuthForm from "../components/signup/AuthForm";

const Signup = () => {
	return (
		<div className='h-full text-white flex flex-col justify-center gap-12 p-10'>
			<div className='flex flex-col items-center gap-3'>
				<h1 className='text-2xl text-center'>
					<span className=''>Sign Up</span> to Msgs
				</h1>
				<p className='text-gray-400 text-center'>
					Get started with chatting up with your friends and family today. Sign up for our chat app
				</p>
			</div>
			<div>
				<AuthForm />
			</div>
		</div>
	);
};

export default Signup;
