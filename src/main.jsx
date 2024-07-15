import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductProvider from './Components/ProductProvider.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EnterOTP from './EnterOTP/EnterOTP.jsx'
import Home from './Components/Home.jsx'
import Checkout from './Checkout/Checkout.jsx'
import ProductInfo from './Components/ProductInfo.jsx'
import Ship_addr from './Ship_addr/Ship_addr.jsx'
import ScrollToTop from './Components/ScrollToTop.jsx'
import Login from './Components/Login.jsx'
import Register from './Components/Register.jsx'
import Search from './Components/Search.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductProvider>
  <BrowserRouter>
  <ScrollToTop />
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/Search' element={<Search/>} />
    <Route path='/Login' element={< Login/>} />
    <Route path='/Register' element={< Register/>} />
    <Route path='/EnterOTP' element={< EnterOTP/>} />
    <Route path='/Checkout' element={<Checkout />}/>
    <Route path='/Shipping_address' element={< Ship_addr />} />
    <Route path="/product/:name" element={<ProductInfo />} />
  </Routes>
  </BrowserRouter>
  </ProductProvider>
)
