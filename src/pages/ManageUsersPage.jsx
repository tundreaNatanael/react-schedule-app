import React from "react";
import Menu from "../components/Menu";
import {useUsers} from "../data/data";
import UserSettings from "../components/UserSettings";

const ManageUsersPage = () => {
	const users = useUsers();
	return (
		<div className="bg-gray-100 w-full min-h-screen space-y-4 flex flex-col items-center">
			<Menu />
			{users.map(user => (
				<UserSettings key={user.id} {...user} />
			))}
		</div>
	);
};

export default ManageUsersPage;
