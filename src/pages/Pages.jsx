import React, { useState } from "react";
import Home from "../component/mainpage/Home";
import FlashDeals from "../component/flashDeals/FlashDeals";
import TopCate from "../component/top/TopCate";
import NewArrivals from "../component/newarrivals/NewArrivals";
import Discount from "../component/discount/Discount";
import Shop from "../component/shop/Shop";
import Wrapper from "../component/wrapper/Wrapper";
import Chat from "../component/chatbot/Chat";
import { Dialog } from "@mui/material";
import HomeStories from "../component/happyhomestories/HomeStories";
import UserAccount from "../component/account/UserAccount";

const Pages = ({ addToCart, cartItem }) => {
  const [opeChatBot, setOpenChatBot] = useState(false);

  return (
    <>
      <Home cartItem={cartItem} />
      <FlashDeals addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <div className="find-mattress"></div>
      <Wrapper />
      <HomeStories />
      <div className="chat-with-us-parent">
        <button className="chat-btn" onClick={() => setOpenChatBot(true)}>
          Chat with us <i className="fa-regular fa-comments"></i>
        </button>
      </div>
      <Dialog
        open={opeChatBot}
        onClose={() => setOpenChatBot(false)}
        // scroll="none"
      >
        <Chat />
      </Dialog>
    </>
  );
};

export default Pages;
