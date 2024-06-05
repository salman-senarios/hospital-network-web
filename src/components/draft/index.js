import TextArea from "components/textarea";
import React from "react";
import { AiOutlineReload } from "react-icons/ai";
import { FaRegImages, FaRegSmile, FaRegCircle } from "react-icons/fa";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { RiHeading } from "react-icons/ri";
import style from "./draft.module.scss";
import DefaultLayout from "layout/defaultLayout";

const Draft = () => {
  return (
    <div className={style.mainpage}>
      <div className={style.banner}>
        <div className={style.main}>
          {/* navbar */}
          <div className={style.header}>
            <div className={style.heading}>
              <a>
                <h4>Draft Tweets</h4>
              </a>
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
            <div className={style.formcls}>
              <form>
                <textarea
                  type="text"
                  placeholder="What's happening?"
                  autofocus
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
                    <div>
                      <span className={style.icon_spn}>
                        {" "}
                        <FaRegCircle className={style.icon2} />
                      </span>

                      <span className={style.load_icon}>
                        <AiOutlinePlusCircle className={style.icon2} />
                      </span>
                      <button className={style.btn}>
                        Save as draft Tweets
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className={style.text_box}>
          <span>
            <p>
              <b>Save incomplete Tweets as a drafts</b>
              <br></br>
              Creating a draft Tweet allows you to easily create a scheduled
              Tweet later.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Draft;

// <div className={style.text_box}>
// <span>
//   <p>
//     Sorry there are no Tweets to display .Please try changing the
//     filter conditions
//   </p>
// </span>
// </div>
