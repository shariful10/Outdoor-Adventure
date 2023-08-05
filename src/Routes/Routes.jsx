import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AllSection from "../Pages/Home/AllSection/AllSection";
import Login from "../Pages/Login/Login";

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
				path: "/login",
				element: <Login />,
			},
		],
	},
]);
