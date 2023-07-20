"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineMessage, AiFillSetting } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";

const Bottombar = () => {
	const router = useRouter();
	return (
		<div className='w-full p-7 flex justify-between fixed bottom-0 left-0 text-white bg-black'>
			<button
				onClick={() => router.push("/loggedIn/messages")}
				className='flex flex-col gap-1 items-center'
			>
				<AiOutlineMessage size={50} />
				<p>Messages</p>
			</button>
			<button
				onClick={() => router.push("/loggedIn/users")}
				className='flex flex-col gap-1 items-center text-gray-500'
			>
				<IoMdContact size={50} />
				<p>Users</p>
			</button>
			<button className='flex flex-col gap-1 items-center text-gray-500'>
				<AiFillSetting size={50} />
				<p>Messages</p>
			</button>
		</div>
	);
};

export default Bottombar;
