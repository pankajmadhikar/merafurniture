import React from "react";
import "./Checkout.css";
import { TextField } from "@mui/material";

const CheckOut = () => {
  return (
    <>
      <div className="checkout-main">
        <div className="checkout-main-child">
          <input type="text" placeholder="Pincode" name="" id="" />
          <input type="text" placeholder="City" name="" id="" />
          <input type="text" placeholder="State" name="" id="" />
          <input type="text" placeholder="Floor Number" name="" id="" />
          <input type="text" placeholder="Complete Address" name="" id="" />
          <input type="text" placeholder="Landmark" name="" id="" />
          <input
            type="text"
            placeholder="Save Address as (optional)"
            name=""
            id=""
          />
          <button>Save Address</button>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
