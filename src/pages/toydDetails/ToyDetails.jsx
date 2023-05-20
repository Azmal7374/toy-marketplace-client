import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { AuthContext } from '../../provider/AuthProvider';
import Sppiner from '../share/Spinner/Sppiner';
import useTitle from '../../hooks/UseTitle';

const ToyDetails = () => {
    useTitle('Toy Details');
    const{loading, user} =useContext(AuthContext)
    const toys =useLoaderData()
    const {_id, name, price,picture,ratting, quatntiy, description ,sellerName,sellerEamil} =toys;
    console.log(toys);

    if(loading){
     return <Sppiner></Sppiner>
    }

    return (
        <div className='mt-10 p-8'>
            <div className="lg:flex">
            <div>
            <img className="w-4/5 lg:w-auto lg:h-screen " src={picture} alt="" />
            </div>
            <div className='bg-slate-200 w-4/5 lg:h-screen   p-8'>
            <p className="text-2xl">Seller Name: <span className=" font-bold">{sellerName}</span></p> 
              
            <p className="text-2xl">Seller Email: <span className=" font-bold">{sellerEamil}</span></p>
            <p className="text-2xl">Toy Name: <span className=" font-bold">{name}</span></p>
            
            <p className="text-xl">Price: <span className=" font-semibold">${price}</span></p>
           <div className="flex">
           <p className="text-xl">Ratting: </p>
           <Rating className="mx-2"
           style={{ maxWidth: 100 }}
           value={ratting}
         readOnly
         ></Rating>
           </div>
            <p className="text-xl">Availabe Quantity: <span className=" font-semibold">{quatntiy}</span></p>
            <p className="text-xl">Details Description: <span className="">{description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repellendus quia unde ullam vitae animi eum autem numquam aperiam in? Enim ipsum repudiandae necessitatibus laborum soluta esse, recusandae quasi neque voluptates, asperiores debitis incidunt, earum nobis adipisci ipsa quod repellat!</span></p>
            </div>
            </div>
        </div>
    );
};

export default ToyDetails;