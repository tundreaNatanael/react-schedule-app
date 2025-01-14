import React from "react";

const User = ({user}) => {
	return (
		<div className="mt-4 p-4">
			<p className="text-xl font-semibold">{`${user.firstname} ${user.lastname}`}</p>
			<p className="mt-2">
				<strong>Email:</strong> {user.email}
			</p>
			<p className="mt-2">
				<strong>Role:</strong> {user.role}
			</p>
			<p className="flex items-center mt-2 gap-3">
				<strong>Number of washes left:</strong>
				<span
					className={`rounded-lg shadow-lg p-2 ${user.hoursConsumed >= user.perWeekHours ? "bg-pink-600 text-white" : "bg-green-600 text-white"}`}
				>
					{user.hoursConsumed}
				</span>
			</p>
		</div>
	);
};

export default User;
