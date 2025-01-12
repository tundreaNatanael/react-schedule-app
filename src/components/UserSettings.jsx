import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import Button from "../components/Button";
import User from "../components/User";

const validationSchema = Yup.object().shape({
	nickname: Yup.string().required("Nickname is required"),
	emoji: Yup.string().required("Emoji is required"),
	perWeekHours: Yup.number()
		.min(0, "Cannot be lower than nothing")
		.max(168, "Cannot be more than 168")
		.required("Max user weekly hours is required"),
});

const UserSettings = user => {
	const initialValues = {
		nickname: user.nickname,
		emoji: user.emoji,
		perWeekHours: user.perWeekHours,
	};

	return (
		<div className="space-y-4 p-4 bg-white rounded-lg shadow-md">
			<User user={user} />
			<hr className="my-4" />
			<Formik
				initialValues={initialValues}
				onSubmit={values => {
					console.log(values);
				}}
				validationSchema={validationSchema}
			>
				{({values, handleChange, handleBlur}) => (
					<Form>
						<div className="text-lg font-semibold">Personal settings</div>
						<div className="flex items-center justify-right gap-8">
							<label htmlFor="nickname">Edit nickname</label>
							<Field
								id="nickname"
								name="nickname"
								type="text"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.nickname}
								className="border p-2"
							/>
						</div>
						<ErrorMessage name="nickname" component="div" className="text-red-400" />
						<div className="flex items-center justify-right gap-8">
							<label htmlFor="emoji">Edit emoji</label>
							<Field
								id="emoji"
								name="emoji"
								type="text"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.emoji}
								className="border p-2"
							/>
						</div>
						<ErrorMessage name="emoji" component="div" className="text-red-400" />
						<div className="text-lg font-semibold">General user setting</div>
						<div className="flex items-center justify-right gap-8">
							<label htmlFor="perWeekHours">Set max number of weekly hours</label>
							<Field
								id="perWeekHours"
								name="perWeekHours"
								type="number"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.perWeekHours}
								className="border p-2"
							/>
						</div>
						<ErrorMessage name="perWeekHours" component="div" className="text-red-400" />
						<div className="flex justify-end">
							<Button type="submit" label="Save" className="bg-amber-600 text-white" />
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default UserSettings;
