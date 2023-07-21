import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  removeIndividual,
} from "../../redux/actions/addToCart";
import "./CartStyle.css";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Cart = () => {
  const { carts } = useSelector((state) => state.cartreducer);
  console.log(carts, "cartData");

  const dispatch = useDispatch();

  const sendQty = (e) => {
    dispatch(addToCart(e));
  };
  const removeOne = (item) => {
    dispatch(removeIndividual(item));
  };
  const dlt = (id) => {
    dispatch(removeFromCart(id));
    toast.error("Product Remove from Your Cart", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const totalPrice = carts.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  return (
    <>
      <section className="cart-items">
        <div className="container details-parent ">
          <div className="card-details">
            {carts.length === 0 && (
              <h1 className="no-items product">No Items are add in a cart </h1>
            )}

            {carts.map((item, i) => {
              const productQty = item.price * item.qty;
              return (
                <div className="cart-list product " key={i}>
                  <div className="img">
                    <img src={item.cover} alt="" />
                  </div>
                  <div className="cart-details">
                    <h3>{item.name}</h3>
                    <h4>
                      {item.price}.00 * {item.qty}
                      <span>₹{productQty}.00</span>
                    </h4>
                  </div>
                  <div className="cart-items-function">
                    <div className="removeCart">
                      <button onClick={() => dlt(item.id)}>
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </div>

                    <div className="cartControl d-flex">
                      <button className="incCart" onClick={() => sendQty(item)}>
                        <i className="fa fa-plus"></i>
                      </button>
                      <button
                        className="decCart"
                        onClick={
                          item.qty <= 1
                            ? () => dlt(item.id)
                            : () => removeOne(item)
                        }
                      >
                        <i className="fa fa-minus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart-total product">
            <h2>Cart Summery</h2>
            <div className="d-flex">
              <h4>Total Price : </h4>
              <h3>₹{totalPrice}.00</h3>
            </div>
            <Link to={"/checkout"}>
              <div className="checkout-btn-div">Checkout</div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
