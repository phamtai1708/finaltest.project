import { useState, useEffect } from 'react'
import './ProductInfo.css'
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Mainmenu from './Mainmenu.jsx'
import Footer from './Footer.jsx'
function ProductInfo() {
  const { name } = useParams();
  const location = useLocation();
  const { item } = location.state;
  return (
    <>
      <Mainmenu/>
      <div className='productInfo'>
        <div className='imageProduct'>
          <div className='bigImage'>
            <img src={item.images[6]} alt={item.name} />
          </div>
          <div className='smaillImage'>
            {item.images.map((xxx,idx)=>(
              <img src={xxx} alt={item.name} key={idx} />
            ))}
          </div>
        </div>
        <div className='infomationProduct'>
          <p className='nameProduct'>{item.name}</p>
          <p><span>ID: {item.id}</span> <span>Đã bán: {item.volume}</span></p>
          <p>Giới tính: {item.gender}</p>
          <p>Category: {item.category}</p>
          <div className='priceInfo'>
          <p>Giá: </p>
          <p className='minPriceInfo'>{item.minPrice}</p>
          <p className='maxPriceInfo'>{item.maxPrice}</p>
          </div>
          <p>Color:</p>
          <div className='btnColor'>
          { item.colors.map((xxx, idx)=>(
            <button className={item.colorId[idx]} key={idx}></button>
          ))}
          </div>
          <p>Sizes:</p>
          <div className='btnSize'>
          {item.sizes.map((xxx,idx)=>(
            <button key={idx}>{xxx}</button>
          ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default ProductInfo;