import React, {useState} from 'react'
import { StickyNav } from 'react-js-stickynav'
import 'react-js-stickynav/dist/index.css'
import MenuIcon from '@mui/icons-material/Menu'
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

const Nav = () => {
    const style = () => {
        return (
          <style jsx>{`
            .nav {
              transition: all 0.1s linear;
              position: fixed;
              z-index: 2000;
              padding: 20px;
              background:transparent;
              
            }
            .scrollNav {
              transition: all 0.5s ease-in;
              z-index: 2000;
              background:#00000079;
              width: 100%;
             padding:10px 0px;
             height:80px;
            }
            .styl {
              padding-top: 0px;
              margint-top:80px !important;
            }
          `}</style>
        )
      }
    
const close = "-999999%";
const open  = "0%";

const [mymenu, setmymenu] = useState(close);

const openMenu = ()=>{
    setmymenu(open);
   
}






  return (

    <>
      {style()}
      <StickyNav  width="100%" length='100'>
            <div className="container container-sm-fluid m-auto row">
                
                <div className="col-6 text-start">
                 <img height="80px" width="150px" src="images/logo.png" alt="logo"/>
                </div>

                <div style={{display:'flex',justifyContent:'end', alignItems:'center'}} className="col-6 text-end">
                <h2  style={{color:'#fff', fontSize:'20px'}}>Menu<Button onClick={openMenu}><MenuIcon style={{color:"#fff ", fontSize:'38px '}}/></Button></h2>
                </div>
            </div>
            <div style={{right:mymenu}} id="menu">
              <div style={{textAlign:'right', padding:'10px'}} className="text-right">
              <Button  onClick={()=> setmymenu(close)}><CloseIcon style={{color:'#fff',fontSize:'38px'}}/></Button>
                  </div>
                <ul>
                <span style={{color:'#888' }}>MENU</span>
                    <li><a onClick={()=> setmymenu(close)} href="#"> Home</a> </li>
                    <li><a onClick={()=> setmymenu(close)} href="#second"> About</a> </li>
                    <li><a onClick={()=> setmymenu(close)} href="#six"> Skills</a> </li>
                    <li><a onClick={()=> setmymenu(close)} href="#fifth"> Services</a> </li>
                    <li><a onClick={()=> setmymenu(close)} href="#contact"> Contact</a> </li>
                </ul>
            </div>

      </StickyNav>
     
     




    
    </>
  )
}

export default Nav