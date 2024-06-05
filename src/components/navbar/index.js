import React, { useEffect, useState } from "react";
import style from "./navbar.module.scss";
import { BsGraphUp } from "react-icons/bs";
import { BsChat } from "react-icons/bs";
import { FiInbox } from "react-icons/fi";
import { IoIosPeople } from "react-icons/io";
import { RiVipDiamondLine } from "react-icons/ri";
import { BsQuestionCircle } from "react-icons/bs";
import { TbDotsCircleHorizontal } from "react-icons/tb";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

  const list = () => {
    setDropdown((prev) => !prev);
  };

  const list2 = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDropdown2((prev) => !prev);
  };

  useEffect(() => {
    const closeDropdown = (e) => {
      if (e.path[0].id !== "tag") {
        setDropdown(false);
      }
    };
    document.body.addEventListener("click", closeDropdown);
    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);
  useEffect(() => {
    const closeDropdown2 = (e) => {
      if (e.path[0].id !== "tag1") {
        setDropdown2(false);
      }
    };
    document.body.addEventListener("click", closeDropdown2);
    return () => document.body.removeEventListener("click", closeDropdown2);
  }, []);

  return (
    <div className={style.main_sec}>
      <div className={style.main_nav}>
        <Link to="/">
          <img src="assets/images/icons/iconp.png" alt="abcd" />
        </Link>
        <div style={{ marginTop: "55px" }}>
          <div className={style.iconMain}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive == true ? style.active : ""
              }
            >
              <BsGraphUp className={style.icons} />
              <div>
                <span>Analytics</span>
              </div>
            </NavLink>
          </div>
          <div className={style.iconMain}>
            <NavLink
              to="/tweets"
              className={({ isActive }) =>
                isActive == true ? style.active : ""
              }
            >
              <BsChat className={style.icons} />
              <div>
                {" "}
                <span>Tweet</span>
              </div>
            </NavLink>
          </div>
          <div className={style.iconMain}>
            <NavLink
              to="/inbox"
              className={({ isActive }) =>
                isActive == true ? style.active : ""
              }
            >
              <FiInbox className={style.icons} />
              <div>
                <span>Inbox</span>
              </div>
            </NavLink>
          </div>
          <div className={style.iconMain}>
            <NavLink
              to="/followers"
              className={({ isActive }) =>
                isActive == true ? style.active : ""
              }
            >
              <IoIosPeople className={style.icons} />
              <div>
                <span>Followers</span>
              </div>
            </NavLink>
          </div>
        </div>
        <div className={style.container}>
          <div className={style.iconMain}>
            <RiVipDiamondLine className={style.icons} />
            <div>
              <span>Upgrade</span>
            </div>
          </div>
          <div className={style.iconMain} onClick={list2} id="tag1">
            <BsQuestionCircle className={style.qicon} onClick={list2} />
          </div>

          <div className={style.iconMain} onClick={list} id="tag">
            <TbDotsCircleHorizontal className={style.Doticon} />
          </div>
        </div>
      </div>

      {dropdown ? (
        <div className={style.list_items}>
          <ul>
            <li>Planning / Billing </li>
            <li>Twitter Accounts</li>
            <li>
              <Link to="/accounts">Account settings</Link>{" "}
            </li>
            <li>
              <Link to="/notification">Notification settings</Link>
            </li>
            <li>Others..</li>
            <li>Log out </li>
            <li>Language</li>
          </ul>
        </div>
      ) : null}
      {dropdown2 ? (
        <div className={style.list_items2}>
          <ul>
            <li>Quik start </li>
            <li>Tutorials</li>
            <li>Help </li>
            <li>Contact</li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default NavBar;
