import React, { useState } from "react";
import Slider from "react-slick";
import Ndata from "./NewArrivalData";
import { NavLink } from "react-router-dom";

const CartNewArrivals = () => {
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
          {Ndata.map((value, index) => {
            return (
              <div className="arrival-box" key={index}>
                <div className="img">
                  <NavLink to={`/cartdetails/${value.id}`}>
                    <img src={value.cover} alt="" />
                  </NavLink>
                </div>
                <div className="arrival-cart-content">
                  <div className="arrival-nametop">
                    <p className="tleft">{value.para}</p>
                    {/* <p className="tright">{value.desc}</p> */}
                  </div>
                  <p style={{ color: "#e94560" }}>{value.offer}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default CartNewArrivals;
