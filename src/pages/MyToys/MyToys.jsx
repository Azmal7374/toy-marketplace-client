import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const MyToys = () => {
    const {user} = useContext(AuthContext)
    const [searchText, setSearchText] = useState("");
    const [toys, setToys] =useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/myToys/${user?.email}`)
        .then(res => res.json())
        .then(data => {
             setToys(data);
        })
    },[])

    const handleSearch = () => {
        fetch(`http://localhost:5000/toySearchByName/${searchText}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setToys(data);
          });
      };

    return (
        <div>
              <div className=''>
       <div className="text-center mb-4">
       <input
         onChange={(e) => setSearchText(e.target.value)}
         type="text"
         className="p-1 border"
       />{" "}
       <button className='bg-[#0d80a5] p-1 w-24 rounded-md text-white' onClick={handleSearch}>Search</button>
     </div>

    <div className="">
    <div className="overflow-x-auto ">
    <table className="table table-compact w-full ">
      <thead>
        <tr>
          <th>No.</th> 
          <th>Seller</th> 
          <th>Toy Name</th> 
          <th>SubCategory</th> 
          <th>Price</th> 
          <th>Quantity</th> 
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead> 
      <tbody>
      {
          toys?.slice(0,20).map((toy, index) => (
           <>
           <tr>
           <th>{index + 1}</th> 
           <th>{toy.sellerName}</th> 
           <th>{toy.name}</th> 
           <th>{toy.subCategory}</th> 
           <th>{toy.price}</th> 
           <th>{toy.quatntiy}</th> 
           <th></th>
           <th></th>
          </tr>
           </>
          ))}  
          </tbody> 
       
    </table>
  </div>
    </div>
      </div>
 
        </div>
    );
};

export default MyToys;