import React, {useState} from "react";
import Menu from "../components/Menu";
import {useUsers} from "../data/data";
import UserSettings from "../components/UserSettings";

const ManageUsersPage = () => {
	const users = useUsers();
	const [searchQuery, setSearchQuery] = useState("");
	const filteredUsers = users.filter(
		user =>
			user.firstname.toLowerCase().includes(searchQuery.toLowerCase()) ||
			user.lastname.toLowerCase().includes(searchQuery.toLowerCase()),
	);

	return (
		<div className="bg-gray-100 w-full min-h-screen space-y-6 flex flex-col items-center">
			<Menu />

			<div className="w-full max-w-3xl px-4">
				<input
					type="text"
					placeholder="Search users..."
					value={searchQuery}
					onChange={e => setSearchQuery(e.target.value)}
					className="w-full px-4 py-3 rounded-lg shadow-md border border-gray-300 focus:ring focus:ring-blue-300 focus:outline-none text-gray-700"
				/>
			</div>

			<div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 px-4">
				{filteredUsers.length > 0 ? (
					filteredUsers.map(user => <UserSettings key={user.id} {...user} />)
				) : (
					<p className="text-gray-500 col-span-full text-center">No users found matching "{searchQuery}"</p>
				)}
			</div>
		</div>
	);
};

export default ManageUsersPage;
