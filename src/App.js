import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import SettingsPage from "./pages/SettingsPage";
import ManageUsersPage from "./pages/ManageUsersPage";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/home" element={<HomePage />} />
				<Route path="/manage-users" element={<ManageUsersPage />} />
				<Route path="/settings" element={<SettingsPage />} />
			</Routes>
		</Router>
	);
}

export default App;
