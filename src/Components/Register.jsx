import "./Register.css"
import imageRegister from "../Data/register-image.png"
import { useState } from "react";
const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailRegister, setEmailRegister] = useState("");
    const [passwordRegister, setPasswordRegister] = useState("");
    const [checkTerm, setCheckTerm] = useState(false);
    let changeFirstName = (e) => {
        setFirstName(e.target.value)
    }
    let changeLastName = (e) => {
        setLastName(e.target.value)
    }
    let changeEmailRegister = (e) => {
        setEmailRegister(e.target.value)
    }
    let changePasswordRegister = (e) => {
        setPasswordRegister(e.target.checked)
    }
    let changeCheckTerm = (e) => {
        setCheckTerm(e.target.checked)
    }

    return (
        <>
        <div className="registerPage">
        <div className="imageRegister">
            <img src={imageRegister} alt="" />
        </div>
        <div className="registerBox">
            <div className="createNewAcc">
                <p className="p1">Create New Account</p>
                <p className="p2">Please enter details</p>
            </div>
            <div className="newAccDetails">
                <div className="listDetails">
                    <div className="listInfo">
                        <label htmlFor="FirstName">First Name</label>
                        <input type="text" placeholder="Example: Ú" value={firstName} onChange={changeFirstName} />
                        <label htmlFor="LastName">Last Name</label>
                        <input type="text" placeholder="Example: Phạm" value={lastName} onChange={changeLastName} />
                        <label htmlFor="email">Email Address</label>
                        <input type="email" placeholder="Example: phamtai.tind46@gmail.com" value={emailRegister} onChange={changeEmailRegister} />
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Vui lòng nhập mật khẩu bạn muốn sử dụng" value={passwordRegister} onChange={changePasswordRegister} />
                    </div>
                    <div className="termBox">
                        <input type="checkbox" checked = {checkTerm} onChange={changeCheckTerm}/>
                        <label htmlFor="checkbox">I agree to the <a href="">Terms & Conditions</a></label>
                    </div>
                </div>
                <button>Signup</button>

            </div>

        </div>
        </div>
        </>
    );
};
export default Register;