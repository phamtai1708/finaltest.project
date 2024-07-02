import "./login.css"
import imageLogin from "../Data/login-image.png"
import { useState } from "react";
const Login = () => {
    const [inputEmailValue, setInputEmailValue] = useState("")
    const [inputPasswordValue, setInputPasswordValue] = useState("")
    const [inputCheckbox, setInputCheckbox] = useState(false);
    let changeEmail = (e) => {
        setInputEmailValue(e.target.value)
    }
    let changePassword = (e) => {
        setInputPasswordValue(e.target.value)
    }
    let changeCheckbox = (e) => {
        setInputCheckbox(e.target.checked)
    }
    return (
    <>
    <div className="loginBox">
        <div className="imageLogin">
            <img src= {imageLogin} alt="ss" />
        </div>
        <div className="detailsLoginBox">
            <h1>Well come!</h1>
            <p>Please login here</p>
            <label htmlFor="email">Email Adress</label>
            <input type="email" value={inputEmailValue} onChange={changeEmail} className="inputEmail" placeholder="Please enter your email" />
            <label htmlFor="password">Password</label>
            <input type="password" value={inputPasswordValue} onChange={changePassword} className="inputPassword" placeholder="Please enter your password" />
            <div className="checkForm">
                <div className="checkcheck">
                    <input type="checkbox" className="checkBox" checked={inputCheckbox} onChange={changeCheckbox}></input>
                    <label htmlFor="checkBox">Remember me</label>
                </div>
                <p href="">Forgot password?</p>
            </div>
            <button className="btnLogin">Login</button>
            <p className="registerText">Bạn chưa có tài khoản ? <a>Đăng ký</a></p>
        </div>
    </div>
    </>
    );
};
export default Login;