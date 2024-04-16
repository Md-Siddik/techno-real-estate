import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Details from "../pages/Details/Details";
import PrivetRoute from "./PrivetRoute";
import Error from "../pages/Shared/Error/Error";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/residential.json')
            },
            {
                path: '/details/:id',
                element: <PrivetRoute><Details></Details></PrivetRoute>,
                loader: () => fetch('/public/residential.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            
        ]
    }
])

export default router;





