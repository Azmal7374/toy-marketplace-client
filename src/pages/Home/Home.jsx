import React, { useContext, useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Toys from '../Toys/Toys';
import useTitle from '../../hooks/UseTitle';
import { AuthContext } from '../../provider/AuthProvider';
import Sppiner from '../share/Spinner/Sppiner';
const Home = () => {
  useTitle('Home');
  const {user, loading} =useContext(AuthContext)
  if(loading){
    return <Sppiner></Sppiner>
  }
    return (
        <div>
        <section className="bg-white">
        <div className="grid md:grid-cols-2 gap-5 p-4">
        <div className=" mt-10 md:mt-32">
        <h2 className='text-4xl ml-10 mr-10 text-gray-600 '>Lets Play Any Time</h2>
        <h2 className='ml-10 mr-10 text-gray-600 mt-4'>Online shopping for Toys & Games from a great selection of Toy Basketball, Toy Golf, Toy Soccer, Toy Football, Toy Baseball, Toy Hockey & more at everyday.Based on the original concept created by Gixer Entertainment , Toy Sports is a fun party game for the whole family.
        </h2>
       <div className='ml-10 mr-10'>
       <button  className='bg-[#0d80a5] p-3 w-40  rounded-md mt-8 text-white font-bold  '>Shop Now</button>
       </div>
        </div>
        <div className="mt-10">
        <AwesomeSlider animation="cubeAnimation">
        <div><img src="https://img.freepik.com/premium-photo/toys-collection-isolated-light-background_488220-20058.jpg?size=626&ext=jpg&ga=GA1.1.220873417.1673880723&semt=ais" alt="" /></div>
        <div><img src="https://img.freepik.com/free-photo/kids-home-playing-with-toys_23-2148630637.jpg?size=626&ext=jpg&ga=GA1.1.220873417.1673880723&semt=ais" alt="" /></div>
        <div><img src="https://img.freepik.com/free-photo/asian-cute-boy-playing-doctor-use-stethoscope-checking-large-teddy-bear-sitting-floor_1150-15585.jpg?size=626&ext=jpg&ga=GA1.1.220873417.1673880723&semt=ais" alt="" /></div>
        <div><img src="https://img.freepik.com/free-vector/three-boxes-full-toys_1308-37294.jpg?size=626&ext=jpg&ga=GA1.1.220873417.1673880723&semt=ais" alt="" /></div>
        <div><img src="https://img.freepik.com/free-photo/little-girl-playing-with-toys-living-room_329181-9334.jpg?size=626&ext=jpg&ga=GA1.1.220873417.1673880723&semt=ais" alt="" /></div>
      </AwesomeSlider>
        </div>
        </div>
          </section>


          <section className='mt-10'>
          <h2 className='text-center text-3xl font-bold'>Shop By Category</h2>
          <Toys></Toys>
          </section>
        </div>
    );
};

export default Home;