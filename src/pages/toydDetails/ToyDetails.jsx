import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const ToyDetails = () => {
    const toys =useLoaderData()
    const {_id, name, price,picture,ratting} =toys;
    return (
        <div className='mt-10 p-8'>
            <div className="md:flex">
            <div>
            <img className="" src={picture} alt="" />
            </div>
            <div className='bg-slate-200 w-4/5 p-8'>
            <p className="text-2xl"><span className=" font-bold">{name}</span></p>
            <p className="text-xl">Price: <span className=" font-semibold">${price}</span></p>
           <div className="flex">
           <p className="text-xl">Ratting: </p>
           <Rating className="mx-2"
           style={{ maxWidth: 100 }}
           value={ratting}
         readOnly
         ></Rating>
           </div>
            <p className="text-3xl"><span className=" font-bold">{}</span></p>
            </div>
            </div>
        </div>
    );
};

export default ToyDetails;