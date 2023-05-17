import { GithubAuthProvider, GoogleAuthProvider, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useContext, useRef, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, } from "@fortawesome/free-solid-svg-icons";
import google from '../../assets/google.png';
import Swal from "sweetalert2";
import app from '../../firebase/firebase.config';
import { AuthContext } from '../../provider/AuthProvider';
 

const Login = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider()
  const {logIn, resetPassword} = useContext(AuthContext);
    const [show, setShow]= useState(false);
    const[error, setError] = useState('')
    const[success, setSuccess] = useState('')
    const emailRef = useRef();
    const navigate = useNavigate()
    const location = useLocation();
    console.log(location);

    const from = location.state?.from?.pathname || '/'


    const handleLogin =(event) =>{
        event.preventDefault();
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

       
        logIn(email, password)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            form.reset();
            navigate(from, {replace:true})
            
            setError('');
            Swal.fire({
              title: "Success",
              text: "User logged in successfully! ",
              icon: "success",
              confirmButtonText: "OK",
            });
        })
        .catch(error=>{
            console.log(error.message);
            if(error.code == 'auth/user-not-found' ){
                setError('Plese Add User');
            }
            else if(error.code == 'auth/wrong-password'){
                 setError('Invalid password');
            }
        })
    }

  
    const handleResetPassword =() =>{
        console.log(emailRef.current.value);
        const email = emailRef.current.value;
        if(!email){
            
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Please provide your  email address to reset password!',
               
            })
            return;
        }
        resetPassword(email)
        .then(() => {
           alert('Please Check your email');
        })
        .catch(error => {
            console.log(error);
            setError(error.message);
        })

    }

    const handleGoogleLogin = () => {
          signInWithPopup(auth, googleProvider)
          .then((result) => {
            const user = result.user;
            console.log(user);
          })
          .catch((error) => {
            console.log(error.message);
          })
    }

    const handleGithubLogin = () => {
      signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      })
}

    return (
     <div className='my-container'>

   
     <div className="p-8  " >

    <div className="lg:w-4/5   mx-auto    bg-no-repeat bg-cover p-8 lg:p-12 rounded-md " style={{backgroundImage:'linear-gradient(rgba(85, 89, 115, 0.5), rgba(85, 89, 115, 0.5)), url(../../src/assets/bg3.avif)'}}>
    
    <div className=' grid md:grid-cols-2 justify-center  gap-12  '>
      
    <div className="  rounded-md mx-auto bg-white p-8 ">
    <h2 className='text-center font-bold text-3xl '>Login</h2>
    <div className=" flex justify-start mt-5">
    <form onSubmit={handleLogin} className="w- max-w-sm ">
 
    <div className="md:flex md:items-center mb-5 ">
      <div className="md:w-1/3">
        <label className="block text-gray-500 font-bold   mb-1 md:mb-0 pr-4" htmlFor="email">
         Email
        </label>
      </div>
      <div className="md:w-2/3 ">
        <input className="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="email" type="email" name="email" placeholder="Your Email" ref={emailRef} />
      </div>
    </div>

    <div className="md:flex md:items-center">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold   mb-1  pr-4" htmlFor="password">
        Password
      </label>
    </div>
    <div className="md:w-2/3 relative ">
      <input className="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500  " id="password" name="password" type={show ? "text" : "password"} placeholder="******************" required />
     
      <p className='absolute bottom-2 left-48 sm:left-48 md:left-40 lg:left-44 xl:left-44'  onClick={() => setShow(!show)}>
           <small>
           {
               show ? <span><FontAwesomeIcon  icon={faEyeSlash} /></span> : <span><FontAwesomeIcon icon={faEye} /></span>
           }
           </small>
           </p>
            
    </div>
  </div>
  <Link className="flex md:justify-center md:ml-10 lg:ml-6" href=""><p  onClick={handleResetPassword} className="">Forgot Password</p></Link>
  
    <div className="md:flex md:items-center mt-4">
      <div className="md:w-1/3"></div>
      <div className="md:w-2/3">
      <input className="shadow w-full bg-orange-600 hover:bg-orange-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" value="Login" />
      </div>
    </div>
    
  </form>
  </div>
  
  <p className="flex md:justify-center mt-2 md:ml-28 ">Don't have account?<Link to='/register' className='text-orange-500 mx-1'>Sign up</Link></p>
  <p className=" flex justify-center text-danger font-bold text-shadow mt-4">{error}</p>
<p className='flex justify-center text-success font-bold text-shadow mt-4'>{success}</p>
<div className='flex  gap-4 justify-center'>
<button onClick={handleGoogleLogin} className='border p-3 rounded-md'><img className='w-10' src={google} alt="" /></button>
</div> 

</div>
    <div className="my-container text-center my-auto">
    <h1 className='text-3xl text-white font-bold'>Toy MarketPlace</h1>
    <p className='text-white mt-4'>Advance your career with JobBoard . Meet thousands of job announcements and employers. Sign up for job alerts and be first in line for the latest jobs that match your profile.</p>
   <Link to='/register'> <button  className="mt-4 shadow  bg-orange-600 hover:bg-orange-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">Sign Up</button></Link>
   </div>
    </div>
    </div>
     </div>
     </div>
    );
};

export default Login;