import React, { useState } from "react";
import "./ChatBot.css";

const Chat = () => {
  const date = new Date();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [time, setTime] = useState(`${hours}:${seconds}`);
  const [dateTime, setDateTime] = useState(
    `${days[day]},${months[month]} ${year}`
  );

  const checkStatus = (e) => {
    let isActive = true;
    if (dateTime === "Thursday, May 20 2022") {
      isActive = false;
    }
    const status = document.querySelector(".status");

    if (isActive === true) {
      status.innerHTML = "Active";
      status.style.color = "green";
    } else {
      status.innerHTML = "Not Active";
      status.style.color = "red";
    }
  };

  const handelInput = (e) => {
    const botMessage = document.querySelector("#message1");
    const userMessage = document.querySelector("#message2");

    let badwords = ["bad|stupid|useless|bitch|crazy|nonsense"];
    let words = new RegExp(badwords);
    if (words.test(document.querySelector("#input").value)) {
      botMessage.innerHTML = "Typing....";
      setTimeout(() => {
        botMessage.innerHTML = "Please do not use bad words";
        document.querySelector("#input").value = " ";
      }, 2000);
    }

    let welcome = [
      "hii|hello|Hello|hey|sup|yo|wassup|whats up|howdy|greetings|good morning|good evining",
    ];
    let words2 = new RegExp(welcome);
    if (words2.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      botMessage.innerHTML = "Typing.....";
      setTimeout(() => {
        botMessage.innerHTML =
          "Hi! Welcome to Mera Furniture 😊 I'm Infinity, here to help you with any questions you have about your Mera Furniture order.Go ahead and type a question below or check out our menu and choose a topic 👇";
        status.innerHTML = "Active";
        status.style.color = "green";
        document.querySelector("#input").value = " ";
      }, 2000);
    }
    let bye = ["bye|goodbye|see you later|cya|good night|good bye"];
    let words3 = new RegExp(bye);
    if (words3.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "Bye, have a nice day";
        document.querySelector("#input").value = "";
      }, 2000);
      setTimeout(() => {
        status.innerHTML = "Not Active";
        status.style.color = "red";
      }, 5000);
    }
    let thanks = [
      "Thanks|thanks|thank you|thank you very much|Thank you very much",
    ];
    let words4 = new RegExp(thanks);
    if (words4.test(document.querySelector("#input").value)) {
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "You are welcome";
        document.querySelector("#input").value = "";
      }, 2000);
    }
    let how = ["How are you|how are you doing today|How are you|how are you"];
    let words5 = new RegExp(how);
    if (words5.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "I am fine, thank you";
        status.innerHTML = "Active";
        status.style.color = "green";
        document.querySelector("#input").value = "";
      }, 2000);
    }

    let good = [
      "That's good|Sound nice|sound nice|that sound awesome|that sounds great|Great|great|sounds great|that's sounds",
    ];
    let words6 = new RegExp(good);
    if (words6.test(document.querySelector("#input").value)) {
      botMessage.innerHTML = "Typing....";
      setTimeout(() => {
        botMessage.innerHTML = "smilley";
        document.querySelector("#input").value = "";
      }, 2000);
    }

    let response = [
      "I'm fine|I am fine|I am fine today|i'm fine|i'm great|I'm fine|I'm great|Good ",
    ];
    let words7 = new RegExp(response);
    if (words7.test(document.querySelector("#input").value)) {
      botMessage.innerHTML = "Typing....";
      setTimeout(() => {
        botMessage.innerHTML = "That is good";
        document.querySelector("#input").value = "";
      }, 2000);
    }

    let nameAsk = [
      "What's your name|what's your name|What is your name|what is your name",
    ];
    let words8 = new RegExp(nameAsk);
    if (words8.test(document.querySelector("#input").value)) {
      botMessage.innerHTML = "Typing....";
      setTimeout(() => {
        botMessage.innerHTML = "My name is Bot";
        document.querySelector("#input").value = "";
      }, 2000);
    }

    let owner = [
      "Who is the owner|who is the owner|Who is the owner of these Bo|Who is the owner of these Bot",
    ];
    let words9 = new RegExp(owner);
    if (words9.test(document.querySelector("#input").value)) {
      botMessage.innerHTML = "Typing....";
      setTimeout(() => {
        botMessage.innerHTML = "The owner of these bot is Treasure";
        document.querySelector("#input").value = "";
      }, 2000);
    }

    let owner2 = [
      "Who's Treasure|who's Treasure|Who is Treasure|who is Treasure",
    ];
    let words10 = new RegExp(owner2);
    if (words10.test(document.querySelector("#input").value)) {
      botMessage.innerHTML = "Typing....";
      setTimeout(() => {
        botMessage.innerHTML =
          "The Treasure is programmer based on ReactJs and NodeJs he is the owner of youtube";
        document.querySelector("#input").value = "";
      }, 2000);
    }

    let ageAsk = [
      "What's your age|what's your age|What is your age|what is your age|How old are you",
    ];
    let words11 = new RegExp(ageAsk);
    if (words11.test(document.querySelector("#input").value)) {
      botMessage.innerHTML = "Typing....";
      setTimeout(() => {
        botMessage.innerHTML = "I am 1 year old";
        document.querySelector("#input").value = "";
      }, 2000);
    }

    userMessage.innerHTML = document.querySelector("#input").value;
  };

  return (
    <>
      <div className="chat">
        <div className="chat-wrapper">
          <div className="chat-content">
            <div className="chat-header">
              <div className="chat-img">
                <h1>Mera Furniture</h1>
              </div>
              <div className="chat-right">
                <div className="chat-name">ChatBot</div>
                <div className="status">Active</div>
              </div>
            </div>
            <div className="chat-main">
              <div className="chat-main-content">
                <div className="chat-messages">
                  <div className="bot-message" id="message1"></div>
                  <div className="human-message" id="message2"></div>
                </div>
              </div>
            </div>
            <div className="chat-bottom">
              <div className="chat-btm">
                <div className="chat-input">
                  <input
                    type="text"
                    id="input"
                    placeholder="Enter Your Message"
                  />
                </div>
                <div className="chat-btn">
                  <button onClick={handelInput}>
                    {" "}
                    <i className="fas fa-paper-plane"></i> Send{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
