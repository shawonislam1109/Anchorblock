import { createBrowserRouter } from "react-router-dom";
import Login from "../Page/Login";
import Register from "../Page/Register";
import Dashlayout from "../Dashboard/Dashlayout";

const route = createBrowserRouter([
    {
        path: '/',
        element: <Dashlayout/>,
        children: [
            {
                
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