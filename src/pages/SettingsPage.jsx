import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import Menu from "../components/Menu";
import Button from "../components/Button";
import {useMyUser, usePlatformData} from "../data/data";

const validationSchema = Yup.object().shape({
	editNickname: Yup.string().required("Nickname is required"),
	editEmoji: Yup.string().required("Emoji is required"),
	maxPlatformDailyHours: Yup.number()
		.min(0, "Must be at least 0")
		.max(24, "Cannot be more than 24")
		.required("Max daily hours is required"),
	maxPlatformWeeklyHours: Yup.number()
		.min(0, "Must be at least 0")
		.max(168, "Cannot be more than 168")
		.required("Max weekly hours is required"),
	maxUserWeeklyHours: Yup.number()
		.min(0, "Must be at least 0")
		.max(168, "Cannot be more than 168")
		.required("Max user weekly hours is required"),
});

const SettingsPage = () => {
	const me = useMyUser();

	const platformData = usePlatformData();

	const initialValues = {
		editNickname: me.nickname || "",
		editEmoji: me.emoji || "",
		maxPlatformDailyHours: platformData.maxPlatformDailyHours || 14,
		maxPlatformWeeklyHours: platformData.maxPlatformWeeklyHours || 90,
		maxUserWeeklyHours: platformData.maxUserWeeklyHours || 3,
	};

	return (
		<div className="bg-gray-100 w-full min-h-screen space-y-4 flex flex-col items-center">
			<Menu />
			<Formik
				initialValues={initialValues}
				onSubmit={values => {
					console.log(values);
				}}
				validationSchema={validationSchema}
			>
				{({values, handleChange, handleBlur}) => (
					<Form className="space-y-4 p-4 bg-white rounded-lg shadow-md">
						<div className="text-lg font-semibold">Personal settings</div>
						<div className="flex items-center justify-right gap-8">
							<label htmlFor="editNickname">Edit nickname</label>
							<Field
								id="editNickname"
								name="editNickname"
								type="text"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.editNickname}
								className="border p-2"
							/>
						</div>
						<ErrorMessage name="editNickname" component="div" className="text-red-400" />
						<div className="flex items-center justify-right gap-8">
							<label htmlFor="editEmoji">Edit emoji</label>
							<Field
								id="editEmoji"
								name="editEmoji"
								type="text"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.editEmoji}
								className="border p-2"
							/>
						</div>
						<ErrorMessage name="editEmoji" component="div" className="text-red-400" />
						{me.role === "admin" && (
							<>
								<div className="text-lg font-semibold">For the whole platform</div>
								<div className="flex items-center justify-right gap-8">
									<label htmlFor="maxPlatformDailyHours">Set max number of daily hours</label>
									<Field
										id="maxPlatformDailyHours"
										name="maxPlatformDailyHours"
										type="number"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.maxPlatformDailyHours}
										className="border p-2"
									/>
								</div>
								<ErrorMessage name="maxPlatformDailyHours" component="div" className="text-red-400" />
								<div className="flex items-center justify-right gap-8">
									<label htmlFor="maxPlatformWeeklyHours">Set max number of weekly hours</label>
									<Field
										id="maxPlatformWeeklyHours"
										name="maxPlatformWeeklyHours"
										type="number"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.maxPlatformWeeklyHours}
										className="border p-2"
									/>
								</div>
								<ErrorMessage name="maxPlatformWeeklyHours" component="div" className="text-red-400" />
								<div className="text-lg font-semibold">General user setting</div>
								<div className="flex items-center justify-right gap-8">
									<label htmlFor="maxUserWeeklyHours">Set max number of weekly hours</label>
									<Field
										id="maxUserWeeklyHours"
										name="maxUserWeeklyHours"
										type="number"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.maxUserWeeklyHours}
										className="border p-2"
									/>
								</div>
								<ErrorMessage name="maxUserWeeklyHours" component="div" className="text-red-400" />
							</>
						)}
						<div className="flex justify-end">
							<Button type="submit" label="Save" className="bg-pink-600 text-white" />
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default SettingsPage;
