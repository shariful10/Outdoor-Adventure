import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AllSection from "../Pages/Home/AllSection/AllSection";
import Projects from "../Pages/Projects/Projects";
import Login from "../Pages/Login/Login";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/",
				element: <AllSection />,
			},
			{
				path: "/about",
				element: <About></About>,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/projects",
				element: <Projects />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
		],
	},
]);
