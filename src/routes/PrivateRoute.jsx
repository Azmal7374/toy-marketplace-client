import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Audio, ThreeCircles } from 'react-loader-spinner';
import Sppiner from '../pages/share/Spinner/Sppiner';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const{user, loading} = useContext(AuthContext);
    const location = useLocation()
    console.log(location);
        console.log(loading);
    if(loading){
        return  (
          <div className="mt-10 text-center">
            <Sppiner></Sppiner>
          </div>
        )
    }
    
    if(user){
        return children;
     }
    return  <Navigate to='/login' state={{from:location}} replace></Navigate>;
};

export default PrivateRoute;