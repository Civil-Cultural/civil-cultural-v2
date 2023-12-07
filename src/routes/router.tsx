/* --- libs --- */
import { Outlet, createBrowserRouter, useRouteError } from "react-router-dom";

/* --- pages --- */
import App from "App";
import Home from "@pages/home";
import Error from "@pages/_error";
import Login from "@pages/login";
import NotFound from "@pages/NotFound";
import Register from "@pages/register";
import RegisterAdmin from "@pages/register-admin";
import NewPassword from "@pages/reset-password";
import Profile from "@pages/profile";
import Publication from "@pages/publication";

function CheckError() {
    const error = useRouteError() as any;

    return error.statusCode === 404 ? <NotFound /> : <Error />;
}

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <CheckError />,

        children: [
            {
                path: "home",
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: "register-admin",
                element: <RegisterAdmin />
            },
            {
                path: "reset-password",
                element: <NewPassword />
            },
            {
                path: "",
                element: <Outlet />,
                children: [
                    {
                        path: "profile",
                        element: <Profile />
                    },
                    {
                        path: "publication",
                        element: <Publication />
                    }
                ]
            }
        ]
    }
])