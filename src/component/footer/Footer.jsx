import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid2">
          <div className="box-brand">
            <h1>Mera Furniture</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              explicabo architecto magnam maxime nihil laborum!
            </p>
            <div className="icon d-flex">
              <div className="img d-flex">
                <i className="fa-brands fa-google-play"></i>
                <span>Google Play</span>
              </div>
              <div className="img d-flex">
                <i className="fa-brands fa-app-store-ios"></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className="box">
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Tearms & Condition</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className="box">
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center</li>
              <li>How To Buy</li>
              <li>Track Your Order</li>
              <li>Corporate & Bulk Purchasing</li>
              <li>Return & Refund</li>
            </ul>
          </div>

          <div className="box">
            <h2>Contact Us</h2>
            <ul>
              <li>
                Studio Digiarch M.No.6/0245, Vinayak Park, Wagholi, Tal Haveli,
                Pune
              </li>
              <li>Phone: +91-9156110710</li>
              <li>Email: info@digiarch.in</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
