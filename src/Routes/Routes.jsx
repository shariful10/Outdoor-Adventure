import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AllSection from "../Pages/Home/AllSection/AllSection";
<<<<<<< HEAD
import Login from "../Pages/Login/Login";
=======
import Projects from "../Pages/Projects/Projects";
>>>>>>> 873962353d544e8da6e49c6108ba86c490757d2f

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
<<<<<<< HEAD
				path: "/login",
				element: <Login />,
=======
				path: "/projects",
				element: <Projects />,
>>>>>>> 873962353d544e8da6e49c6108ba86c490757d2f
			},
		],
	},
]);
