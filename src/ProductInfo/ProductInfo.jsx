import { useState, useEffect, useContext } from 'react'
import { ProductContext } from '../Components/ProductProvider.jsx';
import './ProductInfo.css'
import '../Components/Color.css'
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import MainMenu from '../Components/Mainmenu.jsx';
import Card from '../Components/Card.jsx';
import Footer from '../Components/Footer.jsx';
import ServiceBox from '../Components/ServiceBox.jsx';
function ProductInfo() {
  const { name } = useParams();
  const location = useLocation();
  const { item } = location.state;
  // Relate Product
  const products = useContext(ProductContext);
  
  const filterData = products.filter((dataxxx)=> dataxxx.category === item.category || dataxxx.gender === item.gender )
  const relateData = [...filterData].sort((a, b) => b.volume - a.volume).slice(0, 4);
  const relateData2 = [...filterData].sort((a, b) => b.volume - a.volume).slice(5, 9);
  const [mainImage, setMainImage] = useState(item.images[0]);

  const updateMainImage = (aaa) =>{
    setMainImage(aaa)
  }
// Số lượng sản phẩm
  const [numberProduct, setNumberProduct] = useState(1);
  function increaseProduct(){
    setNumberProduct(numberProduct+1)
  }
  function reduceProduct(){
    if (numberProduct>1){
    setNumberProduct(numberProduct-1)
    }
  }
// lựa chọn màu
  let bbb =[]
  item.colors.map((idx)=>{bbb[idx]=false});
  const [colorOfItem, setColorOfItem] = useState(bbb)
  let changeColorSelected =(xxx)=>{
    bbb.map(ccc=>false);
    bbb[xxx]=true;
    setColorOfItem(bbb);
  }
// lựa chọn size
let zzz =[]
  item.sizes.map((idx)=>{zzz[idx]=false});
  const [sizeOfItem, setSizeOfItem] = useState(zzz)
  let changeSizeSelected =(aaa)=>{
    zzz.map(ccc=>false);
    zzz[aaa]=true;
    setSizeOfItem(zzz);
  }
// Add item to Card
let currentUser = JSON.parse(localStorage.getItem("currentUser")) || [];
// currentUser.productOfUser=[];
  let addToCart =()=>{
    console.log(item);
    let currentColorIdSelected;
    let currentColorSelected;
    colorOfItem.map((colorr,idxColor)=>{
      if (colorr){
        currentColorSelected=item.colors[idxColor];
        currentColorIdSelected = item.colorId[idxColor];
      }
    });
    let currentSizeSelected;
    sizeOfItem.map((sizee,idxsize)=>{
      if (sizee){
        currentSizeSelected = item.sizes[idxsize];
      }
    })
    let newProductOfUser= {
      name: item.name,
      image: mainImage,
      number: numberProduct,
      colorId: currentColorIdSelected,
      color: currentColorSelected,
      size: currentSizeSelected,
      price: item.minPrice
    }
    currentUser.productOfUser.push(newProductOfUser);
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }
  return (
    <>
      <MainMenu/>
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
            <button className={item.colorId[idx]} key={idx} onClick={()=>changeColorSelected(idx)} 
            style={{border: colorOfItem[idx] ? "3px solid black" : ""}}>

            </button>
          ))}
          </div>
          <p>Sizes:</p>
          <div className='btnSize'>
          {item.sizes.map((xxx,idx)=>(
            <button key={idx} onClick={()=>changeSizeSelected(idx)} 
            style={{border: sizeOfItem[idx] ? "3px solid black" : ""}}>{xxx}</button>
          ))}
          </div>
          <p>Quantity:</p>
          <div className='quantity'>
              <button className='btnQuantity'>
              <span className="material-symbols-outlined" onClick={reduceProduct}>remove</span>
              {numberProduct}
              <span className="material-symbols-outlined" onClick={increaseProduct}>add</span>
              </button>
              <button className='btnAddToCart' onClick={()=>addToCart()}>Add to Cart</button>
              <button className='btnLove'>
                <span className="material-symbols-outlined">favorite</span>
              </button>
              <button className='btnBuyNow' >Buy now</button>
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
          <div className='relatedBox'>
          {relateData2.map((xxx)=>(
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