import { useChatUserStore } from "@/app/store/useChatUserStore";
import React from "react";
import { BiSolidUserCircle } from "react-icons/bi";

const Header = () => {
	const chatUser = useChatUserStore((state) => state.chatUser);
	return (
		<div className='w-full p-7 flex gap-2 text-white'>
			<BiSolidUserCircle size={60} />
			<div className='flex flex-col justify-center'>
				<h1 className='text-2xl'>{chatUser?.name}</h1>
				<p className='text-gray-400'>Active now</p>
			</div>
		</div>
	);
};

export default Header;
