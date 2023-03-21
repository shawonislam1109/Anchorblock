import { createBrowserRouter } from "react-router-dom";
import Login from "../Page/Login";
import Register from "../Page/Register";
import Dashlayout from "../Dashboard/Dashlayout";
import Dashboard from "../Dashboard/Dashboard";
import UserList from "../Dashboard/UserList";

const route = createBrowserRouter([
    {
        path: '/',
        element: <Dashlayout/>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
            {
                path: '/userlist',
                element: <UserList/>
            }
        ]
    },
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