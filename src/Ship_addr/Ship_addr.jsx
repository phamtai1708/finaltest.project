import React, { createContext, useState } from "react";
import MainMenu from "../Components/Mainmenu";
import Footer from "../Components/Footer";
import './Ship_addr.css'
import Cashier from "../Components/Cashier/Cashier";
import Chart from "../Components/Ship_addr/Chart";
import Tag from "../Components/Ship_addr/Tag";
import Form from "../Components/Ship_addr/Form";
import { Link } from "react-router-dom";

const Ship_addr = () =>{

    const [address, setAddress] = useState([])

     
    //Xóa thẻ Address
    const handleDelete = (e) => {
        const name = e.currentTarget.name
        const mobile = e.currentTarget.value
        const index = address.findIndex((add) => add.Name == name && add.Mobile == mobile)
        let deleteAdd = address.splice(index, 1)
        const newAdd = address.filter((add) => add != deleteAdd)
        setAddress(newAdd)
    } 
    
    //Thêm thẻ Address
    const handleAddress = (data)=>{
        const newAdd = [...address]
        newAdd.push(data)
        setAddress(newAdd)
    }
    console.log(address)
    
    return(
        <>
        <MainMenu></MainMenu>
        <div className="shipPage">
            <div className="content">
                <h2>Shipping Address</h2>
                <Chart></Chart>
                <h3>Select a delivery address</h3>
                <p>Is the address you'd like to use displayed below? If so, click the corresponding "Deliver to this address" button. Or you can enter a new delivery address</p>
                <div className="cardHolder">
                    {address.map((add) =>{
                    return <Tag address={add} handleDelete={handleDelete}></Tag> 
                })}
                </div>
                <button className="deli"><Link to='/Payment'>Deliver Here</Link></button>
                <hr />
                <h3>Add a new address</h3>
                <Form handleAddress={handleAddress}></Form>
            </div>
            <Cashier></Cashier>
        </div>
        <Footer></Footer>
        </>
    )
}

export default Ship_addr