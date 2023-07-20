import { FullConversation } from "@/types";
import { getSession, useSession } from "next-auth/react";
import React, { useMemo } from "react";

const useOtherUser = (conversation: FullConversation) => {
	const session = useSession();
	const otherUser = useMemo(() => {
		const currentUserEmail = session?.data?.user?.email;
		const otherUser = conversation.users.filter((user) => user.email !== currentUserEmail);
		return otherUser[0];
	}, [session?.data?.user?.email, conversation.users]);

	return otherUser;
};

export default useOtherUser;
