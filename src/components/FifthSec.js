import React from 'react'
import SixSec from './SixSec'
import ImageBox from './ImageBox'
import Lightbox from './ImageBox'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const FifthSec = () => {






   
  return (
    <>
    <section id="fifth" style={{marginTop:'100px'}}>
        <div className="container m-auto .row">
        <h4 className="py-5 my-4 text-center" style={{color:'#888', fontSize:'14px',marginTop:'30px'}}>AMAZING SERVICES
 </h4>
     


                 <div className="mt-5 row">
                     
                 <div className="col-12 col-md-6 col-lg-6 col-xl-6 ser_img">
                       <img src="images/php.jpg" alt="img"/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6 ser_des">
                    <h4> PHP Websites</h4>
                         <span style={{color:'#888'}}>Starts From</span>
                         <h5>$500</h5>
                    </div>

                     </div>


                     <div className="mt-5 row">
                     
                        <div className="col-12 col-md-6 col-lg-6 col-xl-6 ser_des">
                        <h4> Wordpress Websites</h4>
                             <span style={{color:'#888'}}>Starts From</span>
                             <h5>$300</h5>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 col-xl-6 ser_img">
                           <img src="images/wp.jpg" alt="img"/>
                        </div>
                         </div>





                         <div className="mt-5 row">
                     
                     <div className="col-12 col-md-6 col-lg-6 col-xl-6 ser_img">
                           <img src="images/react.jpg" alt="img"/>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 col-xl-6 ser_des">
                        <h4> React.js Websites</h4>
                             <span style={{color:'#888'}}>Starts From</span>
                             <h5>250</h5>
                        </div>
    
                         </div>





                         <div className="mt-5 row">
                         <div className="col-12 col-md-6 col-lg-6 col-xl-6 ser_des">
                        <h4> Psd to Websites</h4>
                             <span style={{color:'#888'}}>Starts From</span>
                             <h5>$50</h5>
                        </div>
                     <div className="col-12 col-md-6 col-lg-6 col-xl-6 ser_img">
                           <img src="images/psd.jpg" alt="img"/>
                        </div>
                       
    
                         </div>

            </div>
        </section>
    <SixSec/>
 <a href='#' id="play"><AccountCircleIcon style={{color:'#fff',fontSize:'36px',cursor:'pointer'}}/></a>
              
    </>
  )
}

export default FifthSec