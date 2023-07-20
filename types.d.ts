import { Conversation, Message, User } from "@prisma/client";

interface FullMessage extends Message {
	sender: User;
	seen: User[];
}

interface FullConversation extends Conversation {
	users: User[];
	messages: FullMessage[];
}
