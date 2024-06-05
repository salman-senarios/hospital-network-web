import React , {useState}from "react";
import SideBar from "components/sidebar";
import style from "./defaultLayout.module.scss";
import NavBar from "components/navbar";

const DefaultLayout = ({ children, navItems }) => {
  return (
    <div className={style.container__main}>
      <div
       className={style.sub_main}
      >
        <NavBar />
        <SideBar navItems={navItems} />
      </div>
      <div className={style.content}>{children}</div>
    </div>
  );
};

export default DefaultLayout;
