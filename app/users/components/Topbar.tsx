import React from "react";
import { BsSearch } from "react-icons/bs";
import { BiSolidUserCircle } from "react-icons/bi";

const Topbar = () => {
	return (
		<div className='w-full p-7 bg-primary-green text-white flex justify-between items-center'>
			<div>
				<BsSearch size={30} />
			</div>
			<div className='text-2xl'>Home</div>
			<div>
				<BiSolidUserCircle size={40} />
			</div>
		</div>
	);
};

export default Topbar;
