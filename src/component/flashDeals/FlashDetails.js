import React, { useEffect, useState } from "react";
// import "./ProductDetails.css";
import "../cartdetails/ProductDetails.css";
import { useDispatch, useSelector } from "react-redux";
// import DetailsImage from "../helper/DetailsImage";
import { NavLink, useParams } from "react-router-dom";
import DetailsImage from "../cartdetails/DetailsImage";
import Data from "./Data";
import FlashImages from "./FlashImages";

const FlashDetails = (props) => {
  const [qty, setQty] = useState(1);
  const { id } = useParams();
  const [product, setProduct] = useState({});

  //   const dispatch = useDispatch();
  //   const productDetails = useSelector((state) => state.productDetails);
  //   const { loading, error, product } = productDetails;

  useEffect(() => {
    const arrivalDetail = Data.productItems.find((e) => {
      return e.id === +id;
    });
    setProduct(arrivalDetail);
  }, [id]);

  console.log("product", product);
  console.log("id", +id);

  const deliveryMainDiv = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "30px",
  };
  const deliveryChildDiv = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  };
  const iconP = {
    fontSize: "20px",
    backgroundColor: "#999",
    padding: "3px 7px",
    borderRadius: "50px",
  };
  const textP = {
    marginTop: "13px",
  };

  const addToCartHandler = () => {
    // history.pop(`/cart/${id}?qty=${qty}`);
    // console.log("history", history);
  };

  const {
    cover,
    name,
    para,
    price,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
  } = product;

  return (
    <>
      {product === null ? (
        <h1>Product Details</h1>
      ) : (
        <div className="container detail_main mt-3">
          <div className="main_image_box">
            <FlashImages
              image={cover}
              image1={image1}
              image2={image2}
              image3={image3}
              image4={image4}
              image5={image5}
              image6={image6}
            />
            {/* <img src={image} alt="" style={{ width: "100%", height: "60%" }} /> */}
          </div>
          <div className="detail_content">
            <p style={{ fontSize: "20px" }}>{/* <b>{category}</b> */}</p>
            <p>{name}</p>
            <p>
              {/* <span
                style={{
                  background: "goldenrod",
                  color: "black",
                  padding: "2px 6px",
                  borderRadius: "5px",
                }}>
                ★
              </span> */}
              <div className="rate">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </p>

            <div>
              <p style={{ fontSize: "30px", marginBottom: "-3px" }}>
                $ {price}
              </p>
              <p>
                Price : ₹<del>{price}</del>
              </p>
              <p>Inclusive of all taxes</p>
            </div>
            <hr />
            <div>
              <p style={{ marginBottom: "-3px" }}>
                <b>Offers</b>
              </p>
              <p>Save extra with No Cost EMI, Bank Offer etc. </p>
            </div>
            <hr />

            <p style={{ fontSize: "20px" }}>
              Brand : <b style={{ color: "#e94560" }}>DigiArch</b>
            </p>
            {/* {countInStock > 0 ? (
          <p style={{ color: "green" }}>
            <b>In Stock</b>
          </p>
        ) : (
          <p style={{ color: "red" }}>
            <b>Not Available In Stock</b>
          </p>
        )} */}

            <hr />
            <p>{para}</p>

            {/* {countInStock > 0 && (
          <ListGroupItem>
            <Row>
              <Col>
                <strong>Quantity</strong>
              </Col>
              <Form.Control
                as="select"
                value={qty}
                onChange={(e) => setQty(e.target.value)}>
                {[...Array(countInStock).keys()].map((x) => {
                  return (
                    <option value={x + 1} key={x + 1}>
                      {x + 1}
                    </option>
                  );
                })}
              </Form.Control>
            </Row>
          </ListGroupItem>
        )} */}

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "20px",
              }}>
              <div style={{ width: "100%" }}>
                <button
                  type="button"
                  className="btn btn-primary "
                  style={{
                    borderRadius: "50px",
                    width: "100%",
                    fontWeight: "600",
                    background: "#e94560",
                    cursor: "pointer",
                  }}
                  // onClick={addToCartHandler}
                >
                  Add to Cart
                </button>
              </div>
              <button
                type="button"
                className="btn"
                style={{
                  backgroundColor: "#0bc75f",
                  // color: "",
                  borderRadius: "50px",
                  width: "100%",
                  fontWeight: "600",
                  marginTop: "20px",
                  padding: "13px",
                  cursor: "pointer",
                }}>
                Buy Now
              </button>
            </div>

            <div style={deliveryMainDiv}>
              <div style={deliveryChildDiv}>
                <p style={iconP}>
                  <i className="fa-solid fa-truck"></i>
                </p>
                <p style={textP}>Free Delivery</p>
              </div>
              <div style={deliveryChildDiv}>
                <p style={iconP}>
                  <i className="fa-sharp fa-solid fa-recycle"></i>
                </p>
                <p style={textP}>20 Days Reaplacement</p>
              </div>
              <div style={deliveryChildDiv}>
                <p style={iconP}>
                  <i className="fa-solid fa-shield-halved"></i>
                </p>
                <p style={textP}>2 Years Warrenty</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FlashDetails;
