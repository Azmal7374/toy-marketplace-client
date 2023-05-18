import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
const Footer = () => {
    return (
        <div className="mt-20 bg-[#F4D2B6]">

        <div className="pt-12 md:flex justify-center items-center  gap-10 text-center">
        <div>
        <h2 className='text-3xl font-bold'>SUBSCRIBE OUR NEWSLETTER</h2>
        </div>
        <div>
        <input className="h-14 p-4 rounded-s-md" type="email" name="" id="" placeholder='Your email address'/>
        <input className="h-14 w-28 p-4 bg-black text-white rounded-md" type=" submit" name=""  value="Subscribe" />
        </div>
        </div>
        <hr className="mt-6 border border-gray-300 ml-12 mr-12" />
        <div className='  mt-10 flex justify-center gap-10'>
        <div className="">
         
       <img className=" mx-2" src={logo}  alt="" />
        </div>
        <div className="w-96">
        <p>Online shopping for Toys & Games from a great selection of Toy Basketball, Toy Golf, Toy Soccer, Toy Football, Toy Baseball, Toy Hockey & more at everyday.</p>
        </div>
        </div>

     
        <footer className="footer p-10 bg-[#F4D2B6] text-base-content">
      
        <div className="text-black">
          <span className="font-bold text-2xl">My Account</span> 
       
         <div className="mt-2">
         <div className="mt-2">
         <p>DO YOU HAVE A QUESTION?</p>
         <p className="font-bold text-xl mt-1">info@toymarketplace.com</p>
         </div>
          
         </div>
        </div> 
       
        <div className='text-black md:ml-16'>
        
        <span className="font-bold text-2xl">Information</span> 
        
         <div className='grid grid-cols-2 gap-8' >
         <div className='flex flex-col mt-3' style={{fontSize:'16px'}}>
         <Link to='' className="no-underline  link  hover:text-orange-400">About Us</Link> 
         <Link to='' className="link no-underline hover:text-orange-400  mt-3 md:mt-6">Delivery Information</Link> 
         <Link to='' className="link   mt-3 no-underline hover:text-orange-400">Privacy Policy</Link> 
         </div>
         <div className='flex flex-col mt-3  ' style={{fontSize:'16px'}}>
         <Link to='' className="link   hover:text-orange-400 no-underline">Terms & Conditions</Link>
          
         </div>
         </div>
        
        </div> 
        <div className='text-black  md:ml-16'>
        
        <span className="font-bold text-2xl">Extras</span> 
     
         <div className='grid grid-cols-2 gap-8 ' >
         <div className='flex flex-col mt-3' style={{fontSize:'16px'}}>
         <Link  className="link hover:text-orange-400 no-underline">Brands</Link> 
         <Link to='' className="link mt-3 md:mt-6 hover:text-orange-400 no-underline">Gift Certificates</Link> 
         
         </div>
         <div className='flex flex-col mt-3' style={{fontSize:'16px'}}>
         <Link  className="link  hover:text-orange-400 no-underline">Affiliate</Link>
         <Link to=''  className="link  hover:text-orange-400 no-underline mt-3">Specials</Link>
         </div>
         </div>
        
        </div> 
        <div className="text-black">
        <div className="text-black">
        <span className="font-bold text-2xl">Contact Us</span> 
     
       <div className="mt-2">
       <div className="mt-2">
       <p>A20 Green Hill Road, <br /> Fayetteville, California.</p>
       <p className="font-bold text-xl mt-2">
       +1 209-223-2635</p>
       <p className="mt-2">
       info@admin.com</p>
       </div>
        
       </div>
      </div> 
        </div> 
      </footer> 
      <footer className="px-10 py-4 bg-[#AB7E59]  ">
      <hr  />
      <div className="text-center md:flex justify-between mt-4">
      <div>
      <p className="text-white">Copyright © 2023 Kids Toys. All rights reserved.</p>
    </div>
    <div className="text-white mt-4 md:mt-0 ">
    
    <div className="flex gap-4">
    <a className='hover:bg-orange-400'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> 
    <a className='hover:bg-orange-400'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
    <a className='hover:bg-orange-400'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    <a className='hover:bg-orange-400'>
    
    </a>
  </div>
    </div>
    </div>
    </footer>
        </div>
    );
};

export default Footer;