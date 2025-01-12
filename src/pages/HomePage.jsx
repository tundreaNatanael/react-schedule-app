import React from "react";
import Menu from "../components/Menu";
import Button from "../components/Button";

const HomePage = () => {
	return (
		<div className="bg-gray-100 w-full min-h-screen space-y-4 flex flex-col items-center">
			<Menu />
			<span>Spalari ramase pe sap</span>
			<span>Calendar</span>
			<Button label="Adauga o spalare" icon="addBox" className="bg-blue-600 text-white" />
		</div>
	);
};

export default HomePage;
