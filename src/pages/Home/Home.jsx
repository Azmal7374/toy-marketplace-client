import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';
const Home = () => {
    return (
        <div>
        <section className="bg-white">
        <div className="grid md:grid-cols-2 gap-5 p-4">
        <div className=" mt-10 md:mt-32">
        <h2 className='ml-10 mr-10 text-gray-600'>Online shopping for Toys & Games from a great selection of Toy Basketball, Toy Golf, Toy Soccer, Toy Football, Toy Baseball, Toy Hockey & more at everyday.Based on the original concept created by Gixer Entertainment , Toy Sports is a fun party game for the whole family. It  is an online multiplayer game where you control your favorite Toy while you compete to see who can score the most points! Points are scored by throwing your toy from the vehicle at the targets - goals, hoops, holes, bowling pins, baskets, among many others.
        </h2>
       <div className='ml-10 mr-10'>
       <button  className='bg-gray-600 p-3 w-40  rounded-md mt-8 text-white font-bold hover:bg-gray-700'>Sports Toy</button>
       </div>
        </div>
        <div className="mt-10">
        <AwesomeSlider animation="cubeAnimation">
        <div><img src="https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?size=626&ext=jpg&ga=GA1.1.220873417.1673880723&semt=ais" alt="" /></div>
        <div><img src="https://img.freepik.com/free-photo/flat-lay-composition-toys-with-copyspace_23-2148144820.jpg?size=626&ext=jpg&ga=GA1.1.220873417.1673880723&semt=ais" alt="" /></div>
        <div><img src="https://img.freepik.com/free-vector/set-sport-balls-object-equipment-exercise_24797-2148.jpg?size=626&ext=jpg&ga=GA1.1.220873417.1673880723&semt=ais" alt="" /></div>
        <div><img src="https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?size=626&ext=jpg&ga=GA1.1.220873417.1673880723&semt=ais" alt="" /></div>
        <div><img src="https://img.freepik.com/premium-photo/sports-bag-with-sports-equipment-isolated-white-with-clipping-path_105428-2587.jpg?size=626&ext=jpg&ga=GA1.1.220873417.1673880723&semt=ais" alt="" /></div>
      </AwesomeSlider>
        </div>
        </div>
          </section>
        </div>
    );
};

export default Home;