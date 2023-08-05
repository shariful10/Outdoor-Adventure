import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

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
  return (
    <div
      className={`navbar fixed top-0 w-full z-20  ${
        scrolling
          ? "bg-white z-10 border-b"
          : "bg-transparent text-white border-b-0"
      } duration-300`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
            <li>
              <Link
                className="text-xl hover:bg-blue-600 hover:text-white"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-xl hover:bg-blue-600 hover:text-white"
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-xl hover:bg-blue-600 hover:text-white"
                to="/services"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="text-xl hover:bg-blue-600 hover:text-white"
                to="/projects"
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                className="text-xl hover:bg-blue-600 hover:text-white"
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Outdoor Adventure</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">
          <li>
            <Link className="text-xl hover:bg-blue-600 hover:text-white" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-xl hover:bg-blue-600 hover:text-white"
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="text-xl hover:bg-blue-600 hover:text-white"
              to="/services"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="text-xl hover:bg-blue-600 hover:text-white"
              to="/projects"
            >
              Project
            </Link>
          </li>
          <li>
            <Link
              className="text-xl hover:bg-blue-600 hover:text-white"
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
