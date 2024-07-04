import React from "react";
import './LoginPop.css'

const LoginPop = (props) =>{
    return (
        <>
        <div className="popup">
            <div className="content">
                <img src="./checked.png" alt="" />
                <h4>Password Changed Successfully</h4>
                <p>Your password has been updated successfully</p>
                <button onClick={props.onClose}>Click to login</button>
            </div>
        </div>
        </>
    )
}

export default LoginPop