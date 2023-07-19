"use client";

import { getConversations } from "@/app/actions/getConversations";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Conversation = ({ params: { userID } }: { params: { userID: string } }) => {
	const [conversation, setConversation] = useState(null);
	useEffect(() => {
		getConversations(userID).then((data) => setConversation(data));
	}, []);

	return <div>Conversation</div>;
};

export default Conversation;
