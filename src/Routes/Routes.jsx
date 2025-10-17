import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";

const routes  = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayout></HomeLayout>
        }
    ]
)


export default routes