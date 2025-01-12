import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

import Button from "../components/Button";
import Icon from "../components/Icon";

const LoginPage = () => {
	const navigate = useNavigate();

	return (
		<div className="bg-gray-100 flex items-center justify-center min-h-screen flex-col gap-7">
			<Icon name="calendar" size={48} color="black" />
			<h1 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">Welcome to Schedule App</h1>
			<Button
				icon="google"
				label="Login with Google"
				className={
					"mx-auto mb-4 sm:mb-6 bg-red-400 text-white bg-gradient-to-r from-red-500 to-red-400 hover:from-red-600 hover:to-red-500 focus:ring-4 focus:ring-red-300 focus:outline-none transition duration-300 ease-in-out"
				}
				onClick={() => navigate("/home")}
			/>
		</div>
	);
};

export default LoginPage;
