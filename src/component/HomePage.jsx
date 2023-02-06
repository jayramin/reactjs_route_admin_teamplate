import React from "react";
import { AnimateGroup } from "react-smooth";
import Animate from "react-smooth/lib/Animate.js";
// import ScrollAnimation from 'react-animate-on-scroll';

import HeaderMenu from "./commoncompo/HeaderMenu.jsx";
const HomePage = () => {

  return (
    <>
      <HeaderMenu />
      Home page
      <div className="container">
        <p className="py-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
          debitis, eveniet animi in reprehenderit alias qui non dignissimos
          voluptatem voluptate nemo velit vero ipsum a autem voluptatum ex
          ducimus laudantium?
        </p>
        <p className="py-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
          debitis, eveniet animi in reprehenderit alias qui non dignissimos
          voluptatem voluptate nemo velit vero ipsum a autem voluptatum ex
          ducimus laudantium?
        </p>
        <p className="py-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
          debitis, eveniet animi in reprehenderit alias qui non dignissimos
          voluptatem voluptate nemo velit vero ipsum a autem voluptatum ex
          ducimus laudantium?
        </p>
        <p className="py-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
          debitis, eveniet animi in reprehenderit alias qui non dignissimos
          voluptatem voluptate nemo velit vero ipsum a autem voluptatum ex
          ducimus laudantium?
        </p>
        <p className="py-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
          debitis, eveniet animi in reprehenderit alias qui non dignissimos
          voluptatem voluptate nemo velit vero ipsum a autem voluptatum ex
          ducimus laudantium?
        </p>
        <Animate from="0" to="1" attributeName="opacity">
          <p className="py-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
            debitis, eveniet animi in reprehenderit alias qui non dignissimos
            voluptatem voluptate nemo velit vero ipsum a autem voluptatum ex
            ducimus laudantium?
          </p>
        </Animate>
        <Animate
          from={{ opacity: 0 }}
          to={{ opacity: 1, transform: "translateX(300)" }}
          easing="ease-in"
        >
          <p className="py-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
            debitis, eveniet animi in reprehenderit alias qui non dignissimos
            voluptatem voluptate nemo velit vero ipsum a autem voluptatum ex
            ducimus laudantium?
          </p>
        </Animate>
        <Animate easing="spring" from={{ x: 200 }} to={{ x:0 }}>
          {({ x }) => (
            <div style={{
              backgroundColor: 'red',
              transform: `translate( ${x}px,0)`,
            }}
            >
            
        <p className="py-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
          debitis, eveniet animi in reprehenderit alias qui non dignissimos
          voluptatem voluptate nemo velit vero ipsum a autem voluptatum ex
          ducimus laudantium?
        </p>
            </div>
          )}
          
        </Animate>
        <p className="py-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
          debitis, eveniet animi in reprehenderit alias qui non dignissimos
          voluptatem voluptate nemo velit vero ipsum a autem voluptatum ex
          ducimus laudantium?
        </p>
        <p className="py-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
          debitis, eveniet animi in reprehenderit alias qui non dignissimos
          voluptatem voluptate nemo velit vero ipsum a autem voluptatum ex
          ducimus laudantium?
        </p>
        <p className="py-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
          debitis, eveniet animi in reprehenderit alias qui non dignissimos
          voluptatem voluptate nemo velit vero ipsum a autem voluptatum ex
          ducimus laudantium?
        </p>
        <p className="py-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
          debitis, eveniet animi in reprehenderit alias qui non dignissimos
          voluptatem voluptate nemo velit vero ipsum a autem voluptatum ex
          ducimus laudantium?
        </p>
      </div>
    </>
  );
};

export default HomePage;
