import React from 'react';
import { HiHomeModern } from "react-icons/hi2";
import { MdOutlineVideoStable } from "react-icons/md";
import { SlLike } from "react-icons/sl";
import { IoMdMusicalNote } from "react-icons/io";
import { PiFilmStrip } from "react-icons/pi";
import { MdLiveTv } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import Link from 'next/link';
import { SiMessenger } from "react-icons/si";




function sidebarleft() {
  return (
    <div>
        
            <div className='bg-gray-900 w-[20rem] h-screen flex flex-col justify-center items-center' style={{ position: "fixed", left: 0, top: 0, bottom: 0 }}>
             <div>
              <h1 className=' text-white ml-[-50px] text-5xl mt-6 font-bold '>SwiftSite</h1>
             </div>
        <div className='text-white font-medium size-full text-lg ml-28'>
          <br/><br/><br/><br/><br/>
          <div className='flex items-center'>
            <HiHomeModern />
            <Link href='\home'>
            <h1 className='ml-3'>Home</h1>
            </Link>
          </div>
          <br/>
          <div className='flex items-center'>
            <MdOutlineVideoStable />
            <h1 className='ml-3'>Your Posts</h1>
          </div>
          <br/>
          <div className='flex items-center'>
            <SlLike />
            <h1 className='ml-3'>Liked </h1>
          </div>
          <br/>
          <div className='flex items-center'>
            <IoMdMusicalNote />
            <h1 className='ml-3'>Music</h1>
          </div>
          <br/>
          <div className='flex items-center'>
            <PiFilmStrip />
            <h1 className='ml-3'>Films</h1>
          </div>
          <br/>
          <div className='flex items-center'>
            <MdLiveTv />
            <h1 className='ml-3'>Live</h1>
          </div>
          <div className='flex items-center'>
          <SiMessenger  className='mt-6 '/>
            <h1 className='ml-3 mt-6'>Your Suggestions</h1>
          </div>
          <div className=' mt-[6rem] ml-2 relative'>
            <input className="w-40 sm:w-64 px-4 py-2 border border-gray-100 focus:outline-none rounded-full text-sm ml-[-2rem] text-black font-normal" type="text" placeholder="Search" />
            <FiSearch className="absolute top-0 left-1 mt-3 ml-[12rem] text-gray-500 w-4 h-4" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default sidebarleft;
