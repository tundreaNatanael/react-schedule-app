import React from "react";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {StaticDatePicker} from "@mui/x-date-pickers/StaticDatePicker";
import Menu from "../components/Menu";
import Button from "../components/Button";
import Icon from "../components/Icon";
import {useMyUser} from "../data/data";

const HomePage = () => {
	const me = useMyUser();
	return (
		<div className="bg-gray-100 w-full min-h-screen space-y-4 flex flex-col items-center">
			<Menu />
			<div
				className={`flex items-center justify-center gap-4 text-2xl font-bold rounded-lg shadow-lg px-5 py-3 bg-white ${me.role === "admin" ? "" : me.perWeekHours - me.hoursConsumed > 0 ? "bg-green-200" : "bg-pink-200"}`}
			>
				{me.role === "admin" ? "Your hours this week" : "Hours left this week"}
				<Icon name="arrowRight" size={48} color="gray" />
				{me.role === "admin" ? me.hoursConsumed : me.perWeekHours - me.hoursConsumed}
			</div>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<StaticDatePicker orientation="landscape" />
			</LocalizationProvider>
			<Button label="Schedule" icon="addBox" className="bg-blue-600 text-white" />
		</div>
	);
};

export default HomePage;
