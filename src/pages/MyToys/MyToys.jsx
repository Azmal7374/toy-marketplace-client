import React, { useContext, useEffect, useState } from "react";
import Toy from "../Toy/Toy";
import { AuthContext } from "../../provider/AuthProvider";
import Sppiner from "../share/Spinner/Sppiner";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/UseTitle";
import UpdateToy from "../UpdateToy/UpdateToy";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";

const MyToys = () => {
  useTitle("My Toys");
  const { user, loading } = useContext(AuthContext);
  const [modalShow, setModalShow] = React.useState(false);
  const[control, setControl] = useState(false);
  const [toys, setToys] = useState([]);


  useEffect(() => {
    fetch(`https://toy-marketplace-server-azmal7374.vercel.app/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [user]);
  console.log(toys)

  const handleDelete = (id) => {
   
  const proceed = confirm("Are you sure you want to delete");
     
    if (proceed) {
      fetch(`https://toy-marketplace-server-azmal7374.vercel.app/allToys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast('Deleted Successfully!')
            const remaining = toys.filter((toy) => toy._id !== id);
            setToys(remaining);
          }
        });
    }
  };




  if (loading) {
    return <Sppiner></Sppiner>;
  }

  return (
    <div className="mt-4">
      <div className=" p-8">
        <div className="overflow-x-auto ">
          <table className="table table-compact w-full ">
            <thead>
              <tr>
                <th>No.</th>
                <th>Seller Name</th>
                <th>Seller Email</th>
                <th>Toy Name</th>
                <th>SubCategory</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Details Description</th>
                <th>Status</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {toys?.slice(0, 20).map((toy, index) => (
                <>
                  <tr>
                    <th>{index + 1}</th>
                    <th>{toy.sellerName}</th>
                    <th>{toy.sellerEamil}</th>
                    <th>{toy.name}</th>
                    <th>{toy.subCategory}</th>
                    <th>{toy.price}</th>
                    <th>{toy.quatntiy}</th>
                    <th>{toy.description.slice(0,25)}...</th>
                    <th>
                      <Link to={`/UpdateToy/${toy?._id}`}>
                        <button
                          className="bg-[#0d80a5] p-1 w-24 rounded-md text-white"
                          htmlFor="my-modal-6"
                        >
                          Edit
                        </button>
                      </Link>
                      
                    </th>
                    <th>
                      {" "}
                      <button onClick={() => handleDelete(toy?._id)}  className="bg-[#0d80a5] p-1 w-24 rounded-md text-white">
                        Delete
                      </button>{" "}
                    </th>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
