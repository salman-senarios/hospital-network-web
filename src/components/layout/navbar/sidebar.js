/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { logoutAction } from "redux/actions";

const Sidebar = ({ open, setOpen, navigate, dispatch }) => {
  return (
    <>
      <div
        id="mySidenav"
        className="sidenav border-left d-block d-lg-none"
        style={{ width: open ? "250px" : "0px" }}
      >
        <a className="closebtn closeNav" onClick={() => setOpen(false)}>
          &times;
        </a>
        <a className="border-bottom" onClick={() => navigate("/profile")}>
          Profile
        </a>
        <a className="border-bottom">Settings</a>
        <a className="border-bottom">Help & support</a>
        <a
          onClick={() => {
            dispatch(logoutAction());
          }}
        >
          Logout
        </a>
      </div>
    </>
  );
};

export default Sidebar;
