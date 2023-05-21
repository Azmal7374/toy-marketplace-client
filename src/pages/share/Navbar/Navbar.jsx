import React, { useContext, useState } from "react";
import {
  BoltIcon,
  Bars3BottomRightIcon,
  XMarkIcon, ArrowLeftOnRectangleIcon
} from "@heroicons/react/24/solid";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faUser, faMessage, faGear, faLock, faArrowRightFromBracket, faPlus } from "@fortawesome/free-solid-svg-icons"; 
import useTitle from "../../../hooks/UseTitle";
import { AuthContext } from "../../../provider/AuthProvider";
import logo from "../../../assets/logo.png"
const Navbar = () => {
  useTitle('Navbar')
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(() => {
        console.log(error.message);
      });
  };
  
  return (
    <div className=" sticky top-0 z-30 bg-white">
      <div className="navbar  ml-12 ">
       
       <img data-aos="fade-down" className="w-20 md:w-24 " src={logo}  alt="" />
        <h2 className="text-xl md:text-3xl font-bold ml-2">KidsToys</h2>

      
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-4 bg-base-100 rounded-md  w-52"
            >
            
          <p className="px-2 my-3">
          <NavLink  
          to='/'
          className={({ isActive }) => (isActive ? 'active' : 'default') }
        >
          Home
        </NavLink>
          </p>
          
          
           <p className="px-2 py-2">
           <NavLink
           to='/allToys'
           className={({ isActive }) => (isActive ? 'active' : 'default')}
         >
           All Toys
         </NavLink>
           </p>
          
         
            {
                user &&
                <p className="px-2 py-2">
            <NavLink
              to='/MyToys'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              My Toys
            </NavLink>
            </p>
            }
         
        {
            user &&
            <p className="px-2 py-2">
            <NavLink
            to='/addAToy'
            className={({ isActive }) => (isActive ? 'active' : 'default')}
          >
           Add A Toy
          </NavLink>
            </p>
        }
          {user?.email &&  
           <p className="px-2 py-2">
           <NavLink
           to='/blog'
           className={({ isActive }) => (isActive ? 'active' : 'default')}
         >
           Blog
         </NavLink>
           </p>
           }
          {!user?.email ?
            <>
             <p className="px-2 py-2">
             
             <NavLink
             to='/login'
             className={({ isActive }) => (isActive ? 'active' : 'default')}
           >
             Login
           </NavLink>
             </p>  
            </> :
         <p className="px-2 py-2">  
         <NavLink> <button onClick={logOut} className="text-orange-600 font-bold">Sign Out</button></NavLink>
         </p>
          }
               
          
              </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ml-24">
              <p className="mx-4 my-4">
              <NavLink  
                to='/'
                className={({ isActive }) => (isActive ? 'active' : 'default')}
              >
                Home
              </NavLink>
              </p>
           <p className="mx-4  my-4">
           <NavLink
           to='/allToys'
           className={({ isActive }) => (isActive ? 'active' : 'default')}
         >
          All Toys
         </NavLink>
           </p>
              {
                user && 
                <p  className="mx-4  my-4">
              <NavLink
                to='/MyToys'
                className={({ isActive }) => (isActive ? 'active' : 'default')}
              >
                My Toys
              </NavLink>
              </p>
              }
          {
            user && 
            <p  className="mx-4  my-4">
            <NavLink
            to='/addAToy'
            className={({ isActive }) => (isActive ? 'active' : 'default')}
          >
            Add A Toy
          </NavLink>
            </p>
          }
           <p  className="mx-4  my-4">
           <NavLink
           to='/blog'
           className={({ isActive }) => (isActive ? 'active' : 'default')}
         >
         Blog
         </NavLink>
           </p>
            
            {!user?.email ?
              <>
                
                <p  className="mx-4  my-4">
                <NavLink
                to='/login'
                className={({ isActive }) => (isActive ? 'active' : 'default')}
              >
                Login
              </NavLink>
                </p>
               
              </> :
           <p className="mx-4  my-4">
           <NavLink
           to='/register'
           className={({ isActive }) => (isActive ? 'active' : 'default')}
         >
         <button onClick={logOut} className="text-orange-600 font-bold">Sign Out</button>
         </NavLink>
           </p>
            }
           
          </ul>
        </div>
        <div className="navbar-end mr-12 lg:mr-20" data-aos="fade-down">
        {
            user &&
            <img className="h-20 w-20  rounded-full" title={user?.displayName} src={user? user.photoURL: ""} />
        }
       
        </div>
      </div>
    </div>
  );
};

export default Navbar;
