import React, { useEffect, useState } from 'react';
import Toy from '../Toy/Toy';

const Toys = () => {
    const [toys, setToys] =useState([])
    const [activeTab, setActiveTab] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/allToys/${activeTab}`)
        .then(res => res.json())
        .then(result => {
            setToys(result);
        })
    },[activeTab])
     console.log(toys);
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
      };

    return (
        <div>
            
            <div className="flex gap-5 justify-center mt-6">
              <div>
                <button  onClick={() => handleTabClick("softToys")}
                className={`border rounded-md p-4 ${
                  activeTab == "softToys" ? " bg-purple-500  text-white" : ""
                }`}>Soft Toys</button>
              </div>
              <div>
              <button  onClick={() => handleTabClick("arts&Crafts")}
              className={` border  rounded-md p-4 ${
                activeTab == "arts&Crafts" ? " bg-purple-500 text-white" : ""
              }`}>Arts & Crafts</button>
            </div>
            <div>
            <button  onClick={() => handleTabClick("toddlerToys")}
            className={`border   rounded-md p-4 ${
              activeTab == "toddlerToys" ? " bg-purple-500 text-white" : ""
            }`}>Toddler Toys</button>
          </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-5 justify-center">
            {
                toys.map(toy => <Toy key={toy._id} toy={toy}></Toy>)
            }
            </div>
        </div>
    );
};

export default Toys;