import React from "react";
import { getUsers } from "../actions/getUsers";
import Bottombar from "./components/Bottombar";
import Topbar from "./components/Topbar";
import User from "./components/User";

const Users = async () => {
	const users = await getUsers();

	return (
		<div className='w-full h-full outline'>
			{users.map((user) => (
				<User key={user.id} user={user} />
			))}
		</div>
	);
};

export default Users;
