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
import CartDetails from "../Pages/CartDetails";
import { url } from "../utility/url";
import UpdateForm from "../Pages/UpdateForm";
import CategoriesCard from "../Pages/CategoriesCard";

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
                element: <AllArt />,
                loader: () => fetch(`${url}/added`)
            },
            {
                path: "/add-art",
                element: <PrivateRoute><AddArt /></PrivateRoute>
            },
            {
                path: "/details/:id",
                element: <PrivateRoute><CartDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`${url}/added/${params.id}`)
            },
            
            {
                path: "/my-art",
                element: <PrivateRoute><MyArt /></PrivateRoute>
            }, {
                path: "/update/:id",
                element: <UpdateForm />,
                loader: ({ params }) => fetch(`${url}/added/${params.id}`)
            }, 
            {
                path: "/categories/:category",
                element: <CategoriesCard />,
                loader: ({ params }) => fetch(`${url}/category/${params.category}`)

            }
        ]
    }

]);
