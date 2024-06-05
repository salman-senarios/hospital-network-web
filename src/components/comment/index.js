import React from "react";
import style from "./comments.module.scss";
import { IoTimeOutline } from "react-icons/io5";
import DefaultLayout from "layout/defaultLayout";
const Comments = () => {
  return (
    <div>
      <div className={style.header}>
        {" "}
        <p>Mon, Jul 48, 2022</p>
      </div>
      <div className={style.detail}>
        <div className={style.content}>
          <div className={style.img}>
            <img src="assets/images/profile.png" alt="" />
          </div>
          <div>
            <p>
              <span>
                <a href="#">Haider Ali </a>
              </span>
              <span>@captainhaider48</span>
            </p>
            <p className={style.text}>No Tweet content. </p>
          </div>
        </div>
        <div className={style.time}>
          <div className={style.toolTip}>
            <IoTimeOutline /> <span>19:40</span>
          </div>
          <button className={style.btn}>Set a Tweet</button>
        </div>
      </div>
    </div>
  );
};

export default Comments;
