import React from 'react';
import Footer from './Footer';
const Contact = () => {
  return (
    <>
    <section id="contact" style={{marginTop:'50px'}}>
    <h4 className="py-5 my-4 text-center" style={{color:'#888', fontSize:'14px'}}>GET IN TOUCH</h4>
   
        <div className="container m-auto row">
        <p className="text-center">
    Want to say hello? Want to know about me? Give me a call or drop me an email and I will get back to you as soon as I can.
    </p>

        <div className="col-12 col-md-7 col-lg-7 col-xl-7 mt-4">

<form action="" method="POST" className="row">
 <div className='col-6'>
 <input className="form-control" style={{padding:'10px'}} placeholder="Name *" />
 </div>
 <div className='col-6'>
 <input className="form-control" style={{padding:'10px'}} placeholder="Email *" />
 </div>

 <div  className="col-12 mt-4">
     
 <input className="form-control" style={{padding:'10px'}} placeholder="Phone *" />
     </div>
     <div  className="col-12">
     
 <textarea className="form-control mt-4" style={{padding:'10px', height:'250px'}} placeholder="Phone *" ></textarea>
     </div>
     <div  className="col-12">
     
     <input type="submit" className="mt-4 form-control mb-4 btn-primary btn-outline" style={{padding:'10px'}}value="Send Messege"/>
         </div>
</form>


        </div>
        <div className="col-12 col-md-5 col-lg-5 col-xl-5 mt-4">
            
        <h4 className=" text-start" style={{color:'#888', fontSize:'14px'}}>Address</h4>
        <h4>Dhaka bangladesh,</h4>
        <h4 className=" text-start" style={{color:'#888', fontSize:'14px'}}>Phone</h4>
        <h4>+880 1773-298432,</h4>
        <h4 className=" text-start" style={{color:'#888', fontSize:'14px'}}>Email</h4>
        <h4>info@milkywayitsolution.com,</h4>
            </div>


        </div>
        </section>
    <Footer/>
    </>
  )
}

export default Contact