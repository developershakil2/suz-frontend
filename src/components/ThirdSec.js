import React from 'react'
import FourSec from './FourSec'
const ThirdSec = () => {
  return (
    <>
    <section id="third" style={{marginTop:'50px'}}>
    <h4 className="py-5 my-4 text-center" style={{color:'#888', fontSize:'14px'}}>FEATURED PROJECTS</h4>
        <div className="container m-auto row mt-5 pt-5">
            
            <div id="third_first"  className="col-12 col-md-6 col-lg-6 col-xl-6">
                <div className="third_des_wrapper">
                    <h4>Deduma</h4>
                    <h6>Online platform for distance learning.</h6>
                    <span style={{color:'#888'}}>web, mobile, online</span>
                    
                    </div>
                </div>
                <div id="third_second"  className="col-12 col-md-6 col-lg-6 col-xl-6">
                      <div className="third_img">
                          <img height="300px" src="images/pic1.jpg" alt="img1"/>
                          </div>
                </div>
        </div>
        </section>
    <FourSec/>
    </>
  )
}

export default ThirdSec