import Typed from "typed.js";
import { useEffect,useState,useCallback , useRef } from "react";
import Home from './components/Home.js';
import Second from './components/SecondSec';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Scrollbars } from 'react-custom-scrollbars-2';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import StarIcon from '@mui/icons-material/Star';
import CloseIcon from '@mui/icons-material/Close';
import { MessengerChat } from 'react-messenger-chat-plugin';
import FloatingWhatsApp from 'react-floating-whatsapp';
import ReactWhatsapp from 'react-whatsapp';
export default function App() {
  // Create Ref element.
  const leftWidthClose = "0%";
  const leftWidth = "50%";
  const rightWidthClose = "0%";
  const rightWidth = "50%";
  const backDis = "hidden";
  const backDisOpen = "visible";
      
  const third = "hidden";
  const openThird = "visible";
  const [thirdE, setThird] = useState(third);
  const [openWidth, setOpenWidthright] = useState(leftWidthClose);
  
  const [openWidthright, setOpenWidth] = useState(rightWidthClose);
const [backdis, setBackdis] = useState(backDis);

  const openPart = ()=>{
    setThird(openThird);
    setBackdis(backDisOpen);
    setOpenWidth(leftWidth);
    setOpenWidthright(rightWidth);
   
  }
  const closeall = ()=>{
    setBackdis(backDis);
    setOpenWidth(leftWidthClose);
    setThird(third);
    setOpenWidthright(leftWidthClose);
  }
 
 
  return (
   <>
  <Home/>
  <Second />

  <div style={{visibility:backdis}}  id="back">
   
    <div id="back_wrapper" className="container m-auto ">
      <div style={{width:openWidth}} id="left">
        
        </div>

        <div style={{width:openWidthright}} id="right">
          
          </div>
      
      </div>


           <div style={{visibility:thirdE}} id="thrid_lair">
           <button id="allclos" onClick={closeall}><CloseIcon style={{color:'#fff', fontSize:'30px'}}/></button>
             <div className="container m-auto row">
                  <div id="lair1" className="col-12 col-md-6 col-lg-5 col-xl-5 mt-4">
                   <img src="images/s1.jpeg" alt="image"/>
                   <h3><span style={{color:"#ff0000"}}>SUZAUL</span> ISLAM
                   </h3>
                    <h6>I'm Available for freelance Jobs</h6>                   <div id="second_social">
                            <a href="#"><TwitterIcon style={{color:'#fff',textDecoration:'none'}}/></a>
                            <a href="#"><FacebookIcon style={{color:'#fff',textDecoration:'none'}}/></a>
                            <a href="#"><InstagramIcon style={{color:'#fff',textDecoration:'none'}}/></a>
                            <a href="#"><PinterestIcon style={{color:'#fff',textDecoration:'none'}}/></a>
                            
                            </div>
                    </div>

                    <div id="lair2" className="col-12 col-md-6 col-lg-7 col-xl-7 mt-4">
                                
  <Scrollbars id="scro">

  <div id="lair12" className="col-12 col-md-6 col-lg-5 col-xl-5 mt-4">
                   <img src="images/s1.jpeg" alt="image"/>
                   <h3><span style={{color:"#ff0000"}}>SUZAUL</span> ISLAM
                   </h3>
                    <h6>I'm Available for freelance Jobs</h6>                   <div id="second_social">
                            <a href="#"><TwitterIcon style={{color:'#fff',textDecoration:'none'}}/></a>
                            <a href="https://www.facebook.com/MilkyWayItSolution/"><FacebookIcon style={{color:'#fff',textDecoration:'none'}}/></a>
                            <a href="#"><InstagramIcon style={{color:'#fff',textDecoration:'none'}}/></a>
                            <a href="#"><PinterestIcon style={{color:'#fff',textDecoration:'none'}}/></a>
                            
                            </div>
                    </div>


                                   <div id="bio"  className="mt-4">
                                   <h3 style={{color:'#ff0000'}}>Biography</h3>
                                <p>
                                I'm a Freelancer Front-end Developer with over 12 years of experience. I'm from San Francisco. I code and create web elements for amazing people around the world. I like work with new people. New people are new experiences.
                                </p>  
                                <div className="row_wise_div row">
                                   <div  className="col-12 col-md-6 col-lg-6 col-xl-6 mt-1 text-left ">
                                   Name: Suzaul islam
                                   </div>
                                   <div  className="col-12 col-md-6 col-lg-6 col-xl-6 mt-1 text-left">
                                   Birthday: feb 14, 1997
                                     </div>
                                  </div>
                                
                                  <div className="row_wise_div row">
                                   <div  className="col-12 col-md-6 col-lg-6 col-xl-6 mt-1 text-left ">
                                   Languages: English, Italian, Arabic
                                   </div>
                                   <div  className="col-12 col-md-6 col-lg-6 col-xl-6 mt-1 text-left">
                                   Age: 29 Years
                                     </div>
                                  </div>
                                  <div className="row_wise_div row">
                                   <div  className="col-12 col-md-6 col-lg-6 col-xl-6 mt-1 text-left ">
                                   Nationality: bangladeshi
                                   </div>
                                   <div  className="col-12 col-md-6 col-lg-6 col-xl-6 mt-1 text-left">
                                   Adress: Dhaka, BAN

                                     </div>
                                  </div>
                                  <div className="row_wise_div row">
                                   <div  className="col-12 col-md-6 col-lg-6 col-xl-6 mt-1 text-left ">
                                   Whatsup: Available
                                   </div>
                                   <div  className="col-12 col-md-6 col-lg-6 col-xl-6 mt-1 text-left">
                                   Phone: (+880) 1773-298432
                                     </div>
                                  </div>
                                  <div className="row_wise_div row">
                                   <div  className="col-12 col-md-6 col-lg-6 col-xl-6 mt-1 text-left ">
                                   Skype: suzaul
                                   </div>
                                   <div  className="col-12 col-md-6 col-lg-6 col-xl-6 mt-1 text-left">
                                   Email: mdsuzaullislam@gmail.com
                                     </div>
                                  </div>
                                     </div>
                                     <div id="bio" className="mt-4">
                                   <h3 style={{color:'#ff0000'}}>EDUCATION</h3>
                                   <h4 className="py-4">FRENIFY UNIVERSITY
                                  ( 2014 — 2017 )</h4>
                                 <h3 className="py-3">Computer Science</h3>
                                <p>
                                Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>  
                          
                                     </div>


                                     <div id="bio" className="mt-4">
                                  
                                   <h4 className="py-4">BRAC UNIVERSITY
( 2011 — 2014 )</h4>
<h3 className="py-3">Master Degree </h3>
                                <p>
                                Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>  
                               


                                     </div>






                                     <div id="bio" className="mt-4">
                                   <h3 style={{color:'#ff0000'}}>EXPERIENCE</h3>
                                   <h4 className="py-4">FRENIFY LLC
( 2018 — Today )</h4>
                                 <h3 className="py-3">Sr. Fullstack Engineer</h3>
                                <p>
                                Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>  
                          
                                     </div>


                                     <div id="bio" className="mt-4">
                                   <h3 style={{color:'#ff0000'}}>PROFESSIONALITY</h3>
                                  
                                   <div className="mt-4">
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




                                     <div id="bio" className="mt-4">
                                   <h3 style={{color:'#ff0000'}}>SERVICES</h3>
                                   <p>
                                   I help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers and growing overall sales.
                                   </p>
                                     <div className="hide_team row mt-3">
                                     <div className="col-8">
                                       <h5>PHP Websites
                                     </h5>
                                     <p>
                                     Custom marketing solutions. Get your business on the next level. We provide worldwide marketing.
                                     </p>
                                     </div>
                                     <div className="col-4">
                                     <p style={{marginBottom:'0px'}}>Starts From</p>
                                          <p>$500</p>
                                       </div>
                                       </div>

                                       <div className="hide_team row mt-3">
                                     <div className="col-8">
                                       <h5>Wordpress Websites
                                     </h5>
                                     <p>
                                     Custom marketing solutions. Get your business on the next level. We provide worldwide marketing.
                                     </p>
                                     </div>
                                     <div className="col-4">
                                     <p style={{marginBottom:'0px'}}>Starts From</p>
                                          <p>$300</p>
                                       </div>
                                       </div>
                                       <div className="hide_team row mt-3">
                                     <div className="col-8">
                                       <h5>React.js Websites
                                     </h5>
                                     <p>
                                     Custom marketing solutions. Get your business on the next level. We provide worldwide marketing.
                                     </p>
                                     </div>
                                     <div className="col-4">
                                     <p style={{marginBottom:'0px'}}>Starts From</p>
                                          <p>$250</p>
                                       </div>
                                       </div>
                                       <div className="hide_team row mt-3">
                                     <div className="col-8">
                                       <h5>Psd to Websites
                                     </h5>
                                     <p>
                                     Custom marketing solutions. Get your business on the next level. We provide worldwide marketing.
                                     </p>
                                     </div>
                                     <div className="col-4">
                                     <p style={{marginBottom:'0px'}}>Starts From</p>
                                          <p>$50</p>
                                       </div>
                                       </div>

                                     </div>
                                     <div id="bio" className="mt-4">
                                   <h3 style={{color:'#ff0000'}}>REFERENCES</h3>
<p className="py-4">
A testimonial is effectively a review or recommendation from a client, letting other people know how your products or services benefitted them. We respect each client and help everyone with all our might.
</p>

                                   <div className="hide_team row mt-3">
                                     <div className="col-12 col-md-8 col-lg-8 col-xl-8 mt-2">
                                      
                                     <p>
                                     One of the best. It works quite well for software development also. The design and ease of installation and customizing is exceptional. Many plaudits to the developers!
                                     </p>
                                     </div>
                                     <div className="col-12 col-md-4 col-lg-4 col-xl-4 text-center mt-2">
                                        <img className="testim" src="images/cr.jpg" alt="imga"/>
                                           <h5>shakil hossain</h5>
                                          <div className="startIcon">
                                          <StarIcon style={{  color:'#ff0'}}/>
                                          <StarIcon style={{  color:'#ff0'}}/>
                                          <StarIcon style={{  color:'#ff0'}}/>
                                          <StarIcon style={{  color:'#ff0'}}/>
                                          <StarIcon style={{  color:'#ff0'}}/>
                                            </div>
                                       </div>
                                       </div>



                                       <div className="hide_team row mt-3">
                                     <div className="col-12 col-md-8 col-lg-8 col-xl-8 mt-2">
                                      
                                     <p>
                                     One of the best. It works quite well for software development also. The design and ease of installation and customizing is exceptional. Many plaudits to the developers!
                                     </p>
                                     </div>
                                     <div className="col-12 col-md-4 col-lg-4 col-xl-4 text-center mt-2">
                                        <img className="testim" src="images/louren.jfif" alt="imga"/>
                                           <h5>louren angie</h5>
                                          <div className="startIcon">
                                          <StarIcon style={{  color:'#ff0'}}/>
                                          <StarIcon style={{  color:'#ff0'}}/>
                                          <StarIcon style={{  color:'#ff0'}}/>
                                          <StarIcon style={{  color:'#ff0'}}/>
                                          <StarIcon style={{  color:'#ff0'}}/>
                                            </div>
                                       </div>
                                       </div>
                          
                                       <div className="hide_team row mt-3">
                                     <div className="col-12 col-md-8 col-lg-8 col-xl-8 mt-2">
                                      
                                     <p>
                                     One of the best. It works quite well for software development also. The design and ease of installation and customizing is exceptional. Many plaudits to the developers!
                                     </p>
                                     </div>
                                     <div className="col-12 col-md-4 col-lg-4 col-xl-4 text-center mt-2">
                                        <img className="testim" src="images/hilary.jfif" alt="imga"/>
                                           <h5>hilary wilson</h5>
                                          <div className="startIcon">
                                          <StarIcon style={{  color:'#ff0'}}/>
                                          <StarIcon style={{  color:'#ff0'}}/>
                                          <StarIcon style={{  color:'#ff0'}}/>
                                          <StarIcon style={{  color:'#ff0'}}/>
                                          <StarIcon style={{  color:'#ff0'}}/>
                                            </div>
                                       </div>
                                       </div>




                                       <div className="hide_team row mt-3">
                                     <div className="col-12 col-md-8 col-lg-8 col-xl-8 mt-2">
                                      
                                     <p>
                                     One of the best. It works quite well for software development also. The design and ease of installation and customizing is exceptional. Many plaudits to the developers!
                                     </p>
                                     </div>
                                     <div className="col-12 col-md-4 col-lg-4 col-xl-4 text-center mt-2">
                                        <img className="testim" src="images/terry.jfif" alt="imga"/>
                                           <h5>terry downe</h5>
                                          <div className="startIcon">
                                          <StarIcon style={{  color:'#ff0'}}/>
                                          <StarIcon style={{  color:'#ff0'}}/>
                                          <StarIcon style={{  color:'#ff0'}}/>
                                          <StarIcon style={{  color:'#ff0'}}/>
                                          <StarIcon style={{  color:'#ff0'}}/>
                                            </div>
                                       </div>
                                       </div>






                                     </div>            
                                     </Scrollbars>
                      </div>
               </div>


             
             </div>
  </div>
  
  <button onClick={openPart} id="play"><AccountCircleIcon style={{color:'#fff',fontSize:'36px',cursor:'pointer'}}/></button>
  {/* <MessengerChat
    pageId='106088952007354'
    language='en_US'
    themeColor={'#F2F3G2'}
    height={24}
    loggedInGreeting='Hello logged in user!'
    loggedOutGreeting='Hello stranger!'
    
    autoExpand={true}
    debugMode={false}
    onMessengerShow={() => {console.log('onMessengerShow')}}
    onMessengerHide={() => {console.log('onMessengerHide')}}
    onMessengerDialogShow={() => {console.log('onMessengerDialogShow')}}
    onMessengerDialogHide={() => {console.log('onMessengerDialogHide')}}
    />; */}
    <div id="whatsapp">
    <FloatingWhatsApp  phoneNumber="+88001842709014"
        accountName="md suzaul islam"
        className='whatsapp'
        avatar="images/s1.jpeg"
        notification
        notificationDelay={60000} // 1 minute
        notificationSound />
      </div>
   </>
  );
}