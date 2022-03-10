import React from 'react'
import FifthSec from './FifthSec'
const FourSec = () => {
  return (
    <>
    <sectin id="four" className="mt-5 pt-5">
          <div className="container m-auto ">
          <h4 className="py-5 my-4 text-center" style={{color:'#888', fontSize:'14px',marginTop:'30px'}}>KNOWLEDGE {'&'} SKILLS</h4>

              <div className="forur_sec_content text-center m-auto">
             <p>
             For over a decade, I've helped businesses to craft honest, emotional experiences through strategy, brand development, graphic design, and web design.

                 </p>




                 <div style={{marginTop:'120px'}}>
                       <div className='prog react'>
                            <span className="text-light" >REACT.js</span>
                            <span className="parchent text-light">85%</span>
                           </div>
                           <div className='prog php mt-3'>
                            <span className='text-light'>PHP</span>
                            <span className="parchent text-light">75%</span>
                           </div>
                           <div className='prog mysql mt-3'>
                            <span className="text-light">MYSQL</span>
                            <span className="parchent text-light">75%</span>
                           </div>

                           <div className='prog wordpress mt-3'>
                            <span className="text-light">WORDPRESS</span>
                            <span className="parchent text-light">90%</span>
                           </div>
                           <div className='prog js mt-3'>
                            <span className="text-light">JAVASCRIPT </span>
                            <span className="parchent text-light">85%</span>
                           </div>
  
                           <div className='prog bt mt-3'>
                            <span className="text-light">BOOTSTRAP</span>
                            <span className="parchent text-light">90%</span>
                           </div>

                           <div className='prog html mt-3'>
                            <span className="text-light">MHTL {"&"} CSS</span>
                            <span className="parchent text-light">95%</span>
                           </div>
                     </div>
                     
                  </div>

          </div>
        </sectin>
    <FifthSec/>
    </>
  )
}

export default FourSec