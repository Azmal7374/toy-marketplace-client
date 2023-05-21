 import React from 'react';
 
 const Gallery = () => {
    const images = [
        "https://img.freepik.com/premium-photo/toys-collection-isolated-background_488220-18122.jpg?size=626&ext=jpg&ga=GA1.2.220873417.1673880723&semt=ais",
        "https://img.freepik.com/free-vector/scene-with-boy-playing-toys-room_1308-41269.jpg?size=626&ext=jpg&ga=GA1.1.220873417.1673880723&semt=ais",
        "https://img.freepik.com/free-photo/set-children-toys_93675-130361.jpg?size=626&ext=jpg&ga=GA1.1.220873417.1673880723&semt=ais",
        "https://img.freepik.com/free-photo/cute-plush-toy-pillow-arrangement_23-2150312280.jpg?size=626&ext=jpg&ga=GA1.1.220873417.1673880723&semt=ais",
        "https://img.freepik.com/free-photo/baby-toys-wooden-plane-flat-lay_1220-4902.jpg?size=626&ext=jpg&ga=GA1.2.220873417.1673880723&semt=ais",
        "https://img.freepik.com/free-photo/plastic-dinosaur-floor_23-2147663839.jpg?size=626&ext=jpg&ga=GA1.1.220873417.1673880723&semt=ais",
        "https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686884.jpg?size=626&ext=jpg&ga=GA1.2.220873417.1673880723&semt=ais",
        "https://img.freepik.com/premium-photo/group-childrens-toys-white-background-constructor-pyramid-ball-soft-toys-children-s-development_150893-1861.jpg?size=626&ext=jpg&ga=GA1.1.220873417.1673880723&semt=ais",
        "https://img.freepik.com/free-photo/front-view-kid-playing-with-wooden-toyds_23-2149357210.jpg?size=626&ext=jpg&ga=GA1.1.220873417.1673880723&semt=ais",
        "https://img.freepik.com/premium-photo/toys-collection-wooden-background_635416-2393.jpg?size=626&ext=jpg&ga=GA1.1.220873417.1673880723&semt=ais",
        "https://img.freepik.com/premium-photo/colorful-wooden-toy-building-blocks_155165-168.jpg?size=626&ext=jpg&ga=GA1.1.220873417.1673880723&semt=ais",
        "https://img.freepik.com/free-photo/children-toys-top-view_93675-130293.jpg?size=626&ext=jpg&ga=GA1.1.220873417.1673880723&semt=ais",
       
      ]
      return (
        <div className="mt-6 container mx-auto px-5  lg:px-32  ">
          
          <div className="-m-1 flex flex-wrap md:-m-2">
            {images.map((image, index) => (
              <div key="{index}" className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2">
                <img className="block mx-auto h-full object-cover object-center rounded-lg shadow-md" src={image}/>
              </div>
            ))}
          </div>
        </div>
      );
    }
 
 export default Gallery;




 