import { User } from "@prisma/client";
import { create } from "zustand";

interface ChatUserStoreProps {
	chatUser: User | null;
	setChatUser: (user: User) => void;
}

export const useChatUserStore = create<ChatUserStoreProps>((set) => ({
	chatUser: null,
	setChatUser: (chatUser) => set({ chatUser }),
}));
