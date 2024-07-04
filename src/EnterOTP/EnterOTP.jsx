import React, { useState } from "react";
import App from "../App";
import './EnterOTP.css'
import LoginPop from "../Components/LoginPopup/LoginPop";

const [crr, setCrr] = useState(null)
let showPopup = null
if (crr){
    showPopup = <LoginPop onClose={()=> {setCrr(null)}}/>
    console.log(crr)
}

const EnterOTP = () =>{
    return(
        <>
        <div className="OTP_page">
            <img src="/EnterOTP.png" alt="" />
            <div className="content">
                <div className="wrapper">
                    <div className="back">
                        <img src="./left-chevron.png" alt="" />
                        <p>Back</p>
                    </div>
                    <h3>Enter OTP</h3>
                    <p>We have share a code of your registered email address robertfox@example.com</p>
                    <div className="otp">
                        <div>3</div>
                        <div>1</div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <button onClick={setCrr(true)}>Verify</button>
                </div>
            </div>
        </div>
        {showPopup}
        </>
    )
}

export default EnterOTP