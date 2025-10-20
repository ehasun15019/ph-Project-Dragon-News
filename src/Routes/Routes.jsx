import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoutes from "./PrivateRoutes";
import Error from "../pages/Error";

const routes  = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayout></HomeLayout>,
            errorElement: <Error></Error>,
            children: [
                {
                    path: "/",
                    element: <Home></Home>
                },
                {
                    path: "/category/:id",
                    element: <CategoryNews></CategoryNews>,
                    loader: () => {
                        return fetch("/news.json")
                    }
                }
            ]
        },
        {
            path: "/news-details/:id",
            element: <PrivateRoutes>
                <NewsDetails></NewsDetails>
            </PrivateRoutes>,
            
            loader: () => {
                return fetch("/news.json")
            }
        },
        {
            path: "/auth",
            element: <AuthLayout></AuthLayout>,
            children: [
                {
                    path: "/auth/login",
                    element: <Login></Login>
                },
                {
                    path: "/auth/register",
                    element: <Register></Register>
                }
            ]
        }
    ]
)


export default routes