import React from "react";
import './Summary.css'
import Mainmenu from "../Components/Mainmenu"
import Footer from "../Components/Footer";
import Cashier from "../Components/Cashier/Cashier";
import Chart from "../Components/Ship_addr/Chart";
import Info from "../Components/Order_summary/Info";




const Summary = ()=>{

    let today = new Date();
    let dd = String(today.getDate() + 2).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); 
    let yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;

    return(<>
        <Mainmenu></Mainmenu>
        <div className="summary">
            <div className="content">
                <h2>Review Your Order</h2>
                <Chart></Chart>
                <h3>Estimated delivery: {today}</h3>
                <h3>Shipping Address</h3>
                <Info above='MindX' below='Tầng 2, Tòa 29T1 Hoàng Đạo Thúy, Phường Trung Hoà, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam'></Info>
                <Info above='Payment Method' below='Debit Card (7823541290684513)'></Info>
            </div>
            <Cashier></Cashier>
        </div>
        <Footer></Footer>
    </>)
}

export default Summary