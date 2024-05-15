import React from 'react';
import SideBar1 from '../sidebarleft/page';
import Center from '../center/page';
import Message from '../message/page';

const Profile = () => {
  return (
    <div className='bg-black flex'>
      <SideBar1 />
      <Message/>
      <Center />
     
    </div>
  );
}

export default Profile;
