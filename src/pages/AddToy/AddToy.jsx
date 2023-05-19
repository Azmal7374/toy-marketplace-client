/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddToy = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = data => 
  {
    
    fetch('http://localhost:5000/postToy',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res =>res.json())
      .then(result=>{
        console.log(result);
        if(result.insertedId){
          toast('Successfully Added!')
        }
      })
    console.log(data);
  }



  return (
    <div className="flex justify-center mt-10 p-8 bg-slate-200">
    <form className="" onSubmit={handleSubmit(onSubmit)}>
    
   <div className="mt-4">
    
   <input className="w-96 p-4" {...register("name")} placeholder="Name"/>
   </div>
   <div className="mt-4">
    
   <input className="w-96 p-4" {...register("sellerName")} defaultValue={user?.displayName}   placeholder="Seller Name"/>
   </div>
   <div className="mt-4">
   <input className="w-96 p-4" {...register("sellerEamil")} defaultValue={user?.email}  placeholder="Seller Email"/>
   </div>
   <div className="mt-4">
   <input className="w-96 p-4" {...register("picture")} placeholder="Picture"/>
   </div>

   <div className="mt-4 flex gap-20">
    
     <div>
     <input className="w-full p-4" {...register("price")} placeholder="Price"/>
     </div>
     <div>
     <input className="w-full p-4" {...register("ratting")} placeholder="Ratting"/>
     </div>
   </div>

   <div className="mt-4">
   <input className=" p-4" {...register("quatntiy")} placeholder="Available Quantity"/>
   </div>

   <div className="mt-4">
   <textarea className="w-96 p-4" {...register("description")} placeholder="Detail Description"/>
   </div>


   <div>
   <select className="mt-4 p-4" {...register("subCategory")}>
   <option value="softToys">Soft Toys</option>
   <option value="arts&Crafts">Arts & Crafts</option>
   <option value="toddlerToys">Toddler Toys</option>
 </select>
   </div>
    <input className=" bg-[#0d80a5] mt-5 btn-wide p-4 rounded-md text-white font-bold" type="submit" value="Post A Toy" />
  </form>
    </div>
  );
};

export default AddToy;
