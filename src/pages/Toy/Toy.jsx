import React, { useContext } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toy = ({toy}) => {
    const {_id, name, price,picture,ratting} =toy;
    const {user} =useContext(AuthContext)
    const navigate = useNavigate()

    const hanldeDetails = () =>{
        if(!user){
          toast('Please Login Here!')
           navigate('/login')
        }
        else{
          navigate('/')
        }
    }
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
        <Link to={`/allToys/${_id}`}>
        <button onClick={hanldeDetails} className="bg-[#0d80a5] text-white p-2 w-32 rounded-md  ">View Details</button>
        </Link>
        </div>
      </div>
         
    );
};

export default Toy;