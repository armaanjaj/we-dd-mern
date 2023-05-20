import * as React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import "./App.css";

// pages

// Application
import Login from "./Pages/app/Login";
import Signup from "./Pages/app/Signup";
import ForgotPassword from "./Pages/app/Forgotpassword";
import Account from "./Pages/app/Account";
import PageNotFound from "./Pages/app/Page_not_found";

// Customer
import IndexC from "./Pages/user/customer/index";
import About from "./Pages/user/customer/About";
import Services from "./Pages/user/customer/Services";
import Ride from "./Pages/user/customer/Ride";

// Driver
import IndexD from "./Pages/user/driver/index";

// Admin
import IndexA from "./Pages/user/admin/index";

// assistance
import ScrollToTop from "./components/app/assistance/ScrollToTop";

const App = () => {
	return (
		<>
			<Router>
				<ScrollToTop/>
				<Routes>
					{/* Application */}
					<Route path="/auth/login" element={<Login />} />
					<Route path="/auth/signup" element={<Signup />} />
					<Route path="/accounts/password/reset" element={<ForgotPassword />} />
					<Route path="/accounts" element={<Account />} />
					<Route path="*" element={<PageNotFound />} />
					
					{/* Customer */}
					<Route path="/" element={<IndexC />} />
					<Route path="/ride" element={<Ride />} />
					<Route path="/about" element={<About />} />
					<Route path="/services" element={<Services />} />

					{/* Driver */}
					<Route path="/driver" element={<IndexD />}/>

					{/* Admin */}
					<Route path="/admin" element={<IndexA />}/>
				</Routes>
			</Router>
		</>
	);
};

export default App;
