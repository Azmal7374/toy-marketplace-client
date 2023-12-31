import React, { useEffect, useState } from 'react';
// import Toy from '../Toy/Toy';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Toy from '../Toy/Toy';
const Toys = () => {
    const [toys, setToys] =useState([])
    const [activeTab, setActiveTab] = useState();

    useEffect(() => {
        fetch(`https://toy-marketplace-server-azmal7374.vercel.app/allToys/${activeTab}`)
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
        <div className='text-center mt-10'>
        <Tabs>
        <TabList>
          <Tab >  <button data-aos="zoom-in"  onClick={() => handleTabClick("softToys")}
          className={`border rounded-md p-4 ${
            activeTab == "softToys" ? " bg-[#0d80a5]  text-white" : ""
          }`}>Soft Toys</button></Tab>
          <Tab> <button data-aos="fade-up"  onClick={() => handleTabClick("arts&Crafts")}
          className={` border  rounded-md p-4 ${
            activeTab == "arts&Crafts" ? " bg-[#0d80a5] text-white" : ""
          }`}>Arts & Crafts</button></Tab>
          <Tab><button data-aos="zoom-in"   onClick={() => handleTabClick("toddlerToys")}
          className={`border   rounded-md p-4 ${
            activeTab == "toddlerToys" ? " bg-[#0d80a5] text-white" : ""
          }`}>Toddler Toys</button></Tab>
        </TabList>
    
        <TabPanel>
        <div className="mt-4 flex flex-wrap gap-5 justify-center">
        {
            toys.map(toy => <Toy key={toy._id} toy={toy}></Toy>)
        }
        </div>
        </TabPanel>
        <TabPanel>
        <div className="mt-4 flex flex-wrap gap-5 justify-center">
        {
            toys.map(toy => <Toy key={toy._id} toy={toy}></Toy>)
        }
        </div>
        </TabPanel>
        <TabPanel>
        <div className="mt-4 flex flex-wrap gap-5 justify-center">
        {
            toys.map(toy => <Toy key={toy._id} toy={toy}></Toy>)
        }
        </div>
      </TabPanel>
      </Tabs> 
       
        </div>
    );
};

export default Toys;