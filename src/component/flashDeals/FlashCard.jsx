import React, { useState } from "react";
import Data from "./Data";
import Slider from "react-slick";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/addToCart";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  );
};

const FlashCard = () => {
  const [count, setCount] = useState(0);
  const [sliderShownItem, setSliderShownItem] = useState(4);

  const increment = () => {
    setCount(count + 1);
  };

  const dispatch = useDispatch();

  const send = (e) => {
    dispatch(addToCart({ ...e, qty: 1 }));
    toast.success("Product Add In Your Cart", {
      position: toast.POSITION.TOP_CENTER,
    });
    // console.log(e, "add");
  };

  const { productItems } = Data;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: sliderShownItem,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const handler768 = (e) => setSliderShownItem(2);
  const handler900 = (e) => setSliderShownItem(3);
  const handler500 = (e) => setSliderShownItem(1);
  const handler1000 = (e) => setSliderShownItem(4);
  window
    .matchMedia("(max-width: 768px)")
    .addEventListener("change", handler768);
  window
    .matchMedia("(max-width: 900px)")
    .addEventListener("change", handler900);
  window
    .matchMedia("(max-width: 500px)")
    .addEventListener("change", handler500);
  window
    .matchMedia("(max-width: 1000px)")
    .addEventListener("change", handler1000);

  return (
    <>
      <Slider {...settings}>
        {productItems.map((e, i) => {
          return (
            <div className="box" key={i}>
              <div className="product mtop">
                <NavLink to={`/flashdetails/${e.id}`}>
                  <div className="img">
                    <span className="discount">{e.discount}% Off</span>
                    <img
                      src={e.cover}
                      alt=""
                      style={{ height: "150px", width: "250px" }}
                    />
                    <div className="product-like">
                      <label>0</label>
                      <br />
                      <i
                        className="fa-regular fa-heart "
                        onClick={increment}
                      ></i>
                    </div>
                  </div>
                </NavLink>
                <div className="product-details">
                  <h3>{e.name}</h3>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="price">
                    <h4></h4>
                    <button onClick={() => send(e)}>
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default FlashCard;
