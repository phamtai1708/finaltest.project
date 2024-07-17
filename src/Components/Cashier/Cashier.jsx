import React  from "react";
import './Cashier.css'
import { useState } from "react";

const Cashier = () =>{

    const [input, setInput] = useState('')
    const [total, setTotal] = useState('$205')

    const handleChange = (e)=>{
        setInput(e.target.value)
    }

    const handleClick = ()=>{
        if(input){
            setTotal('S195')
        }
    }

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
                            <input type="text" onChange={handleChange}/>
                            <button onClick={handleClick}>Apply</button>
                        </div>
                        <div className="delivery">
                            <p>Delivery Charge</p>
                            <p>$5.00</p>
                        </div>
                    </div>
                    <hr />
                    <div className="total">
                        <h2>Grand Total</h2>
                        <h2>{total}</h2>
                    </div>
            </div>
        </>
    )
}

export default Cashier