import React, { useState } from "react";
import Tdata from "./Tdata";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";

const TopCart = () => {
  const [sliderShownItem, setSliderShownItem] = useState(4);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: sliderShownItem,
    slidesToScroll: 1,
    autoplay: true,
  };

  const handler768 = (e) => setSliderShownItem(2);
  const handler900 = (e) => setSliderShownItem(3);
  const handler500 = (e) => setSliderShownItem(1);
  const handler1000 = (e) => setSliderShownItem(4);
  window
    .matchMedia("(min-width: 768px)")
    .addEventListener("change", handler768);
  window
    .matchMedia("(min-width: 900px)")
    .addEventListener("change", handler900);
  window
    .matchMedia("(min-width: 500px)")
    .addEventListener("change", handler500);
  window
    .matchMedia("(min-width: 1000px)")
    .addEventListener("change", handler1000);

  return (
    <>
      <div>
        <Slider {...settings}>
          {Tdata.map((value, index) => {
            return (
              <div className="top-box product" key={index}>
                <span className="discount" style={{ background: "#0f3460" }}>
                  Best Seller
                </span>
                <div className="img">
                  <img src={value.cover} alt="" />
                </div>
                <div className="top-cart-content">
                  <div className="nametop">
                    <p className="tleft">{value.para}</p>
                    <p className="tright">{value.desc}</p>
                  </div>
                  <div className="top-price d-flex">
                    <p>
                      <b style={{ paddingRight: "5px" }}>₹{value.price}</b>{" "}
                      <del style={{ fontWeight: "300", color: "#888" }}>
                        ₹{value.price + 500}
                      </del>{" "}
                    </p>
                    <p style={{ color: "#e94560" }}>{value.offer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default TopCart;
