import axios from "axios";
import React from "react";

const Conversation = async ({ params: { userID } }: { params: { userID: string } }) => {
	const { data } = await axios.post("/conversations", { userID });

	return <div>Conversation</div>;
};

export default Conversation;
