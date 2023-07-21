import React, { useState } from "react";
import { Link } from "react-router-dom";
import Categories from "../../component/mainpage/Categories";
import { Dialog, Drawer, SwipeableDrawer } from "@mui/material";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container d-flex">
          <div
            className=""
            onClick={() => setShowCategories(true)}
            onDoubleClick={() => setShowCategories(false)}
          >
            <div className="categories d-flex" style={{ cursor: "pointer" }}>
              {" "}
              <span className="fa-solid fa-border-all"></span>
              <h4>
                Categories{" "}
                {showCategories ? (
                  <i className="fa-solid fa-angle-up"></i>
                ) : (
                  <i className="fa fa-chevron-down"></i>
                )}
              </h4>
            </div>
            <div>
              {showCategories && (
                <Categories setShowCategories={setShowCategories} />
              )}
            </div>
          </div>

          <div className="navlink">
            <ul
              className={
                mobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"
              }
              onClick={() => setMobileMenu(false)}
            >
              <li>
                <Link to={"/"}>home</Link>
              </li>
              <li>
                <Link to={"/pages"}>pages</Link>
              </li>
              <li>
                <Link to={"/user"}>user account</Link>
              </li>
              <li>
                <Link to={"/help"}>Help</Link>
              </li>
              <li>
                <Link to={"/track"}>track my order</Link>
              </li>
              <li>
                <Link to={"/contact"}>contact</Link>
              </li>
            </ul>

            <button
              className="toggle"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fa-solid fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
