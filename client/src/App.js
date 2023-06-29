import * as React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import "./App.css";

// Application
import PageNotFound from "./Pages/app/Page_not_found";

// Customer
import IndexC from "./Pages/user/customer/index";
import About from "./Pages/user/customer/About";
import Services from "./Pages/user/customer/Services";
import Ride from "./Pages/user/customer/Ride";

// assistance
import ScrollToTop from "./components/app/assistance/ScrollToTop";

const App = () => {
	return (
		<>
			<Router>
				<ScrollToTop/>
				<Routes>
					{/* Application */}
					<Route path="*" element={<PageNotFound />} />
					
					{/* Customer */}
					<Route path="/" element={<IndexC />} />
					<Route path="/ride" element={<Ride />} />
					<Route path="/about" element={<About />} />
					<Route path="/services" element={<Services />} />
				</Routes>
			</Router>
		</>
	);
};

export default App;
