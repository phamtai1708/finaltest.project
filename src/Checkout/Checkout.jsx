import React from "react";
import MainMenu from "../Components/Mainmenu";
import Footer from "../Components/Footer";
import './Checkout.css'
import List from "../Components/Checkout/List";
import Cashier from "../Components/Cashier/Cashier";
import { useContext } from "react";
import { ProductContext } from "../Components/ProductProvider";

const Checkout = () =>{

    // const products = useContext(ProductContext)
    // console.log(products)
    return(
        <>
        <MainMenu></MainMenu>
        <div className="Checkout_content">
            <h2>Checkout</h2>
            <div className="wrapper">
                <div className="checkout_list">
                    <div className="headline">
                        <p>Products</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Subtotal</p>
                    </div>
                    <List />
                </div>
                <div className="cashier_wrap">
                    <Cashier></Cashier>
                    <button>Proceed to checkout</button>
                </div>
                
            </div>
        </div>
        <Footer></Footer>
        </>
    )
}

export default Checkout