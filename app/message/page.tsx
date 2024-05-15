import React from 'react';
import { FiSearch } from "react-icons/fi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

function Message() {
  return (
    <div>
      <div className=' fixed bg-black w-72 ml-[77rem] h-screen mt-[-0rem]'style={{border:"2px solid gray" }}>
      <div className=' mt-[1rem] ml-10 relative'>
            <input className="w-40 sm:w-64 px-4 py-2 border border-gray-100 focus:outline-none rounded-full text-sm ml-[-2rem] text-black font-normal" type="text" placeholder="Search" />
            <FiSearch className="absolute top-0 left-1 mt-3 ml-[12rem] text-gray-500 w-4 h-4" />
          </div>
        <div className="mt-8 text-white text-xl ml-4 "> <h1><b>Message</b></h1></div>
        <div className='bg-white w-16 h-16 rounded-full ml-3 mt-5' style={{backgroundImage:"url(\'mamukkka.jpg'\)",backgroundSize:"cover",backgroundPosition:"center"}}></div>
        <div className=' text-blue-800 mt-[-4rem] ml-24'>Mammooty
        <HiOutlineDotsHorizontal className=' ml-36 text-white'/>
        </div>
        <div className=' text-white text-xs mt-[-0rem] ml-28'>you:hi</div>

        <div className='bg-white w-16 h-16 rounded-full ml-3 mt-[3rem]' style={{backgroundImage:"url(\'angelina.webp'\)",backgroundSize:"cover",backgroundPosition:"center"}}></div>
        <div className=' text-blue-800 mt-[-4rem] ml-24'>Angel_liNa
        <HiOutlineDotsHorizontal className=' ml-36 text-white'/>
        </div>
        <div className=' text-white text-xs mt-[-0rem] ml-28'>you:hi</div>

        <div className='bg-white w-16 h-16 rounded-full ml-3 mt-[3rem]' style={{backgroundImage:"url(\'be.jpg'\)",backgroundSize:"cover",backgroundPosition:"center"}}></div>
        <div className=' text-blue-800 mt-[-4rem] ml-24'>Eillie__Be_
        <HiOutlineDotsHorizontal className=' ml-36 text-white'/>
        </div>
        <div className=' text-white text-xs mt-[-0rem] ml-28'>you:hi</div>

        <div className='bg-white w-16 h-16 rounded-full ml-3 mt-[3rem]' style={{backgroundImage:"url(\'yaasiPfl.jpg'\)",backgroundSize:"cover",backgroundPosition:"center"}}></div>
        <div className=' text-blue-800 mt-[-4rem] ml-24'>Mirshal__
        <HiOutlineDotsHorizontal className=' ml-36 text-white'/>
        </div>
        <div className=' text-white text-xs mt-[-0rem] ml-28'>you:hi</div>

        <div className='bg-white w-16 h-16 rounded-full ml-3 mt-[3rem]' style={{backgroundImage:"url(\'jaya.jpg'\)",backgroundSize:"cover",backgroundPosition:"center"}}></div>
        <div className=' text-blue-800 mt-[-4rem] ml-24'>JayaSurya
        <HiOutlineDotsHorizontal className=' ml-36 text-white'/>
        </div>
        <div className=' text-white text-xs mt-[-0rem] ml-28'>you:hi</div>

        <div className='bg-white w-16 h-16 rounded-full ml-3 mt-[3rem]' style={{backgroundImage:"url(\'dq.avif'\)",backgroundSize:"cover",backgroundPosition:"center"}}></div>
        <div className=' text-blue-800 mt-[-4rem] ml-24'>_Dul_Qr
        <HiOutlineDotsHorizontal className=' ml-36 text-white'/>
         </div>
        <div className=' text-white text-xs mt-[-0rem] ml-28'>you:hi</div>
      </div>
    </div>
  );
}

export default Message;
