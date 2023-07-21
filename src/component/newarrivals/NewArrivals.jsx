import React from "react";
import "./NewArrivalsStyle.css";
import CartNewArrivals from "./CartNewArrivals";

const NewArrivals = () => {
  return (
    <>
      <section className="newarrivals background">
        <div className="container">
          <div className="heading d-flex">
            <div className="heading-left row f_flex">
              <i className="fa fa-border-all"></i>
              <h2>New Arrivals</h2>
            </div>
            <div className="heading-right row">
              <span>View all</span>
              <i className="fa fa-caret-right"></i>
            </div>
          </div>
          <CartNewArrivals />
        </div>
      </section>
    </>
  );
};

export default NewArrivals;
