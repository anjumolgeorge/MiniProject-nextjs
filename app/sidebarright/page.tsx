'use client'
import React from 'react';
import { FaNewspaper } from "react-icons/fa";
import { MdHistory } from "react-icons/md";
import { GrHelpBook } from "react-icons/gr";
import { VscFeedback } from "react-icons/vsc";
import { IoSettings } from "react-icons/io5";
import { RiMessage3Line } from "react-icons/ri";
import Link from 'next/link';


function SidebarRight() {
  return (
    <div>
            <div className='bg-gray-900 h-screen w-[24rem]' style={{ position: "fixed", right: 0, top: 0, bottom: 0 }}>
              <Link href='\profile'>
        <div className="bg-black h-40 w-36 mt-[3rem] ml-[8rem] rounded-full flex flex-col justify-end items-center" style={{backgroundImage:"url(\'girl.avif')",backgroundSize:"cover",backgroundPosition:"center"}}>
        </div>
        </Link>
        <div className="mt-2 text-white" style={{textAlign:"center"}}>
          <b>{localStorage.getItem('username')}</b>
        </div>
        <div className='flex mt-7 space-x-10 ml-20 text-white'>
          <h1>Post</h1>
          <h1>Followers</h1>
          <h1>Following</h1>
        </div>
        <div className='flex  mt-7  ml-20 text-white'>
        <h1 >40</h1>
          <h1 className=' ml-16'>153k</h1>
          <h1  className=' ml-20'>45k</h1>
        </div>
        <div className=' h-72 mt-20 ml-20'>
          <div className='text-white font-medium flex flex-col '>
            <br/>
            <div className='flex items-center'>
              <RiMessage3Line />
              <Link href='\profile'>
              <h1 className='ml-3'>Messages</h1>
              </Link>
            </div>
            <br/>
            <div className='flex items-center'>
              <FaNewspaper />
              <h1 className='ml-3'>News</h1>
            </div>
            <br/>
            <div className='flex items-center'>
              <MdHistory />
              <h1 className='ml-3'>History</h1>
            </div>
            <br/>
            <div className='flex items-center'>
              <GrHelpBook />
              <h1 className='ml-3'>Help</h1>
            </div>
            <br/>
            <div className='flex items-center'>
              <VscFeedback/>
              <h1 className='ml-3'>Send Feedback</h1>
            </div>
            <br/>
            <div className='flex items-center'>
              <IoSettings />
              <h1 className='ml-3'>Settings</h1>
            </div>
            <br/>
          </div>
        </div>
      </div>

    </div>
  );
}

export default SidebarRight;
