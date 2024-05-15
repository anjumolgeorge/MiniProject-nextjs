import React from 'react';
import Link from 'next/link';
import { FaArrowLeft } from "react-icons/fa6";

function NavBar() {
  return (
    <div>
      <div  style={{ background: " #868f96", height: "729px", display:'flex', justifyContent:'center', alignItems:'center'  }}>
     <h1 style={{marginBottom:"30rem",fontSize:"2rem",color:"white",boxShadow: "0 12px 15px rgba(0,0,0,0.3)"}}>Reset your Password</h1>
        <div style={{ background: " #485563", width: "60rem", height: "20rem",marginLeft : "2rem" , justifyContent : "center",borderRadius:"20px",boxShadow: "0 12px 15px rgba(0,0,0,0.3)"}}>
            <h1 className="pt-20 pl-20 text-white">"Oops! It seems you've forgotten your password. Don't worry, we've got you covered.<br/>
 Please follow the instructions below to reset your password and regain access to your account."</h1>
 <br/>
 <br/>
<input type="text" id="fullName" className=" ml-48 w-96 px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-blue-500" placeholder="Enter  Email"/>

<Link href="/sendOTP">
<button style={{background:"brown",width:"5rem",height:"2rem", marginTop:"2rem",marginLeft:"33rem",color:"white",boxShadow: "0 12px 15px rgba(0,0,0,0.3)"}}>Verify</button>
</Link>
<Link href="\login">
<FaArrowLeft className='mt-[-28rem] ml-[-20rem]'/>

</Link>
    </div>
        
  </div>
</div>
  );
}

export default NavBar;

