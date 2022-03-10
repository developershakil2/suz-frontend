import React from 'react'
import Nav from './Nav'
import Typing from './Typed'
const Home = () =>{
  return (

    <>
    <div style={{position:'fixed', width:'100%',height:'80px',top:'0%'}}>
    <Nav/>
    </div>
<div  style={{marginTop:'80px', width:'100%'}} >
  
    <div  className="container m-auto row">
  
       <div id="home_img" className="col-12 col-md-6 col-lg-6 col-xl-6 row">
               
               <div id="circle1" className="col-10 m-auto">
               <div id='circle2'>
                 <div id="1" className='coll'></div>
                 <div id="2" className='coll'></div>
                 <div id="3" className='coll'></div>
               <div id='circle3'></div>
              
              
                 </div>
                
                 </div>
                
         </div>
         <div id="typing" className="col-12 col-md-6 col-lg-6 col-xl-6 ">
                <h2 style={{fontSize:'33px', margin:'0px'}}>Hello I'M </h2> 
                <Typing style={{fontSize:'45px', fontWeight:'bold'}}/>
               
         </div>
      </div>
      

  </div>
    
    </>
    
  );
   
}

export default Home ;