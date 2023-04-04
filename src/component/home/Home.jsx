import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../header/Header";

const Home = () => {
	const navigation = useNavigation();

	return (
		<div>
			<Header></Header>
			{/* make a component and place it in "Loading" */}
			<div>{navigation.state === "loading" ? "Loading" : ""}</div>
			<Outlet></Outlet>
		</div>
	);
};

export default Home;
