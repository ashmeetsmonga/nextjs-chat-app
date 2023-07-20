"use client";

import useOtherUser from "@/app/hooks/useOtherUser";
import { useChatUserStore } from "@/app/store/useChatUserStore";
import { FullConversation } from "@/types";
import { User } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { BiSolidUserCircle } from "react-icons/bi";

interface UserProps {
	conversation: FullConversation;
}

const User: React.FC<UserProps> = ({ conversation }) => {
	const router = useRouter();
	const otherUser = useOtherUser(conversation);
	const session = useSession();
	const setChatUser = useChatUserStore((state) => state.setChatUser);

	const handleChatWithUser = () => {
		router.push(`/conversations/${otherUser.id}`);
	};

	const lastMessage = conversation.messages[conversation.messages.length - 1] || "";

	return (
		<div
			onClick={handleChatWithUser}
			className='w-full flex justify-between p-7 text-white cursor-pointer'
		>
			<div className='flex gap-2 items-center'>
				<BiSolidUserCircle size={70} />

				<div className='flex flex-col gap-0.5'>
					<p className='text-2xl'>{otherUser.name}</p>
					<p className='text-gray-400'>{lastMessage.body}</p>
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
