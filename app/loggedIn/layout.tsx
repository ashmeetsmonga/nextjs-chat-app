import React from "react";
import Bottombar from "./components/Bottombar";
import Topbar from "./components/Topbar";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className='relative w-full h-full'>
			<Topbar />
			{children}
			<Bottombar />
		</div>
	);
};

export default Layout;
