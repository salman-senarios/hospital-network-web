import React from "react";
import style from "./profile.module.scss";
import { HiBadgeCheck } from "react-icons/hi";
import { TbFiles } from "react-icons/tb";
import { BsLink45Deg } from "react-icons/bs";
import { HiOutlineUserRemove } from "react-icons/hi";
import {TbVolumeOff} from "react-icons/tb";
import {BiBlock } from "react-icons/bi";
const UserProfile = () => {
  return (
    <div className={style.scroll_div}>
      <div className={style.container}>
        <div className={style.head}>
          <img src="/assets/images//userProfile.png" alt="image not found" />
          <div className={style.name}>
            <div>
              Wale
              <HiBadgeCheck className={style.icon} />
            </div>
            <div className={style.icon2}>
              @wale <TbFiles />
            </div>
          </div>
        </div>
        <div className={style.folowlist}>
          <ul>
            <li>
              Following<br></br>
              <span>2,605</span>
            </li>
            <li>
              Followers<br></br>
              <span>6,361,613</span>
            </li>
            <li>
              Tweets<br></br>
              <span>27,210</span>
            </li>
          </ul>
        </div>
        <div className={style.link1}>
          <a href="">
            <span>
              <BsLink45Deg />
            </span>
            wale.lnk.to/folarim2
          </a>
        </div>
        <div className={style.btn1}>
          <button type="submit" className={style.button1}>
            <span>
              <HiOutlineUserRemove />
            </span>
            Unfollow
          </button>
        </div>
        <div className={style.two_btns}>
          <button type="submit"className={style.button2}><span><TbVolumeOff/></span>Mute</button>
          <button type="submit" className={style.button2}><span><BiBlock/></span>Block</button>
        </div>
      </div>
      
    </div>
  );
};

export default UserProfile;
