import * as React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import "./App.css";

// pages
import Home from "./Pages/user/customer/Home";
import About from "./Pages/user/customer/About";
import Services from "./Pages/user/customer/Services";
import Ride from "./Pages/user/customer/Ride";
import Login from "./Pages/app/Login";
import Signup from "./Pages/app/Signup";
import ForgotPassword from "./Pages/app/Forgotpassword";
import Account from "./Pages/app/Account";

// assistance
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
	return (
		<>
			<Router>
				<ScrollToTop/>
				<Routes>
					<Route path="*" element={<Home />} />
					<Route path="/ride" element={<Ride />} />
					<Route path="/about" element={<About />} />
					<Route path="/services" element={<Services />} />
					<Route path="/auth/login" element={<Login />} />
					<Route path="/auth/signup" element={<Signup />} />
					<Route path="/accounts/password/reset" element={<ForgotPassword />} />
					<Route path="/accounts" element={<Account />} />
					<Route path="/accounts" element={<Account />} />
				</Routes>
			</Router>
		</>
	);
};

export default App;
