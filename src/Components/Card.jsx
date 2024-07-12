import { useState, useEffect } from 'react'
import './Card.css'
import { useNavigate } from 'react-router-dom';

function Card({item, onClick}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product/${item.name}`, { state: { item } });
    if (onClick) {
      onClick(item.images[0]);
    }
  };
  return (
    <>
      <div className='topProductBox' onClick={handleClick} >
        <div className='imgBox'>
        <img src={item.images[0]} alt={item.name} />
        </div>
        <p className='nameProduct'>{item.name}</p>
        <p className='category'>{item.category}</p>
        <div className='price'>
            <p className='minPrice'>{item.minPrice} đ</p>
            <p className='maxPrice'>{item.maxPrice}</p>
        </div>
      </div>
    </>
  )
}

export default Card;
