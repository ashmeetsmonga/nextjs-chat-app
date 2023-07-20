import { getConversations } from "@/app/actions/getConversations";
import React from "react";

const Messages = async () => {
	const conversations = await getConversations();
	console.log(conversations);
	return <div>Messages</div>;
};

export default Messages;
