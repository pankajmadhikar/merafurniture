import { Dialog } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Register2 from "../../component/registeration/Register2";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../../component/registeration/firebase-config";

const Search = ({ cartItem }) => {
  const [openRegister, setOpenRegister] = useState(false);

  window.addEventListener("scroll", function() {
    const search = document.querySelector(".search");
    search.classList.toggle("active", this.window.scrollY > 100);
  });

  const { carts } = useSelector((state) => state.cartreducer);

  const [user, setUser] = useState({});

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width">
            <Link to={"/"} className="h1">
              Mera Furniture
            </Link>
          </div>

          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input
              type="text"
              placeholder="search and hit enter"
              name=""
              id=""
            />
            <span>All Category</span>
          </div>

          <div className="icon f_flex width">
            <i
              className="fa fa-user icon-circle"
              onClick={() => setOpenRegister(true)}
            ></i>{" "}
            <Dialog open={openRegister} onClose={() => setOpenRegister(false)}>
              <Register2 setOpenRegister={setOpenRegister} />
            </Dialog>
            <div className="cart">
              <Link to={"/cart"}>
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span>{carts.length === 0 ? " " : carts.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
