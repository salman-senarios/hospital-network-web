import React from "react";

import NavBar from "./navbar";

import style from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <header className={style.header}>
        <NavBar />
      </header>
      {children}
    </>
  );
};

export default Layout;
