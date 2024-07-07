import { useState, useEffect } from 'react'
import './Mainmenu.css'
import logo2 from "../Data/logo2.png"

function MainMenu() {

  return (
    <>
      <div className='menuBar'>
        <div className='logo'>
          <img src={logo2} alt="logo" />
          <p>Tai-Thai</p>
        </div>
        <div className='mainMenu'>
          <a href="">Home</a>
          <a href="">Men</a>
          <a href="">Women</a>
          <a href="">Kids</a>
          <a href="">Accessories</a>
          <a href="">Contact us</a>
        </div>
        <div className='auMenu'>
            <span className="material-symbols-outlined">search</span>
            <span className="material-symbols-outlined">favorite</span>
            <span className="material-symbols-outlined">local_mall</span>
            <button className='btnLogin'>Login</button>
        </div>
      </div>
    </>
  )
}
1
export default MainMenu;
