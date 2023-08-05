import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AllSection from "../Pages/Home/AllSection/AllSection";
import Projects from "../Pages/Projects/Projects";

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
				path: "/projects",
				element: <Projects />,
			},
		],
	},
]);
