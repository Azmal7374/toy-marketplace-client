import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const UpdateToy = () => {
  const params = useParams();
  const id = params.id;
  console.log(id);

  const updateToy = (event) => {
    event.preventDefault();
    const form = event.target;

    const price = form.price.value;
    const quatntiy = form.quatntiy.value;
    const description = form.description.value;
    const subCategory = form.subCategory.value;

    const updateToy = { price, quatntiy, description,subCategory };
    console.log(updateToy);

    fetch(`http://localhost:5000/updateToys/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.modifiedCount > 0) {
          toast("Successfully Updated!");
        }
      });
  };

  return (
    <div className="bg-slate-200 p-8">
      <form onSubmit={updateToy}>
        <div className="mt-4 flex justify-center ">
          <input
            className="hidden p-4 w-96"
            type="text"
            name="id"
            placeholder="ID"
          />
        </div>
        <div className="mt-4 flex justify-center">
          <input
            type="text"
            name="price"
            placeholder="Price"
            className=" p-4 w-96"
          />
        </div>
        <div className="mt-4 flex justify-center">
          <input
            type="text"
            name="quatntiy"
            placeholder="Quantity"
            className=" p-4 w-96"
          />
        </div>

        <div className="mt-4 flex justify-center">
          <select name="subCategory" className=" p-4 w-96" >
          <option value="softToys">softToys</option>
          <option value="arts&Crafts">arts&Crafts</option>
          <option value="toddlerToys">toddlerToys</option>
          </select>
        </div>

        <div className="mt-4 flex justify-center">
          <textarea
            type="text"
            name="description"
            placeholder="Description"
            className=" p-4  w-96"
          />
        </div>
        <div className="text-center mt-4">
          <input
            className="p-3 bg-[#0d80a5] text-white border-rounded btn-wide"
            type="submit"
            value="Update A Toy"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateToy;
