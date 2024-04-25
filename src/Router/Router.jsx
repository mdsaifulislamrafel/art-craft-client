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
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyArt from "../Pages/MyArt";
import Error from "../Pages/Error";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
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
                element: <AllArt />
            },
            {
                path: "/add-art",
                element: <PrivateRoute><AddArt /></PrivateRoute>
            },
            {
                path: "/my-art",
                element: <PrivateRoute><MyArt /></PrivateRoute>
            }
        ]
    }

]);
