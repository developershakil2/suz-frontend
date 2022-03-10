import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ThirdSec from './ThirdSec';

const Second = () =>{
    return(
        <>
        <section id="second">
            <div  className="container m-auto text-center">
                    <div id="second_para">
                    <p>
                    A creative person with solid design and development expertise. I build readymade websites, mobile applications, and elaborate online business services.
                    </p>
                        </div>
                        <div id="second_social">
                            <a href="#"><TwitterIcon style={{color:'#fff',textDecoration:'none'}}/></a>
                            <a href="https://www.facebook.com/MilkyWayItSolution/"><FacebookIcon style={{color:'#fff',textDecoration:'none'}}/></a>
                            <a href="#"><InstagramIcon style={{color:'#fff',textDecoration:'none'}}/></a>
                            <a href="#"><PinterestIcon style={{color:'#fff',textDecoration:'none'}}/></a>
                           
                            </div>
                </div>
            </section>
        <ThirdSec/>
        </>
    )
}

export default Second ;