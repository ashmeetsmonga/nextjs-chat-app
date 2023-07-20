"use client";

import { useChatUserStore } from "@/app/store/useChatUserStore";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import React from "react";
import { BiSolidUserCircle } from "react-icons/bi";

interface UserProps {
	user: User;
}

const User: React.FC<UserProps> = ({ user }) => {
	const router = useRouter();

	const setChatUser = useChatUserStore((state) => state.setChatUser);

	const handleChatWithUser = () => {
		setChatUser(user);
		router.push(`conversations/${user.id}`);
	};

	return (
		<div
			onClick={handleChatWithUser}
			className='w-full flex justify-between p-7 text-white cursor-pointer'
		>
			<div className='flex gap-2 items-center'>
				<BiSolidUserCircle size={70} />

				<div className='flex flex-col gap-0.5'>
					<p className='text-2xl'>{user.name}</p>
					<p className='text-gray-400'>How are you today?</p>
				</div>
			</div>
			<div className='flex flex-col items-end gap-1 justify-end'>
				<p className='text-gray-400'>2 mins ago</p>
				<div className='bg-red-500 px-3 py-1 rounded-full'>2</div>
			</div>
		</div>
	);
};

export default User;
