import React, { useState } from "react";
import "./Register.css";

// import { toast } from "react-toastify";
// import {
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import { auth } from "./firebase-config";
// import { useDispatch } from "react-redux";

const Register2 = ({ setOpenRegister }) => {
  const [pageView, setPageView] = useState(true);

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // const register = async () => {
  //   try {
  //     const user = await createUserWithEmailAndPassword(
  //       auth,
  //       registerEmail,
  //       registerPassword
  //     );
  //     setOpenRegister(false);
  //     console.log(user);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // const login = async () => {
  //   try {
  //     const user = await signInWithEmailAndPassword(
  //       auth,
  //       loginEmail,
  //       loginPassword
  //     );
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  return (
    <>
      {pageView ? (
        <div className="formContainer">
          <i
            className="fa-sharp fa-regular fa-circle-xmark signup-cross-icon"
            onClick={() => setOpenRegister(false)}
          ></i>
          <div className="formWrapper">
            <div className="formWrapper2">
              <input
                type="text"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                placeholder="Email"
                name="email"
                id=""
              />
              <input
                type="password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                placeholder="Password"
                name="password"
                id=""
              />
              <button>Sign Up</button>

              <h3>
                Already have account?{" "}
                <span onClick={() => setPageView(false)}> Sign In </span>{" "}
              </h3>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="formContainer">
            <i
              className="fa-sharp fa-regular fa-circle-xmark signup-cross-icon"
              onClick={() => setOpenRegister(false)}
            ></i>
            <div className="formWrapper">
              <div className="formWrapper2">
                <input
                  type="text"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="Email"
                  name="email"
                  id=""
                />
                <input
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="Password"
                  name="password"
                  id=""
                />
                <button>Sign In</button>

                <h3>
                  Do not have account?{" "}
                  <span onClick={() => setPageView(false)}> Sign Up </span>{" "}
                </h3>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Register2;
