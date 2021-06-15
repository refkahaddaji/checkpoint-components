import profilePic from './profilePic.svg';
import React, { Component } from 'react';

const ProfilePhoto = () => {
    return (
      <>
      <img src={profilePic} style={{ height: "40vmin"}} alt="profile Picture" />
      </>
    );
   };
   export default ProfilePhoto;
