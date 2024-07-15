import React from "react";
import './Cashier.css'


const Cashier = () =>{
    return(
        <>
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
            </div>
        </>
    )
}

export default Cashier