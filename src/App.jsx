import { useState } from 'react'
import './App.css'
import logo2 from "./Data/logo2.png"
import Login from './Components/login'
import Register from './Components/Register'
import Forgotpassword from './Components/Forgotpassword'
import Home from './Components/Home'
import EnterOTP from './EnterOTP/EnterOTP'

function App() {
  const aoPhongNam = [
    {}
  ]
  const [count, setCount] = useState(0)

  return (
    <>
      <Home></Home>
      <EnterOTP></EnterOTP>
    </>
  )
}
1
export default App
