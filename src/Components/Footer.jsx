import { useState, useEffect } from 'react'
import './Footer.css'
import logo2 from "../Data/logo2.png"

function Footer() {

  return (
    <>
      <div className='footerBox'>
        <div className='logoAndContact'>
            <div className='logoFooter'>
                <img src={logo2} alt="" />
                <p>Tai - Thai</p>
            </div>
            <div className='contactFooter'>
                <p><span className="material-symbols-outlined">phone_in_talk</span>0946.969.965</p>
                <p><span className="material-symbols-outlined">mail</span>phamtai.tind46@gmail.com</p>
                <p><span className="material-symbols-outlined">location_on</span>20.978241, 105.844396</p>
            </div>
        </div>
        <div className='infomation'>
            <p>Infomation</p>
            <a href="">My account</a>
            <a href="">Login</a>
            <a href="">My cart</a>
            <a href="">My Wishlist</a>
            <a href="">Checkout</a>
        </div>
        <div className='service'>
            <p>Service</p>
            <a href="">About us</a>
            <a href="">Careers</a>
            <a href="">Delivery Infomation</a>
            <a href="">Privacy Policy</a>
            <a href="">Term and Conditions</a>
        </div>
        <div className='subscribe'>
            <p className='p1'>Subcribe</p>
            <p className='p2'>Login to be the first to know about new collections and product lauches</p>
            <button>Login</button>
            <p className='p2'>Do not have an account? <a href="">Sign up</a></p>
        </div>
      </div>
    </>
  )
}
1
export default Footer;
