import React from "react";
import Sdata from "./SliderData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };
  return (
    <>
      <Slider {...settings}>
        {Sdata.map((e, i) => {
          return (
            <div className="box d-flex top" key={i}>
              <div className="left">
                <h1>{e.title}</h1>
                <p>{e.desc}</p>
                <button className="btn-primary">Visit Collections</button>
              </div>
              <div className="right">
                <img src={e.cover} alt="" />
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default SlideCard;
