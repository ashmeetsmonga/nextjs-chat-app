import React from "react";
import Topbar from "./components/Topbar";
import User from "./components/User";

const Users = () => {
	return (
		<div className='w-full h-full'>
			<Topbar />
			<User />
			<User />
			<User />
			<User />
			<User />
		</div>
	);
};

export default Users;
