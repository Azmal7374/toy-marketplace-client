import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddToy from "../pages/AddToy/AddToy";
import ErrorPage from "../pages/Errorpage/ErrorPage";
import AllToys from "../pages/AllToys/AllToys";

 




const router = createBrowserRouter([
    {
        path:'/',
        errorElement:<ErrorPage></ErrorPage>,
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
             path:'/addAToy',
             element:<AddToy></AddToy>
            },
            {
            path:'allToys',
            element:<AllToys></AllToys>
            },
            {

            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
  ]);
  
  export default router;
  