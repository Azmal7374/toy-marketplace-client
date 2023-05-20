/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from "react-router-dom";
const UpdatToy = () => {
     
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = data => 
  {
    fetch(`http://localhost:5000/updateToy/${data._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.modifiedCount > 0) {
            setControl(!control);
            alert('Update Done!')
          }
          console.log(result);
        });
    
    
    console.log(data);
  }



  return (
    <div className="flex justify-center mt-10 p-8 bg-slate-200">
    <form className="" onSubmit={handleSubmit(onSubmit)}>

    
     <div className="mt-4">
     <input className="w-full p-4" {...register("price")} placeholder="Price"/>
     </div>
      

   <div className="mt-4">
   <input className=" p-4" {...register("quatntiy")} placeholder="Available Quantity"/>
   </div>

   <div className="mt-4">
   <textarea className="w-96 p-4" {...register("description")} placeholder="Detail Description"/>
   </div>


   
    <input className=" bg-[#0d80a5] mt-5 btn-wide p-4 rounded-md text-white font-bold" type="submit" value="Update A Toy" />
  </form>
    </div>
  );
};

export default UpdatToy;
