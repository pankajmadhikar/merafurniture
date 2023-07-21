import React, { useState } from "react";
import "./ContactStyle.css";

const ContactUs = () => {
  const [userContact, setUserContact] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserContact({ ...userContact, [name]: value });
  };

  console.log(userContact);

  const postData = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = userContact;

    const res = await fetch(
      "https://mera-furniture-default-rtdb.firebaseio.com/merafurniturecontact.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
        }),
      }
    );

    if (res) {
      setUserContact({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      alert("Responce Sent");
    }
  };

  return (
    <>
      <div className="contct-main container">
        <div className="contact-about">
          <h1>Come, meet us!</h1>

          <div>
            <h3>Manufactured, Packed & Marketed By:</h3>
            <h4>
              Registered Address Digiarch Pvt Ltd Address: Studio Digiarch
              M.No.6/0245, Vinayak Park, Wagholi, Tal Haveli, Pune
              <br /> Phone: +91-9156110710
              <br />
              Email: info@digiarch.in
            </h4>
          </div>

          <div>
            <h3>Give us a call!</h3>
            <p>+91 9156110710</p>
          </div>
        </div>

        <div className="contact-form">
          <p>
            Want to connect with us for something else? <br />
            Message us here and we’ll get back to you soon!
          </p>

          <label>Enter Name: </label>
          <input
            type="text"
            value={userContact.name}
            onChange={getUserData}
            placeholder="Enter Name"
            name="name"
            id=""
            required
          />
          <label>Enter Email Address: </label>
          <input
            type="text"
            placeholder="Enter Email Address"
            name="email"
            value={userContact.email}
            onChange={getUserData}
            id=""
            required
          />
          <label>Enter Mobile Number: </label>
          <input
            type="text"
            placeholder="Enter Mobile Number"
            name="phone"
            value={userContact.phone}
            onChange={getUserData}
            id=""
          />
          <label> Description </label>
          <textarea
            name="message"
            placeholder="Enter description"
            value={userContact.message}
            onChange={getUserData}
            id=""
            cols="30"
            rows="10"
            required
          ></textarea>
          <button className="contact-submit" onClick={postData}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
