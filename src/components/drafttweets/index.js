import TextArea from "components/textarea";
import React from "react";
import { AiOutlineReload } from "react-icons/ai";
import {
  FaRegImages,
  FaRegSmile,
  FaRegCircle,
  FaPlusCircle,
} from "react-icons/fa";
import { BsQuestionCircle } from "react-icons/bs";
import { FiRepeat } from "react-icons/fi";
import { RiChat1Line } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { FiUpload } from "react-icons/fi";
import { RiHeading } from "react-icons/ri";
import style from "../drafttweets/DraftTweets.module.scss";
import DefaultLayout from "layout/defaultLayout";
import { Link } from "react-router-dom";

const DraftTweets = () => {
  return (
    <>
      <div className={style.main}>
        {/* navbar */}
        <div className={style.header}>
          <div className={style.heading}>
            <Link to="#">Draft Tweets</Link>
          </div>
          <div className="">
            <div className={style.form}>
              <form>
                <span>Show preview</span>
                <input type="radio" />
              </form>
            </div>
            <AiOutlineReload className={style.icon_ref} />
          </div>
        </div>
        {/*end navbar */}
        {/* profile */}
        <div className={style.profile_main}>
          <div>
            <img
              className={style.profile_img}
              src="/assets/images/profile.png"
              alt="img"
            />
          </div>
          <div>
            <form>
              <textarea
                placeholder="What's happening"
                cols="53"
                spellCheck="true"
              />
              <div className={style.txt_form}>
                <div>
                  <span className={style.icon_spn}>
                    {" "}
                    <FaRegImages className={style.icon} />
                  </span>
                  <span className={style.icon_spn}>
                    {" "}
                    <FaRegSmile className={style.icon} />
                  </span>
                </div>
                <div>
                  <span className={style.icon_spn}>
                    {" "}
                    <FaRegCircle className={style.icon} />
                  </span>

                  <span className={style.load_icon}>
                    <FaPlusCircle className={style.icon} />
                  </span>
                  <button className={style.btn}>Save as draft Tweets</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.heading1}>
          <h1>Tweet preview</h1>
          <div>
            <BsQuestionCircle className={style.Qicon} />
          </div>
        </div>
        <div className={style.mobileView}>
          <span>Mobile</span>
          <div className={style.Mbody}>
            <img src="/assets/images/profile.png" alt="profile" />
            <div className={style.Mtext}>
              <div className={style.Uname}>
                <b>Haider Ali</b>
                <span>@AliHaider</span>
              </div>
              <div>dsfsgd</div>
              <div className={style.Micons}>
                <RiChat1Line />
                <FiRepeat />
                <AiOutlineHeart />
                <FiUpload />
              </div>
            </div>
          </div>
        </div>
        <div className={style.desktopView}>
          <span>Desktop</span>
          <div className={style.Dbody}>
            <img src="/assets/images/profile.png" alt="profile" />
            <div className={style.Dtext}>
              <div className={style.Dname}>
                <b>Haider Ali</b>
                <span>@AliHaider</span>
              </div>
              <div className={style.textdiv}>dsfsgd</div>
              <div className={style.Dicons}>
                <RiChat1Line />
                <FiRepeat />
                <AiOutlineHeart />
                <FiUpload />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DraftTweets;
