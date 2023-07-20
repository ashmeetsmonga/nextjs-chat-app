"use client";

import { getConversations } from "@/app/actions/getConversations";
import { Conversation } from "@prisma/client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";

const Conversation = ({ params: { userID } }: { params: { userID: string } }) => {
	const [conversation, setConversation] = useState<Conversation | null>(null);
	useEffect(() => {
		axios.post("/api/conversations", { userID }).then((data) => {
			console.log(data.data);
			setConversation(data.data as Conversation);
		});
	}, []);

	return (
		<div className='w-full h-full'>
			<Header />
		</div>
	);
};

export default Conversation;
