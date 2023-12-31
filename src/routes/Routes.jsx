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
import MyToys from "../pages/MyToys/MyToys";
import UpdatToy from "../pages/UpdateToy/UpdateToy";

 




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
              path:'/allToys/:id',
              element:<PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
              loader:({params}) => fetch(`https://toy-marketplace-server-azmal7374.vercel.app/toys/${params.id}`)
            },
            {
               path:'/MyToys',
               element:<PrivateRoute>
               <MyToys></MyToys>
               </PrivateRoute>
            },
            {
           path:'/blog',
           element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/UpdateToy/:id',
                element:<UpdatToy></UpdatToy>,
                loader: ({params}) => fetch(`https://toy-marketplace-server-azmal7374.vercel.app/updateToys/${params.id}`)
            }
        ]
    }
  ]);
  
  export default router;
  