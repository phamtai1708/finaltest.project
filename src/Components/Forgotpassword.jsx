import "./Forgotpassword.css"
import imageForgot from "../Data/forgotpassword.png"
import { useState } from "react";
const Forgotpassword = () => {
    const [emailForgot,setEmailForgot] = useState("");
    let changeEmailForgot = (e) => {
        setEmailForgot(e.target.value)
    }

    return (
        <>
        <div className="forgotPage">
            <div className="imageForgot">
                <img src={imageForgot} alt="" />
            </div>
            <div className="forgotBox">
                <button className="btnBack">
                    <span class="material-symbols-outlined">arrow_back_ios</span>
                    Back
                </button>
                <div className="forgotText">
                    <p className="p1">Forgot Password</p>
                    <p className="p2">Enter your registered email address. we’ll send you a code to reset your password.</p>
                </div>
                <div className="forgotDetails">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" placeholder="Example: phamtai.tind46@gmail.com" value={emailForgot} onChange={changeEmailForgot} />
                    <button>
                        Send OTP
                    </button>
                </div>
            </div>

        </div>
        
        </>
    );
};
export default Forgotpassword;