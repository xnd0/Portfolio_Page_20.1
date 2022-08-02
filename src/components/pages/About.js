import React from 'react';
import pic from './2Space_Surfer.png'

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <p>
        I am a developer. Welcome to my gitHub Portfolio page.
      </p>
      <img src= {pic} alt="spaceman surfing"/>
      <br></br>
      <br></br>
      <h3>A Short Bio:</h3>
      <br></br>
      <p> Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
        Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu
        dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus
        sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum nunc,
        sed pretium risus rutrum eget. Nam consequat, ligula in faucibus
        vestibulum, nisi justo laoreet risus, luctus luctus mi lacus sit amet
        libero. </p>
     <br></br>
     <br></br>
    </div>
  );
}
