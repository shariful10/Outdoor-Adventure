import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AllSection from "../Pages/Home/AllSection/AllSection";
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
				path: "/contact",
				element: <Contact />,
			},
		],
	},
]);
