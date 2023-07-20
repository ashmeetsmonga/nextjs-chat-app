import { getUsers } from "@/app/actions/getUsers";
import React from "react";
import User from "../components/User";

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
