import React from 'react';
import pic from './2Space_Surfer.png'

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>-Welcome to my Portfolio Page-</p>
      <p>
        Please use the tabs to navigate and learn more. Thanks for visiting.
      </p>
      <img src= {pic} alt="spaceman surfing"   />
      <br></br>
      <br></br>
    </div>
  );
}
