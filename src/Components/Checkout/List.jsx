import React from "react";
import { useState } from "react";
import './List.css';

const List = () =>{

    const [num, setNum] = useState(1)

    return(
        <>
            <div className="list_wrapper">
                <div className="product">
                    <img src="./ao.webp" alt="" />
                    <div className="name">
                        <b className="name">Áo Phao Nam Trần Trám</b>
                        <p className="size">Size: L</p>
                    </div>
                </div>
                <div className="price">
                    <p>649.000 đ</p>
                </div>
                <div className="quantity">
                    <div className="button_wrap">
                        <button onClick={() => {setNum(num-1)}}><img src="minus.png" alt="" /></button>
                        <div className="number">{num}</div>
                        <button onClick={() => {setNum(num+1)}}><img src="plus.png" alt="" /></button>
                    </div>
                </div>
                <div className="subtotal">
                    <p>649.000 đ</p>
                </div>
                <div className="cancel">
                    <img src="./bin.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default List