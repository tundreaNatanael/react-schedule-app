import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Menu from "./components/Menu";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import SettingsPage from "./pages/SettingsPage";
import ManageUsersPage from "./pages/ManageUsersPage";

function App() {
	return (
		<div className="flex p-4">
			<Router>
				<Menu className="w-64" />
				<div className="flex-1 p-4">
					<Routes>
						<Route path="/" element={<LoginPage />} />
						<Route path="/home" element={<HomePage />} />
						<Route path="/manage-users" element={<ManageUsersPage />} />
						<Route path="/settings" element={<SettingsPage />} />
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;
