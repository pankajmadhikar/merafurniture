// import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
// import { auth } from "../registeration/firebase-config";
import "./UserAccount.css";
// import { toast } from "react-toastify";

const UserAccount = () => {
  // const [user, setUser] = useState({});

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });

  // const logOut = async () => {
  //   try {
  //     await signOut(auth);
  //     toast.success("Logout successfully", {
  //       position: toast.POSITION.TOP_CENTER,
  //     });
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  return (
    <>
      <div className="user-account-main">
        <div className="user-account-main-child">
          {/* <h1> {user.email === null ? " " : user.email} </h1> */}
          <button>Logout</button>
        </div>
      </div>
    </>
  );
};

export default UserAccount;
