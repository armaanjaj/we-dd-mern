import * as React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import "./App.css";
import Home from "./Pages/user/customer/Home";
import About from "./Pages/user/customer/About";
import Services from "./Pages/user/customer/Services";
import Ride from "./Pages/user/customer/Ride";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
	return (
		<>
			<Router>
				<ScrollToTop/>
				<Routes>
					<Route path="*" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/services" element={<Services />} />
					<Route path="/ride" element={<Ride />} />
					<Route path="/customer" element={<Navigate replace to="/" />} />
				</Routes>
			</Router>
		</>
	);
};

export default App;
