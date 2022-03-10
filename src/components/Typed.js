import React from 'react'
import Typed from "typed.js";
import { useEffect, useRef } from "react";


const Typing = () =>{
    const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
      "Freelancer", "Developer", "Designer", "Suzaual",
    ],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100
    });

    
    return () => {
      typed.destroy();
    };
  }, []);

  return (

    <>
    
    <div>
      
      <h3 style={{fontSize:'30px'}} ref={el}></h3>
    </div>
    
    </>
    
  );
   
}

export default Typing ;