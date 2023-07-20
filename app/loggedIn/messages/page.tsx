import { getConversations } from "@/app/actions/getConversations";
import React from "react";
import User from "./components/User";

const Messages = async () => {
	const conversations = await getConversations();
	console.log(conversations);
	return (
		<div className='w-full'>
			{conversations.map((conversation) => (
				<User key={conversation.id} conversation={conversation} />
			))}
		</div>
	);
};

export default Messages;
