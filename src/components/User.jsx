import React from "react";

const User = ({user}) => {
	console.log(user);
	return (
		<div className="mt-4 p-4">
			<p className="text-xl font-semibold">{`${user.firstname} ${user.lastname}`}</p>
			<p className="mt-2">
				<strong>Email:</strong> {user.email}
			</p>
			<p className="mt-2">
				<strong>Role:</strong> {user.role}
			</p>
		</div>
	);
};

export default User;
