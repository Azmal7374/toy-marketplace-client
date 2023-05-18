
import React from 'react';
import { Link } from 'react-router-dom';
import { FaceFrownIcon } from '@heroicons/react/24/solid';
import errorimg from '../assets/errors.avif'
import useTitle from '../useTitle';


const ErrorPage = () => {
  useTitle('Error-Page')
  return (
    <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <div>
        <img className='w-64' src={errorimg} alt="" />
        </div>
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl text-yellow-500'>
            404
          </h2>
          <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>
            Page Not Found
          </p>
          <Link to='/' className=' bg-orange-500 p-4 rounded-md text-white font-bold hover:bg-orange-700'>
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;