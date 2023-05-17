import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile} from 'firebase/auth'
import useTitle from '../../hooks/UseTitle';
import { AuthContext } from '../../provider/AuthProvider';

// import toast  from 'react-hot-toast';

const Register = () => {
  useTitle('Signup');
  const {createUser, user,  updateUser} = useContext(AuthContext)
    const[error, setError] = useState('')
    const[success, setSuccess] = useState('')
    

    const handleSubmit =(event) => {
        //prevent page refresh
        event.preventDefault();
        setError('');
        setSuccess('');
        // collect form data
        const name = event.target.name.value;
        const email = event.target.email.value;
        const photo = event.target.photo.value;
        const password = event.target.password.value
        console.log(name, email, password);

         //Validation:  
     if(!/(?=.*[A-Z])/.test(password)){
        setError('Please add at least one Uppercase');
        return;
    }
    else if(!/(?=.*[0-9].*[0-9])/.test(password)){
        setError('Please add at least two numbers');
        return;
    }
    else if(password.length < 6){
        setError('Please add at least 6 characters in your password');
        return;
    }
    else if(!/(?=.*[0-9].*[0-9])/.test(password)){
        setError('Please add at least two number');
        return;
      }

    else if(!/(?=.*[!@#$&*])/.test(password)){
        setError('Please add a special character!')
        return;
    }

    //create user in firebase
     createUser(email, password)
    .then(resutl => {
        const loggedUser = resutl.user;
        console.log(loggedUser);
        event.target.reset();
        setError('')
        setSuccess('User has created successfully');
       
        updateUser(loggedUser, name, photo)

    })
    .catch(error => {
        console.log(error);
        if(error.code === 'auth/email-already-in-use'){
           setError('Email-already in use'); 
        }
        if(error.code === 'auth/network-request-failed'){
          setError('Please connect Your Network'); 
       }
    })

    }

    return (
     <div className="my-container" >
    
    <div className="lg:w-4/5 mt-10   mx-auto   bg-no-repeat bg-cover p-8 lg:p-12 rounded-md " style={{backgroundImage:'linear-gradient(rgba(85, 89, 115, 0.5), rgba(85, 89, 115, 0.5)), url(../../src/assets/bg2.avif)'}}>
    
    <div className=' grid md:grid-cols-2  gap-12 justify-center  '>
    <div className="  bg-white w-96 p-4 rounded-md  backdrop-brightness-50 mx-auto ">
    <h2 className='text-center text-3xl font-bold '>Register</h2>
    <div className="flex justify-start mt-4 ">
   
    <form onSubmit={handleSubmit} className="w-full max-w-sm ">
    <div className="md:flex md:items-center mb-4">
      <div className="md:w-1/3">
        <label className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4" htmlFor="name">
          Full Name
        </label>
      </div>
      <div className="md:w-2/3">
        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="name" type="text" name="name" placeholder="Your Name" required />
      </div>
    </div>
    <div className="md:flex md:items-center mb-4">
      <div className="md:w-1/3">
        <label className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4" htmlFor="email">
         Email
        </label>
      </div>
      <div className="md:w-2/3">
        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="email" type="email" name="email" placeholder="Your Email" required />
      </div>
    </div>
    <div className="md:flex md:items-center mb-4">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4" htmlFor="photo">
       Photo URL
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="photo" type="text" name="photo" placeholder=" Photo URl" required />
    </div>
  </div>

    <div className="md:flex md:items-center mb-4">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4" htmlFor="password">
        Password
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="password" name="password" type="password" placeholder="******************" />
    </div>
  </div>

   

    <div className="md:flex md:items-center">
      <div className="md:w-1/3"></div>
      <div className="md:w-2/3">
        <input className="shadow w-full bg-orange-600 hover:bg-orange-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" value="Sign Up" />
      </div>
    </div>
  </form>
  </div>
  <p className="flex justify-center mt-3 md:ml-24">Already have account?<Link to='/login' className='text-orange-500 mx-1'> Login</Link></p>
  <p className=" flex justify-center text-orange-400 font-bold text-shadow mt-3">{error}</p>
  <p className='flex justify-center text-success font-bold text-shadow mt-3'>{success}</p>
    </div>

    <div className="my-container text-center my-auto">
     <h1 className='text-3xl text-white font-bold'>Toy MarketPlace</h1>
     <p className='text-white mt-4'>Advance your career with JobBoard . Meet thousands of job announcements and employers. Sign up for job alerts and be first in line for the latest jobs that match your profile.</p>
    <Link to='/login'> <button  className="mt-4 shadow  bg-orange-600 hover:bg-orange-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">Login</button></Link>
    </div>
    </div>
    
    </div>
     </div>
    );
};

export default Register;