import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { FiSliders } from "react-icons/fi";
import { FaBullseye, FaRegUser } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { AiOutlineSetting } from "react-icons/ai";
import { MdOutlineFileDownload } from "react-icons/md";
import { HiOutlineCheck } from "react-icons/hi";

import Details from "components/userDetails/details";
import UserProfile from "components/userDetails/Userprofile";
import Firsttab from "./firstTab";
import Secondtab from "./secondTab";

import style from "./inboxheader.module.scss";

const InboxHeader = (props) => {
  const [dropdown, setDropdown] = useState(false);
  const [Filter, setFilter] = useState(false);
  const [User, setUser] = useState(false);
  const [Dots, setDots] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");
  const [activeUser, setActiveUser] = useState("profile");

  const Dotlist = () => {
    setDots((prev) => !prev);
  };
  const Userlist = () => {
    setUser((prev) => !prev);
  };

  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };
  const handleProfile = () => {
    // update the state to tab1
    setActiveUser("profile");
  };
  const handleDetails = () => {
    // update the state to tab2
    setActiveUser("details");
  };

  const list2 = () => {
    //update the filter dropdown
    setFilter((prev) => !prev);
  };

  const list = () => {
    setDropdown((prev) => !prev);
  };
  return (
    <>
      <div className={style.container}>
        <div className={style.inbox}>
          <div className={style.main_wrapper}>
            <div className={style.wraper}>
              <div>
                {props.heading}
                {/* <span className={style.val}>{props.value}</span> */}
              </div>
              <div className={style.text}>{props.title}</div>
            </div>

            {/* newest fist  */}
            <div className={style.drop_main}>
              <div className={style.main}>
                <div className={style.heading} onClick={list}>
                  Newest first
                </div>
                <div>
                  <MdArrowDropDown className={style.icon} />
                </div>
              </div>
              {/* filter   */}
              <div className={style.main} onClick={list2}>
                <div>
                  <FiSliders className={style.icon} />
                </div>
                <div className={style.heading}>Filter</div>
              </div>
              {/* profile */}
              <div className={style.main} onClick={Userlist}>
                <div>
                  <FaRegUser className={style.icon} />
                </div>
                <div className={style.heading}>User details</div>
              </div>
              {/* three dost */}
              <div className={style.main} onClick={Dotlist}>
                <div>
                  <HiOutlineDotsHorizontal className={style.icon} />
                </div>
              </div>
            </div>
          </div>
          {/* end */}
        </div>
      </div>
      {dropdown ? (
        <div className={style.newest_model}>
          <ul>
            <li>
              <HiOutlineCheck className={style.tickk} />
              Newest first{" "}
            </li>
            <li>Oldest first </li>
            <li>Following(decending)</li>
            <li>Following(acending)</li>
            <li>Followers(decending)</li>
            <li>Followers(acending)</li>
            <li>Tweets(decending)</li>
            <li>Tweets(acending)</li>
            <li>Follower/Following ratio(decending)</li>
            <li>Follower/Following ratio(acending)</li>
            <li>Follower/Following ratio closest to 1</li>
            <li>Last tweeted(decending)</li>
            <li>Last tweeted(acending)</li>
            <li>Date joined Tweeter(decending)</li>
            <li>Date joined Tweeter(acending)</li>
          </ul>
        </div>
      ) : null}

      {Filter ? (
        <div className={style.filter_model}>
          <div className={style.filter_head}>
            <div className={style.filter_text}>
              Filter
              <div className={style.cross_div}>
                <button className={style.cross_btn} onClick={list2}>
                  <IoMdClose />
                </button>
              </div>
            </div>
          </div>
          {/* filter heade close  */}

          <div>
            <ul className={style.filter_btns}>
              <li
                className={activeTab === "tab1" ? style.active : ""}
                onClick={handleTab1}
              >
                <button className={style.btn}>Quick filter</button>
              </li>
              <li
                className={activeTab === "tab2" ? style.active : ""}
                onClick={handleTab2}
              >
                <button className={style.btn}>Advanced filter</button>
              </li>
            </ul>
            <div>{activeTab === "tab1" ? <Firsttab /> : <Secondtab />}</div>
          </div>
        </div>
      ) : null}
      {/* user details  */}
      {User ? (
        <div className={style.filter_model}>
          <div className={style.filter_head}>
            <div className={style.filter_text}>
              User details
              <div className={style.cross_div}>
                <button className={style.cross_btn} onClick={Userlist}>
                  <IoMdClose />
                </button>
              </div>
            </div>
          </div>
          {/* userdetail */}
          <div className={style.User_body}>
            <div>
              <ul className={style.filter_btns}>
                <li
                  className={activeUser === "profile" ? style.active : ""}
                  onClick={handleProfile}
                >
                  <button className={style.btn}>Profile</button>
                </li>
                <li
                  className={activeUser === "details" ? style.active : ""}
                  onClick={handleDetails}
                >
                  <button className={style.btn}>Details</button>
                </li>
              </ul>
              <div>
                {activeUser === "profile" ? <UserProfile /> : <Details />}
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {/* three dots */}
      {Dots ? (
        <div className={style.dotbox}>
          <div className={style.dots_model}>
            <div className={style.part1}>
              <div>
                <AiOutlineSetting className={style.icon2} />
              </div>
              <div>Keyword Moniter setting</div>
            </div>
            <div className={style.part2}>
              <div>
                <MdOutlineFileDownload className={style.icon2} />
              </div>
              <div>Csv download</div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default InboxHeader;
