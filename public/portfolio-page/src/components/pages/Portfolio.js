import React from 'react';
import pic from './2Space_Surfer.png';
import fig from './Figjam_SS1.png';

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>


      <div>
      <a href ="https://supermarche-fromage-49994.herokuapp.com/">
        <p>One: FigJam</p>
        <img src= {fig} alt="figjam screenshot" width="200" height="180" />
      </a>
      </div>

      <div>
      <a href ="https://xnd0.github.io/Portfolio_2.2/">
        <p>Two: The Old Portfolio</p>
        <img src= {pic} alt="spaceman surfing" width="200" height="180"  />
        </a>
      </div>

      <div>
      <a href ="https://supermarche-fromage-49994.herokuapp.com/">
        <p>Three: FigJam</p>
        <img src= {fig} alt="figjam screenshot" width="200" height="180" />
      </a>
      </div>

      <div>
      <a href ="https://xnd0.github.io/Portfolio_2.2/">
        <p>Four: The Old Portfolio</p>
        <img src= {pic} alt="spaceman surfing" width="200" height="180"  />
        </a>
      </div>

      <div>
      <a href ="https://supermarche-fromage-49994.herokuapp.com/">
        <p>Five: FigJam</p>
        <img src= {fig} alt="figjam screenshot" width="200" height="180" />
      </a>
      </div>

      <div>
      <a href ="https://xnd0.github.io/Portfolio_2.2/">
        <p>Six: The Old Portfolio</p>
        <img src= {pic} alt="spaceman surfing" width="200" height="180"  />
        </a>
      </div>


      
      <p>
        Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
        Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu
        dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus
        sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum nunc,
        sed pretium risus rutrum eget. Nam consequat, ligula in faucibus
        vestibulum, nisi justo laoreet risus, luctus luctus mi lacus sit amet
        libero. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Mauris pretium condimentum tellus eget
        lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Donec placerat accumsan mi, ut congue neque placerat eu. Donec nec ipsum
        in velit pellentesque vehicula sit amet at augue. Maecenas aliquam
        bibendum congue. Pellentesque semper, lectus non ullamcorper iaculis,
        est ligula suscipit velit, sed bibendum turpis dui in sapien.
      </p>
    </div>
  );
}
