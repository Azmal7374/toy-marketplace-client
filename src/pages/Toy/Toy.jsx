import React from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Link } from 'react-router-dom';
const Toy = ({toy}) => {
    const {_id, name, price,picture,ratting} =toy
    return (
        
        <div className= "px-8">
         <img className="w-60 h-60 relative " src={picture} alt="" />
      
        
         <Rating className="absolute bottom-8 left-16"
         style={{ maxWidth: 100 }}
         value={ratting}
         
         readOnly
       />
        <div className="text-center">
        <h2 className="text-gray-500">{name}</h2>
        <p className='font-bold'>${price}</p>
        </div>
        <div className="text-center mt-2">
        <Link>
        <button className="bg-purple-600 text-white p-2 w-32 rounded-md hover:bg-purple-700">View Details</button>
        </Link>
        </div>
      </div>
         
    );
};

export default Toy;