import React from "react";
import "./Wrapper.css";

const Wrapper = () => {
  const data = [
    {
      cover: <i className="fa-solid fa-truck-fast"></i>,
      title: "Worldwide Delivery",
      decs:
        "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i className="fa-solid fa-id-card"></i>,
      title: "Safe Payment",
      decs:
        "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i className="fa-solid fa-shield"></i>,
      title: "Shop With Confidence ",
      decs:
        "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i className="fa-solid fa-headset"></i>,
      title: "24/7 Support ",
      decs:
        "We offer competitive prices on our 100 million plus product any range.",
    },
  ];
  return (
    <>
      <section className="wrapper background">
        <div className="container wrapper-box ">
          {data.map((val, i) => {
            return (
              <>
                <div className="product w-cart" key={i}>
                  <div className="img icon-circle">
                    <i>{val.cover}</i>
                  </div>
                  <h3>{val.title}</h3>
                  <p>{val.decs}</p>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Wrapper;
