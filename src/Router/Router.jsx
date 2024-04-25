import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import UserProfile from "../Pages/UserProfile";
import AllArt from "../Pages/AllArt";
import AddArt from "../Pages/AddArt";
import PrivateRoute from "../PriveatRoute/PrivateRoute";

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
            },
            {
                path: "/all-art",
                element: <PrivateRoute><AllArt /></PrivateRoute>
            },
            {
                path: "/add-art",
                element: <PrivateRoute><AddArt /></PrivateRoute>
            }
        ]
    }

]);
