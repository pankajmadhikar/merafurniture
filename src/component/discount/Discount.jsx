import React from "react";
import Dcard from "./Dcard";
import "./DStyle.css";

const Discount = () => {
  return (
    <>
      <section className="background ">
        <div className="container">
          <div className="heading d-flex">
            <div className="heading-left row f_flex">
              <img
                src="https://img.icons8.com/windows/32/fa314a/gift.png"
                alt=""
              />
              <h2>Big Discount</h2>
            </div>
            <div className="heading-right row">
              <span>View all</span>
              <i className="fa fa-caret-right"></i>
            </div>
          </div>
          <Dcard />
        </div>
      </section>
    </>
  );
};

export default Discount;
