import Link from 'next/link';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

function SendOTP() {
  return (
   <div>

<div className="bg-white h-20">
 <h1 className="text-6xl" style={{ textShadow:"0 12px 5px rgba(0,0,0,0.2)",color: "#4F3400", fontFamily: "fantasy", height: "20rem",marginLeft:"20px",marginTop:"3px" }}>SwiftSite</h1>
</div>

<div  style={{ background: "#868f96", height: "646px", display:'flex', justifyContent:'center', alignItems:'center' }}>

 <div style={{ background: "#485563", width: "60rem", height: "20rem",marginLeft : "2rem" , justifyContent : "center",borderRadius:"20px",boxShadow: "0 12px 15px rgba(0,0,0,0.3)"}}>
   <h1  className="pt-20 pl-20 text-white">"Congratulations! Your email has been successfully verified. 
  To ensure security and complete your account setup, please enter the OTP sent to your email address."</h1> 
 <br/> <br/>
<input type="text" id="fullName" className=" ml-48 w-96 px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-blue-500" placeholder="Send OTP"/>
<Link href="\reset">
<FaArrowLeft className='mt-[-20rem] ml-[-10rem]'/>
</Link>
 </div>
    </div>
  </div>
  );
}

export default SendOTP;

