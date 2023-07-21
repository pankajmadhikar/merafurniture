import React, { useState } from "react";
import Ddata from "./Ddata";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";

const Dcard = () => {
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
      <Slider {...settings}>
        {Ddata.map((value, index) => {
          return (
            <div className="box product d-card" key={index}>
              <div className="img">
                <img
                  src={value.catImg}
                  alt=""
                  style={{
                    width: "250px",
                    height: "280px",
                  }}
                />
              </div>
              <h4>{value.catName}</h4>
              <h4>{value.price}</h4>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default Dcard;
