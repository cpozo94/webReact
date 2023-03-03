import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import NavBar from "./navbar.jsx";
import Footer from "./footer.jsx";
import Body from "./body.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<NavBar/>
			
			
			<Body />
			
		<Footer />
		</div>
	);
};

export default Home;
