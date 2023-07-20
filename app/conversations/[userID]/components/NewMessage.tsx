import React from "react";
import { IoMdSend } from "react-icons/io";

const NewMessage = () => {
	return (
		<div className='w-full flex gap-4 justify-center items-center text-white p-7'>
			<input
				className='w-3/4 p-4 bg-gray-800 rounded placeholder:text-gray-500'
				type={"text"}
				placeholder='New Message'
			/>
			<button className='rounded-full flex justify-center items-center p-3 bg-primary-green'>
				<IoMdSend size={25} />
			</button>
		</div>
	);
};

export default NewMessage;
