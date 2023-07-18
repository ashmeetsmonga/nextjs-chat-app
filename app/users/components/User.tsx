import React from "react";
import { BiSolidUserCircle } from "react-icons/bi";

interface UserProps {
	name: string;
}

const User: React.FC<UserProps> = ({ name }) => {
	return (
		<div className='w-full flex justify-between p-7 text-white'>
			<div className='flex gap-2 items-center'>
				<BiSolidUserCircle size={70} />

				<div className='flex flex-col gap-0.5'>
					<p className='text-2xl'>{name}</p>
					<p className='text-gray-400'>How are you today?</p>
				</div>
			</div>
			<div className='flex flex-col items-end gap-1 justify-end'>
				<p className='text-gray-400'>2 mins ago</p>
				<div className='bg-red-500 px-3 py-1 rounded-full'>2</div>
			</div>
		</div>
	);
};

export default User;
