import React from "react";
import "./Register.css";
import Google from "../../assets/GoogleSymbol.png";
import Email from "../../assets/emailSymbol.png";

const Register = () => {
  return (
    <>
      <div className="formContainer">
        <i className="fa-sharp fa-regular fa-circle-xmark signup-cross-icon"></i>
        <div className="formWrapper">
          <span>Login / Signup</span>
          <form>
            <div className="number-inp-box">
              <div className="number-inp-box-code">
                <p>+91</p>
              </div>
              <input
                type="text"
                className="number-inp-box-num"
                placeholder="Enter Mo No"
                name=""
                id=""
              />
            </div>
            <div className="sign-up-btn">Get OTP</div>
            <div className="via-checkbox">
              <input type="checkbox" name="" id="" className="register-check" />
              <p>Get OTP via WhatsApp</p>
            </div>
          </form>
          <div className="google-email-button-box">
            <div className="google-login-box">
              <img src={Google} alt="" />
              <p>Google</p>
            </div>
            <div className="email-login-box">
              <img src={Email} alt="" />
              <p>Email</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
