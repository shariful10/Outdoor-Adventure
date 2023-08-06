import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  // const [isSignIn, setIsSignIn] = useState(location.pathname === "/login");
  const isSignIn = location.pathname === "/login";
  const isSignUp = location.pathname === "/signup";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Update the isSignIn state when the location changes
  // useEffect(() => {
  //   setIsSignIn(location.pathname === "/login");
  // }, [location.pathname]);

  return (
    <div
      className={`fixed top-0 w-full z-20 py-2  ${
        scrolling || isSignIn || isSignUp
          ? "bg-white z-10 shadow-sm"
          : "bg-transparent text-white"
      } duration-500`}
    >
      <div className="navbar max-w-7xl mx-auto p-3 md:p-5 2xl:p-0">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              onClick={() => setOpen(!open)}
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            {/* Mobile Menu */}
            <div
              className={`${
                open
                  ? "top-12 -left-2 lg:hidden text-black"
                  : "top-10 -left-[500px] lg:hidden"
              } bg-white rounded px-8 py-10 shadow-2xl border text-lg absolute z-10 transition-all duration-500`}
            >
              <ul className="w-48 h-52 flex flex-col justify-between">
                <li>
                  <Link className="text-lg font-NotoSans  group " to="/">
                    Home
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-primary mt-[1px]"></span>
                  </Link>
                </li>
                <li>
                  <Link className="text-lg font-NotoSans  group " to="/about">
                    About
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-primary mt-[1px]"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-lg font-NotoSans  group "
                    to="/services"
                  >
                    Services
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-primary mt-[1px]"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-lg font-NotoSans  group "
                    to="/projects"
                  >
                    Project
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-primary mt-[1px]"></span>
                  </Link>
                </li>
                <li>
                  <Link className="text-lg font-NotoSans  group " to="/contact">
                    Contact
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-primary mt-[1px]"></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Link
            className={`hidden md:block ${
              scrolling || isSignIn || isSignUp
                ? "filter invert"
                : "filter-none invert-0"
            }`}
          >
            <img
              className="w-40"
              src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2020/01/white-logo.png"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-6 py-4">
            <li>
              <Link className="text-lg font-NotoSans  group " to="/">
                Home
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-primary   mt-[1px]"></span>
              </Link>
            </li>
            <li>
              <Link className="text-lg font-NotoSans  group " to="/about">
                About
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-primary   mt-[1px]"></span>
              </Link>
            </li>
            <li>
              <Link className="text-lg font-NotoSans  group " to="/services">
                Services
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-primary   mt-[1px]"></span>
              </Link>
            </li>
            <li>
              <Link className="text-lg font-NotoSans  group " to="/projects">
                Project
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-primary   mt-[1px]"></span>
              </Link>
            </li>
            <li>
              <Link className="text-lg font-NotoSans  group " to="/contact">
                Contact
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-primary   mt-[1px]"></span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to="/login"
            className={`bg-primary px-10 py-2 md:py-3 rounded-full font-medium md:font-semibold font-NotoSans primary_button ${
              scrolling || isSignIn || isSignUp ? "text-white" : "text-white"
            }`}
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
