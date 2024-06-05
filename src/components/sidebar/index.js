import React from "react";
import Profile from "components/profile";
import Dashboard from "components/dashboard";
import style from "./sidebar.module.scss";
import { useLocation } from "react-router-dom";
import Tweets from "pages/tweets";
const SideBar = ({navItems}) => {
  const location = useLocation();
  const currentRoute = location.pathname;

  
  return (
    <div className={style.container}>
      <Profile />
      <hr className={style.line} />
      <div className={style.dashboard}>
        <div className={style.child}>
          <Dashboard navItems={navItems} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
