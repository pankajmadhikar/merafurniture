import React from "react";
import Catg from "./Catg";

const Shop = () => {
  return (
    <>
      <section className="shop background">
        <div className="container d-flex">
          <Catg />

          <div className="contentWidth">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
