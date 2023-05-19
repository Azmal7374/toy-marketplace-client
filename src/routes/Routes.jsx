import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddToy from "../pages/AddToy/AddToy";
import ErrorPage from "../pages/Errorpage/ErrorPage";
import AllToys from "../pages/AllToys/AllToys";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog/Blog";
import ToyDetails from "../pages/toydDetails/ToyDetails";

 




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
             element: 
             <AddToy></AddToy>
            },
            {
            path:'/allToys',
            element:<AllToys></AllToys>
            },
            {
              path:'allToys/:id',
              element:<ToyDetails/>,
              loader:({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
            },
            {
           path:'blog',
           element:<Blog></Blog>
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
  