import { useState, useEffect } from 'react'
import './Card.css'
import { useNavigate } from 'react-router-dom';

function Card({item}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product/${item.name}`, { state: { item } });
  };
  return (
    <>
      <div className='topProductBox' onClick={handleClick}>
        <img src={item.images[0]} alt={item.name} />
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
