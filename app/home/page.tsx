import React from 'react';
import { BsPencil } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { GrGallery } from "react-icons/gr";
import { FaCamera } from "react-icons/fa";
import { FaRegSmile } from "react-icons/fa";
import SideBar1 from '../sidebarleft/page';
import SideBar2 from '../sidebarright/page';
import { GiSelfLove } from "react-icons/gi";


function Home() {
  return (
    <div className='flex bg-black'>
      <SideBar1/>
      <div className='flex-1 overflow-auto sticky overflow-x-hidden'>
        <div className='h-[90rem] w-screen bg-black ' style={{ marginLeft: "20rem", marginRight: "30rem" }}>
          <div className='flex mt-3'>
           
            <div className='bg-yellow-700 h-20 w-20 mt-20 rounded-full mr-9 ml-6 ' style={{backgroundImage:"url(\'girl.avif')",backgroundSize:"cover",backgroundPosition:"center"}}></div>
            <div className='bg-yellow-700 h-20 w-20 mt-20 rounded-full mr-9' style={{backgroundImage:"url(\'angelina.webp')",backgroundSize:"cover",backgroundPosition:"center"}}></div>
            <div className='bg-yellow-700 h-20 w-20 mt-20 rounded-full mr-9' style={{backgroundImage:"url(\'anushka.jpg')",backgroundSize:"cover",backgroundPosition:"center"}}></div>
            <div className='bg-yellow-700 h-20 w-20 mt-20 rounded-full mr-9' style={{backgroundImage:"url(\'dq.avif')",backgroundSize:"cover",backgroundPosition:"center"}}></div>
            <div className='bg-yellow-700 h-20 w-20 mt-20 rounded-full mr-9' style={{backgroundImage:"url(\'srk.jpg')",backgroundSize:"cover",backgroundPosition:"center"}}></div>
            <div className='bg-yellow-700 h-20 w-20 mt-20 rounded-full mr-9' style={{backgroundImage:"url(\'jaya.jpg')",backgroundSize:"cover",backgroundPosition:"center"}}></div>
            <div className='bg-yellow-700 h-20 w-20 mt-20 rounded-full' style={{backgroundImage:"url(\'mamukkka.jpg')",backgroundSize:"cover",backgroundPosition:"center"}}></div>
          </div>
          <div className=' mt-10 h-44 w-[50.8rem]' style={{border: "1px solid gray", boxShadow: "0px 0px 10px white"}}>
          <div className='mt-7 h-28 ' style={{border: "1px solid gray", borderRadius: "2rem"}}>
           <div className='bg-white w-12 h-12 rounded-full ml-8 mt-3' style={{backgroundImage:"url(\'girl.avif')",backgroundSize:"cover",backgroundPosition:"center"}}></div>
              <FaRegSmile className='text-gray-500 w-5 h-5 mt-[-2rem] ml-24'/>
              <input type="text" className='text-gray-500 text-pretty mt-[-1.5rem] ml-32 outline-none bg-transparent border-none placeholder-gray-500 focus:placeholder-transparent' placeholder='Share your moments here..!!'/>
              <FiSend className='text-gray-500 mt-[-0.9rem] ml-[45rem] w-5 h-5 hover:text-blue-500'/>
              <GrGallery className='text-gray-500 mt-[-1.2rem] ml-[47rem] hover:text-blue-500'/>
              <FaCamera className='text-gray-500 mt-[-1rem] ml-[49rem] w-4 h-4 hover:text-blue-500'/>
           </div>
          </div>
          <div className='  mt-10 w-[48.6rem] ml-4 h-[92rem] relative' style={{border: "1px solid gray"}}>
            <div className='  w-10 h-10 ml-4 mt-5 rounded-full' style={{border: "1px solid gray",backgroundImage:"url(\'Chris Hemsworth.jpeg'\)",backgroundSize:"cover",backgroundPosition:"center"}} ></div>
            <div className=' text-blue-900 text-sm mt-[-2rem] ml-16'><b> Chris Hemsworth</b></div>
            <div className=' text-blue-900 text-xs mt-[-1rem] ml-48'>12hrs ago</div>
            <div className=' ml-8 w-[45rem] absolute bottom-[62rem] h-[23rem]' style={{border: "1px solid gray",backgroundImage:"url(\'car.webp'\)",backgroundSize:"cover",backgroundPosition:"center"}}></div>
            <div className='text-gray-500 '><GiSelfLove className='w-7 h-7'/></div>
            <div className=' w-10 h-10 ml-4 mt-[30rem] rounded-full' style={{border: "1px solid gray",backgroundImage:"url(\'be.jpg'\)",backgroundSize:"cover",backgroundPosition:"center"}} ></div>
            <div className=' text-blue-900 text-sm mt-[-2rem] ml-16'><b>Eilish__Be_</b></div>
            <div className=' text-blue-900 text-xs mt-[-1rem] ml-48'>24hrs ago</div>
            <div className=' ml-8 w-[45rem] absolute bottom-[31rem] h-[23rem]' style={{border: "1px solid gray",backgroundImage:"url(\'Billie.webp'\)",backgroundSize:"cover",backgroundPosition:"center"}}></div>
            <div className=' w-10 h-10 ml-4 mt-[29rem] rounded-full' style={{border: "1px solid gray",backgroundImage:"url(\'an.jpeg'\)",backgroundSize:"cover",backgroundPosition:"center"}} ></div>
            <div className=' text-blue-900 text-sm mt-[-2rem] ml-16'><b>Ange__lina</b></div>
            <div className=' text-blue-900 text-xs mt-[-1rem] ml-48'>24hrs ago</div>
            <div className=' ml-8 w-[45rem] absolute bottom-[1rem] h-[23rem]' style={{border: "1px solid gray",backgroundImage:"url(\'angelina.webp'\)",backgroundSize:"cover",backgroundPosition:"center"}}></div>

          </div>
        </div>
      </div>
      <SideBar2/>
    </div>
  );
}

export default Home;
