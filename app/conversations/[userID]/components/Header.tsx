import { useChatUserStore } from "@/app/store/useChatUserStore";
import React from "react";

const Header = () => {
	const chatUser = useChatUserStore((state) => state.chatUser);
	return <div className='text-white outline'>Header</div>;
};

export default Header;
