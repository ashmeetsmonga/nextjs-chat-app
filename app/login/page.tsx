import React from "react";
import AuthForm from "../components/login/AuthForm";

const Login = () => {
	return (
		<div className='h-full text-white flex flex-col justify-center gap-12 p-10'>
			<div className='flex flex-col items-center gap-3'>
				<h1 className='text-2xl text-center'>
					<span className=''>Login</span> to Msgs
				</h1>
				<p className='text-gray-400'>Welcome back! Sign in using your email account</p>
			</div>
			<div>
				<AuthForm />
			</div>
		</div>
	);
};

export default Login;
