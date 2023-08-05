import React from "react";
import Container from "./../Components/Shared/Container/Container";
import Navbar from "./../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
	return (
		<div className="">
			<Container>
				<Navbar />
				<Outlet />
				<Footer />
			</Container>
		</div>
	);
};

export default Main;
