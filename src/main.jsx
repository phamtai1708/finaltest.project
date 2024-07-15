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



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/EnterOTP' element={< EnterOTP/>} />
    <Route path='/Checkout' element={<Checkout />}/>
    <Route path='/Shipping_address' element={< Ship_addr />} />
    <Route path="/product/:name" element={<ProductInfo />} />
  </Routes>
  </BrowserRouter>
)
