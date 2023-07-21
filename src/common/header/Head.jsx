import React from "react";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d-flex">
          <div className="left row">
            <i className="fa fa-phone"></i>
            <label>+91 9156110710</label>
            <i className="fa fa-envelope"></i>
            <label>digiarch@gmail.com </label>
          </div>
          <div className="right row Rtext">
            <label>Theme FAQ's</label>
            <label>Need Helps</label>
            <span>-</span>
            <label>IN</label>
            <span>-</span>
            {/* <label htmlFor="">Rupees</label> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
