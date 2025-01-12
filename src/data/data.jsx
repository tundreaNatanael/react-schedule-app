export const useMyUser = () => {
	return {
		id: 230,
		firstname: "John",
		lastname: "Doe",
		email: "john.doe@emanuel.ro",
		role: "admin",
		nickname: "johnd",
		emoji: "👨‍💻",
	};
};

export const useUsers = () => {
	return [
		{
			id: 1,
			firstname: "Jane",
			lastname: "Smith",
			email: "jane.smith@example.com",
			role: "user",
			nickname: "janes",
			emoji: "👩‍💻",
			perWeekHours: 35,
		},
		{
			id: 2,
			firstname: "Alice",
			lastname: "Johnson",
			email: "alice.johnson@example.com",
			role: "user",
			nickname: "alicej",
			emoji: "👩‍💼",
			perWeekHours: 30,
		},
		{
			id: 3,
			firstname: "Bob",
			lastname: "Brown",
			email: "bob.brown@example.com",
			role: "user",
			nickname: "bobb",
			emoji: "👨‍💼",
			perWeekHours: 40,
		},
		{
			id: 4,
			firstname: "Charlie",
			lastname: "Davis",
			email: "charlie.davis@example.com",
			role: "user",
			nickname: "charlied",
			emoji: "👨‍🔧",
			perWeekHours: 25,
		},
		{
			id: 5,
			firstname: "David",
			lastname: "Wilson",
			email: "david.wilson@example.com",
			role: "user",
			nickname: "davidw",
			emoji: "👨‍🏫",
			perWeekHours: 20,
		},
		{
			id: 6,
			firstname: "Eve",
			lastname: "Miller",
			email: "eve.miller@example.com",
			role: "user",
			nickname: "evem",
			emoji: "👩‍🔬",
			perWeekHours: 30,
		},
		{
			id: 7,
			firstname: "Frank",
			lastname: "Moore",
			email: "frank.moore@example.com",
			role: "user",
			nickname: "frankm",
			emoji: "👨‍🎨",
			perWeekHours: 35,
		},
		{
			id: 8,
			firstname: "Grace",
			lastname: "Taylor",
			email: "grace.taylor@example.com",
			role: "user",
			nickname: "gracet",
			emoji: "👩‍🎤",
			perWeekHours: 40,
		},
		{
			id: 9,
			firstname: "Hank",
			lastname: "Anderson",
			email: "hank.anderson@example.com",
			role: "user",
			nickname: "hanka",
			emoji: "👨‍🚀",
			perWeekHours: 25,
		},
		{
			id: 10,
			firstname: "Ivy",
			lastname: "Thomas",
			email: "ivy.thomas@example.com",
			role: "user",
			nickname: "ivyt",
			emoji: "👩‍🚀",
			perWeekHours: 20,
		},
	];
};

export const usePlatformData = () => {
	return {
		maxPlatformDailyHours: 14,
		maxPlatformWeeklyHours: 90,
		maxUserWeeklyHours: 3,
	};
};
