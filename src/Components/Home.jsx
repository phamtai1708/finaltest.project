import { useState, useEffect } from 'react'
import MainMenu from './Mainmenu'
import Footer from './Footer'
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
    const [index, setIndex] = useState(0);
    const slides = [slide1, slide3, slide4];
    useEffect(() => {
        const slideShow = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 5000); // Thay đổi ảnh mỗi 1 giây

        return () => clearInterval(slideShow);
    }, 3);
  return (
    <>
      <MainMenu/>
      <div className='slideImage' >
        <img src={slides[index]} alt="" />
        {/* <img src={slide3} alt="" />
        <img src={slide4} alt="" /> */}
        {/* <button className='btnNext'>
            <span class="material-symbols-outlined">arrow_forward_ios</span>
        </button>
        <button className='btnBack'>
            <span class="material-symbols-outlined">arrow_back_ios</span>
        </button> */}
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

      </div>
      <Footer/>
    </>
  )
}
1
export default Home;
