import React, {useState} from "react";
import './Payment.css'
import MainMenu from "../Components/Mainmenu";
import Footer from "../Components/Footer";
import Chart from "../Components/Ship_addr/Chart";
import Cashier from "../Components/Cashier/Cashier";
import Form from "../Components/Payment/Form";


const Payment = ()=>{

    const [payment, setPayment] = useState([])
    
    const checked = {
        debit: true,
        cash: false,
    }

    const [check, setCheck] = useState(checked)
    
    //Thêm thẻ payment
    const handlePayment = (data)=>{
        const newPay = [...payment]
        newPay.push(data)
        setPayment(newPay)
    }
    console.log(payment)

    return(
    <>
        <MainMenu></MainMenu>
        <div className="payment">
            <div className="content">
                <h2>Payment Method</h2>
                <Chart></Chart>
                <div className="debit">
                    <label className="label">Debit/Credit Card</label>
                    <Form handlePayment={handlePayment}></Form>
                </div>
            </div>
            <Cashier></Cashier>
        </div>
        <Footer></Footer>
    </>
    )
}

export default Payment