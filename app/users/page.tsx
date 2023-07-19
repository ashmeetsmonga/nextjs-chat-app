import React from "react";
import { getUsers } from "../actions/getUsers";
import Bottombar from "./components/Bottombar";
import Topbar from "./components/Topbar";
import User from "./components/User";

const Users = async () => {
	const users = await getUsers();

	return (
		<div className='relative w-full h-full'>
			<Topbar />
			{users.map((user) => (
				<User key={user.id} user={user} />
			))}
			<Bottombar />
		</div>
	);
};

export default Users;
