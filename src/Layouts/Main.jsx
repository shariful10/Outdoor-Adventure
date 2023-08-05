import React from "react";
import Navbar from "./../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
