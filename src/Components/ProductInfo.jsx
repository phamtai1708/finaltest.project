import { useState, useEffect, useContext } from 'react'
import { ProductContext } from './ProductProvider';
import './ProductInfo.css'
import './Color.css'
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Mainmenu from './Mainmenu.jsx'
import Card from './Card.jsx';
import Footer from './Footer.jsx'
import ServiceBox from './ServiceBox.jsx';
function ProductInfo() {
  const { name } = useParams();
  const location = useLocation();
  const { item } = location.state;
  // Relate Product
  const products = useContext(ProductContext);
  
  const filterData = products.filter((dataxxx)=> dataxxx.category === item.category || dataxxx.gender === item.gender )
  const relateData = [...filterData].sort((a, b) => b.volume - a.volume).slice(0, 4);
  
  const [mainImage, setMainImage] = useState(item.images[0]);

  const updateMainImage = (aaa) =>{
    setMainImage(aaa)
  }

  const [numberProduct, setNumberProduct] = useState(1);
  function increaseProduct(){
    setNumberProduct(numberProduct+1)
  }
  function reduceProduct(){
    if (numberProduct>1){
    setNumberProduct(numberProduct-1)
    }
  }

  return (
    <>
      <Mainmenu/>
      <div className='productInfo'>
        <div className='imageProduct'>
          <div className='bigImage'>
            <img src={mainImage} alt={item.name} />
          </div>
          <div className='smaillImage'>
            {item.images.map((xxx,idx)=>(
              <img src={xxx} alt={item.name} key={idx} onClick={()=>setMainImage(xxx)} />
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
          <p>Quantity:</p>
          <div className='quantity'>
              <button className='btnQuantity'>
              <span className="material-symbols-outlined" onClick={reduceProduct}>remove</span>
              {numberProduct}
              <span className="material-symbols-outlined" onClick={increaseProduct}>add</span>
              </button>
              <button className='btnAddToCart'>Add to Cart</button>
              <button className='btnLove'>
                <span className="material-symbols-outlined">favorite</span>
              </button>
              <button className='btnBuyNow'>Buy now</button>
          </div>
        </div>
        
      </div>
      <div className='descriptionProduct'>
          <button>Description</button>
          <button>Additional Infomation</button>
          <button>Reviews</button>
      </div>
      <div className='descriptionBox'>
        dsfsd
      </div>
      <div className='relatedProduct'>
          <p className='rl1'>Related Product</p>
          <div className='relatedBox'>
          {relateData.map((xxx)=>(
            <Card item={xxx} key={xxx.id} onClick={updateMainImage} />))
          }
          </div>
      </div>
      <ServiceBox/>
      <Footer/>
    </>
  )
}

export default ProductInfo;