"use client"
import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const Login = () => {
  const [logpassword, setLogpassword] = useState('');
  const [email, setEmail] = useState('');

  const submitHandle = async (e: any) => {
    e.preventDefault(); 
    try {
      const response = await axios.post('https://social-media-5ukj.onrender.com/auth/login', {
        email: email,
        password: logpassword
      });
      console.log(email);
      console.log(logpassword);
      
      localStorage.setItem('role', 'user');
      localStorage.setItem('token', response.data.token); 
      localStorage.setItem('userId', response.data._id); 
      window.location.href = '/home';

      console.log('User is logged in');   
    } catch (error) {
      console.log(error);
    }

  return (
    <div className='white' style={{ height: "729px" }}>
      <img style={{ marginLeft: "30px", width: "40rem" }} src="login.png" alt="" />
      <div className='bg-gray-400' style={{ width: "35rem", marginLeft: "54rem", marginTop: "-302px", height: "30rem", borderRadius: "5rem", boxShadow: "0 12px 15px rgba(0,0,0,0.3)" }}>
        <form onSubmit={submitHandle}>
          <div>
            <label className="block text-black-700 text-sm font-bold ml-40 mt-6" >Email</label>
            <input className="w-450 px-4 py-3 border border-gray-100 rounded-md focus:outline-none" onChange={(e: any) => setEmail(e.target.value)} type="email" style={{ marginLeft: "9rem", marginTop: "0.5rem", boxShadow: "0 12px 15px rgba(0,0,0,0.3)" }} />
          </div>

          <div>
            <label className="block text-black-700 text-sm font-bold ml-40 mt-14">Password</label>
            <input className="w-450 px-4 py-3 border border-gray-100 rounded-md focus:outline-none" onChange={(e: any) => setLogpassword(e.target.value)} type="password" style={{ marginLeft: "9rem", marginTop: "0.5rem", boxShadow: "0 12px 15px rgba(0,0,0,0.3)" }} />
          </div>

          <button type='submit' className="ml-48 mt-20 w-40 h-12 rounded-full  hover:text-white" style={{ background: "#476268", boxShadow: "0 12px 15px rgba(0,0,0,0.3)" }}>Login</button>
        </form>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" className='mt-[-9.6rem]' viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,32L48,37.3C96,43,192,53,288,96C384,139,480,213,576,250.7C672,288,768,288,864,288C960,288,1056,288,1152,256C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
  );
};
}
export default Login;