import "./Login.css";
import imageLogin from "../Data/login-image.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const [inputEmailValue, setInputEmailValue] = useState("");
  const [inputPasswordValue, setInputPasswordValue] = useState("");
  const [inputCheckbox, setInputCheckbox] = useState(false);
  let changeEmail = (e) => {
    setInputEmailValue(e.target.value);
  };
  let changePassword = (e) => {
    setInputPasswordValue(e.target.value);
  };
  let changeCheckbox = (e) => {
    setInputCheckbox(e.target.checked);
  };
  const navigate = useNavigate();
  const handClickRegister = () => {
    navigate(`/Register`);
  };
  //Kiểm tra để đăng nhập
  let users = JSON.parse(localStorage.getItem("users")) || [];
  function loginUser() {
    let checkUser = users.some(
      (item) =>
        item.email === inputEmailValue && item.password === inputPasswordValue
    );
    if (checkUser) {
      let currentUser = users.find((user) => user.email === inputEmailValue);
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      navigate(`/`);
    } else {
      alert("Email hoặc password không chính xác");
    }
  }
  return (
    <>
      <div className="loginBox">
        <div className="imageLogin">
          <img src={imageLogin} alt="ss" />
        </div>
        <div className="detailsLoginBox">
          <h1>Well come!</h1>
          <p>Please login here</p>
          <label htmlFor="email">Email Adress</label>
          <input
            type="email"
            value={inputEmailValue}
            onChange={changeEmail}
            className="inputEmail"
            placeholder="Please enter your email"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={inputPasswordValue}
            onChange={changePassword}
            className="inputPassword"
            placeholder="Please enter your password"
          />
          <div className="checkForm">
            <div className="checkcheck">
              <input
                type="checkbox"
                className="checkBox"
                checked={inputCheckbox}
                onChange={changeCheckbox}
              ></input>
              <label htmlFor="checkBox">Remember me</label>
            </div>
            <p href="">Forgot password?</p>
          </div>
          <button className="btnLogin" onClick={loginUser}>
            Login
          </button>
          <p className="registerText">
            Bạn chưa có tài khoản ?{" "}
            <button onClick={handClickRegister}>Đăng ký</button>
          </p>
        </div>
      </div>
    </>
  );
};
export default Login;