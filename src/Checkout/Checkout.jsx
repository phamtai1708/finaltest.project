import React from "react";
import MainMenu from "../Components/Mainmenu";
import Footer from "../Components/Footer";
import './Checkout.css'
import List from "../Components/Checkout/List";
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
                <div className="cashier">
                    <div className="subtotal">
                        <h2>Subtotal</h2>
                        <h2>$200.00</h2>
                    </div>
                    <hr />
                    <div className="discount">
                        <p>Enter Discount Code</p>
                        <div className="code">
                            <input type="text" />
                            <button>Apply</button>
                        </div>
                        <div className="delivery">
                            <p>Delivery Charge</p>
                            <p>$5.00</p>
                        </div>
                    </div>
                    <hr />
                    <div className="total">
                        <h2>Grand Total</h2>
                        <h2>$205.00</h2>
                    </div>
                    <button>Proceed to checkout</button>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    )
}

export default Checkout