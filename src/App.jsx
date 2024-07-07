import { useState } from 'react'
import './App.css'
import logo2 from "./Data/logo2.png"
import Login from './Components/login'
import Register from './Components/Register'
import Forgotpassword from './Components/Forgotpassword'
import Home from './Components/Home'
import ProductProvider from './Components/ProductProvider'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductInfo from './Components/ProductInfo.jsx'
import EnterOTP from './EnterOTP/EnterOTP'

function App() {

  return (
    <>
    <ProductProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:name" element={<ProductInfo />} />
      </Routes>
    </Router>
    </ProductProvider>
    </>
  )
}
1
export default App
