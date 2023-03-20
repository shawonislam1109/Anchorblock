import { createBrowserRouter } from "react-router-dom";
import Login from "../Page/Login";
import Register from "../Page/Register";

const route = createBrowserRouter([
    {
        path: '/signin',
        element:<Login/>
    },
    {
        path: '/register',
        element: <Register/>
    }
])

export default route ; 