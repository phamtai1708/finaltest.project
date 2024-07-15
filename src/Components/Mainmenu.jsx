import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import './Mainmenu.css'
import logo2 from "../Data/logo2.png"

function MainMenu() {
  const navigate = useNavigate();
  const handClickLogin = () => {
    navigate(`/Login`);
  };
  const handClickSearch = () => {
    navigate(`/Search`);
  };
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
            <span className="material-symbols-outlined" onClick={handClickSearch}>search</span>
            <span className="material-symbols-outlined">favorite</span>
            <span className="material-symbols-outlined">local_mall</span>
            <button className='btnLogin' onClick={handClickLogin}>Login</button>
        </div>
      </div>
    </>
  )
}
1
export default MainMenu;
