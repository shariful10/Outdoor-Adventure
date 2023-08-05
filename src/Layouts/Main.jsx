import React from "react";
import Container from "./../Components/Shared/Container/Container";
import Navbar from "./../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
	return (
		<div className="">
			<Navbar />
			<Container>
				<Outlet />
			</Container>
			<Footer />
		</div>
	);
};

export default Main;
