import React from "react";

const Conversation = ({ params: { userID } }: { params: { userID: string } }) => {
	console.log(userID);
	return <div>Conversation</div>;
};

export default Conversation;
