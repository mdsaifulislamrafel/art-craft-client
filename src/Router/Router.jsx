import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import UserProfile from "../Pages/UserProfile";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            }, {
                path: "/login",
                element: <Login />
            }, {
                path: "/register",
                element: <Register />
            },
            {
                path: "/userProfile",
                element: <UserProfile />
            }
        ]
    }

]);
