import React from "react";
import Button from "./Button";
import {useNavigate, useLocation} from "react-router-dom";
import {useMyUser} from "../data/data";

const Menu = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const me = useMyUser();

	const isActive = path => location.pathname === path;

	return (
		<div className="flex flex-col px-4 py-4 gap-4 max-w-[500px] md:gap-6">
			<div className="flex flex-col items-center">
				<Button
					icon="calendar"
					iconColor="black"
					className="flex flex-col items-center"
					onClick={() => navigate("/home")}
				/>
				{isActive("/home") && <div className="w-full h-1 bg-gray-400 mt-1"></div>}
				<div className="hidden md:block mt-2 text-center">Home</div>
			</div>
			{me.role === "admin" && (
				<div className="flex flex-col items-center">
					<Button
						icon="manageUsers"
						iconColor="black"
						className="flex flex-col items-center"
						onClick={() => navigate("/manage-users")}
					/>
					{isActive("/manage-users") && <div className="w-full h-1 bg-gray-400 mt-1"></div>}
					<div className="hidden md:block mt-2 text-center">Manage Users</div>
				</div>
			)}
			<div className="flex flex-col items-center">
				<Button
					icon="settings"
					iconColor="black"
					className="flex flex-col items-center"
					onClick={() => navigate("/settings")}
				/>
				{isActive("/settings") && <div className="w-full h-1 bg-gray-400 mt-1"></div>}
				<div className="hidden md:block mt-2 text-center">Settings</div>
			</div>
		</div>
	);
};

export default Menu;
