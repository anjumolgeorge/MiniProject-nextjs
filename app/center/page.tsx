'use client';
import React from 'react';

const Center = () => {
  return (
    <div className='bg-black h-[74rem]'>
        <div className=' h-[25rem] w-[50rem] ml-[23rem]'>
        <div className=' flex'>
            <img className='rounded-full h-40 w-28 border border-white mt-16 ml-[10rem]' src="girl.avif" alt="" />
            <div className=' mt-28 ml-24 font-extrabold '>
                <h1 className='text-white font-mono'  style={{fontSize:"25px"}}>{localStorage.getItem('username')}</h1>
                <br/>
                <div className='flex space-x-6 '>
                <h1 className='text-white font-normal'>Post<br/>40</h1>
                <h1 className='text-white flex font-normal'>Followers<br/>150k</h1>
                <h1 className='text-white flex font-normal'>Following<br/>45</h1>
                </div>
            </div>
            <div className=' mt-64 ml-[-29rem]'>
                <h1 className=' text-white'>American actress, filmmaker, and <br/> humanitarian. The recipient of  <br/> numerous accolades, including an  <br/> Academy Award and three <br/> Golden Globe Awards</h1>
            </div>
        </div>
      </div>
      <div className='border border-white flex text-white mt-6 w-[50rem] ml-[23rem]'>
         <h1 className=' ml-[13rem] font-bold text-1xl'>Post</h1>
         <h1 className='font-bold text-1xl ml-[20rem]'>Tag</h1>
       </div>
       <div className='bg-black w-[50rem] ml-[23rem] h-screen grid grid-cols-2 gap-4 p-4 mt-2 '>
  <div className="bg-white rounded-lg p-4" style={{backgroundImage:"url(\'bike.jpg'\)",backgroundSize:"cover",backgroundPosition:"center"}}></div>
  <div className="bg-white rounded-lg p-4" style={{backgroundImage:"url(\'Emma.webp'\)",backgroundSize:"cover",backgroundPosition:"center"}}></div>
  <div className="bg-white rounded-lg p-4" style={{backgroundImage:"url(\'smith.webp'\)",backgroundSize:"cover",backgroundPosition:"center"}}></div>
  <div className="bg-white rounded-lg p-4" style={{backgroundImage:"url(\'angelina.webp'\)",backgroundSize:"cover",backgroundPosition:"center"}}></div>
  <div className="bg-white rounded-lg p-4" style={{backgroundImage:"url(\'bestcar.jpeg'\)",backgroundSize:"cover",backgroundPosition:"center"}}></div>
  <div className="bg-white rounded-lg p-4" style={{backgroundImage:"url(\'familiee.jpg'\)",backgroundSize:"cover",backgroundPosition:"center"}}></div>
</div>
    </div>
  );
}

export default Center;
