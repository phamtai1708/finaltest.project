import { useState, useEffect, useContext } from 'react'
import { ProductContext } from '../Components/ProductProvider.jsx';
import MainMenu from '../Components/Mainmenu.jsx';
import Footer from '../Components/Footer.jsx';
import Card from '../Components/Card.jsx';
import ServiceBox from '../Components/ServiceBox.jsx';
import ProductInfo from '../ProductInfo/ProductInfo.jsx';
import './Home.css'
import logo2 from "../Data/logo2.png"
import slide1 from "../Data/slide_1_img.jpg"
import slide3 from "../Data/slide_3_img.jpg"
import slide4 from "../Data/slide_4_img.jpg"
import polonam from "../Data/polonam.jpg"
import vaynu from "../Data/vaynu.jpg"
import treem from "../Data/treem.jpg"
import phukien from "../Data/phukien.jpg"
function Home() {
  // ---------------------Slide
    const [index, setIndex] = useState(0);
    const slides = [slide1, slide3, slide4];
    useEffect(() => {
        const slideShow = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 50000); // Thay đổi ảnh mỗi 1 giây

        return () => clearInterval(slideShow);
    }, [slides.length]);
// Use Context hiện thị sản phẩm

  const products = useContext(ProductContext);
  const topProducts = [...products].sort((a, b) => b.volume - a.volume).slice(0, 8);
  return (
    <>
      <MainMenu/>
      <div className='slideImage' >
        <img src={slides[index]} alt="" />
      </div>
      < div className='categoriesBox'>
        
        <h1>Shop by Categories</h1>
        <div className='categoriesImg'>
            <div>
                <img src={polonam} alt="" />
                <p>Men clothes</p>
            </div>
            <div>
                <img src={vaynu} alt="" />
                <p>Women clothes</p>
            </div>
            <div>
                <img src={treem} alt="" />
                <p>Kids clothes</p>
            </div>
            <div>
                <img src={phukien} alt="" />
                <p>Accessories</p>
            </div>
        </div>
      </div>
      <div className='bestSeller'>
          <h1>Best-selling Product</h1>
          <div className='bestProductBox'>
          {topProducts.map((item)=>(
            <Card item={item} key={item.id}  />))
          }
          </div>
      </div>
      <ServiceBox/>
      <Footer/>
    </>
  )
}
export default Home;
