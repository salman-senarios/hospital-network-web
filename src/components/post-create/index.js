import React, { useState } from "react";

import Modal from "components/modal";

import style from "./post.module.scss";
import SellPost from "./sell-post";
import BuyPost from "./buy-post";

const CreatePost = ({ open, setOpen }) => {
  const [tab, setTab] = useState("sell");

  return (
    <Modal open={open} handleClose={() => setOpen(false)}>
      <div className={style.main}>
        <p>Create Post</p>
        <div className={style.ul}>
          <li
            onClick={() => setTab("sell")}
            className={`${tab === "buy" && style.activeTab}`}
          >
            {" "}
            I Want to Sell
          </li>
          <li
            onClick={() => setTab("buy")}
            className={`${tab === "sell" && style.activeTab}`}
          >
            I Want to Buy
          </li>
        </div>

        <div className={style.bar}>
          <p>
            Post Selling Lead - tell {tab === "sell" ? "buyers" : "seller "}{" "}
            what your are {tab === "sell" ? "selling" : "buying"}
          </p>
          <img src="assets/images/icons/cross.svg" alt="" />
        </div>

        {tab === "sell" && <SellPost setOpen={setOpen} />}
        {tab === "buy" && <BuyPost setOpen={setOpen} />}
      </div>
    </Modal>
  );
};

export default CreatePost;
