import React from "react";
import './Payment.css'
import MainMenu from "../Components/Mainmenu";
import Footer from "../Components/Footer";
import Chart from "../Components/Ship_addr/Chart";
import Cashier from "../Components/Cashier/Cashier";
import Form from "../Components/Payment/Form";


const Payment = ()=>{
    return(
    <>
        <MainMenu></MainMenu>
        <div className="payment">
            <div className="content">
                <h2>Payment Method</h2>
                <Chart></Chart>
                <h3>Select a payment method</h3>
                <div className="debit">
                    <input type="radio" name="debit" id="" className="dCard" />
                    <label htmlFor="debit">Debit/Credit Card</label>
                    <Form></Form>
                </div>
            </div>
            <Cashier></Cashier>
        </div>
        <Footer></Footer>
    </>
    )
}

export default Payment