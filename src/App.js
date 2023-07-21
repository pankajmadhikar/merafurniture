import React, { useState } from "react";
import "./App.css";
import Header from "./common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pages from "./pages/Pages";
import Cart from "./common/cart/Cart";
import store from "./redux/store";
import { Provider } from "react-redux";
import ProductDetails from "./component/cartdetails/ProductDetails";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./component/footer/Footer";
import FlashDetails from "./component/flashDeals/FlashDetails";
import ContactUs from "./component/contactus/ContactUs";
import Help from "./component/help/Help";
import CheckOut from "./component/checkout/CheckOut";
import UserAccount from "./component/account/UserAccount";

const App = () => {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);

    if (productExit) {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }]);
    }
  };

  return (
    <>
      <Provider store={store}>
        <Router>
          <Header cartItem={cartItem} />
          <Switch>
            <Route path="/" exact>
              <Pages addToCart={addToCart} cartItem={cartItem} />
            </Route>
            <Route path="/cart" exact>
              <Cart cartItem={cartItem} />
            </Route>
            <Route path="/cartdetails/:id" exact>
              <ProductDetails />
            </Route>
            <Route path="/flashdetails/:id" exact>
              <FlashDetails />
            </Route>
            <Route path="/contact" exact>
              <ContactUs />
            </Route>
            <Route path="/help" exact>
              <Help />
            </Route>
            <Route path="/checkout" exact>
              <CheckOut />
            </Route>
            <Route path="/useraccount" exact>
              <UserAccount />
            </Route>
          </Switch>
          <Footer />
        </Router>
        <ToastContainer />
      </Provider>
    </>
  );
};

export default App;
