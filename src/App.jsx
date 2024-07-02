import { useState } from 'react'
import './App.css'
import logo2 from "./Data/logo2.png"
import Login from './Components/login'
import Register from './Components/Register'
import Forgotpassword from './Components/Forgotpassword'
import Home from './Components/Home'

function App() {
  const aoPhongNam = [
    {}
  ]
  const [count, setCount] = useState(0)

  return (
    <>
      <Home></Home>
    </>
  )
}
1
export default App
