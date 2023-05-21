import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import useTitle from "../../hooks/UseTitle";
const Blog = () => {
  useTitle('Blog')
  return (
    <div className="mt-10 p-8 pl-20 " data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">
      <Carousel className="p-12 bg-[#0d80a5]">
        
        <div className="">
        <p className="text-white font-bold    ">
        1. What is an access token and refresh token? How do they work and
        where should we store them on the client-side?
      </p>
          <h1 className="text-white mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            neque veniam debitis dolor sequi non aliquam esse quia nostrum
            natus, rerum mollitia consequuntur error dignissimos quo, hic
            consequatur reprehenderit necessitatibus!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolorum quia aspernatur at quo perferendis nisi neque amet quibusdam accusantium, quam rerum a nihil reiciendis, sint fugit, enim eum! Porro.
          </h1>
         
        </div>
        <div className="">
        <p className="text-white font-bold    ">
        1. What is an access token and refresh token? How do they work and
        where should we store them on the client-side?
      </p>
          <h1 className="text-white mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            neque veniam debitis dolor sequi non aliquam esse quia nostrum
            natus, rerum mollitia consequuntur error dignissimos quo, hic
            consequatur reprehenderit necessitatibus!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolorum quia aspernatur at quo perferendis nisi neque amet quibusdam accusantium, quam rerum a nihil reiciendis, sint fugit, enim eum! Porro.
          </h1>
         
        </div>
        <div className="">
        <p className="text-white font-bold    ">
        1. What is an access token and refresh token? How do they work and
        where should we store them on the client-side?
      </p>
          <h1 className="text-white mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            neque veniam debitis dolor sequi non aliquam esse quia nostrum
            natus, rerum mollitia consequuntur error dignissimos quo, hic
            consequatur reprehenderit necessitatibus!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolorum quia aspernatur at quo perferendis nisi neque amet quibusdam accusantium, quam rerum a nihil reiciendis, sint fugit, enim eum! Porro.
          </h1>
         
        </div>
        <div className="">
        <p className="text-white font-bold  ">
        1. What is an access token and refresh token? How do they work and
        where should we store them on the client-side?
      </p>
          <h1 className="text-white mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            neque veniam debitis dolor sequi non aliquam esse quia nostrum
            natus, rerum mollitia consequuntur error dignissimos quo, hic
            consequatur reprehenderit necessitatibus!
            Lorem ipsum dolor sit amet consectetur adipisicing  
          </h1>
         
        </div>
         

        

        
      </Carousel>
    </div>
  );
};

export default Blog;
