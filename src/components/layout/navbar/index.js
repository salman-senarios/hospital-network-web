/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import MobileCategories from "components/categories/mobile-categories";
import ChartList from "components/chart-list";
import Networks from "components/networks";
import { logoutAction } from "redux/actions";
import Sidebar from "./sidebar";

import style from "./navbar.module.scss";

const NavBar = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [chartToggle, setChatToggle] = useState(false);
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false);
  const [mobileNetworksOpen, setMobileNetworkOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg fixed-top navbar-light">
          <div className="container">
            <a
              className="navbar-brand pl-2"
              onClick={() => {
                navigate("/");
              }}
              style={{ cursor: "pointer" }}
            >
              EPC Trade
            </a>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <form
                className={`form-inline my-2 my-lg-0 ml-auto d-none d-lg-block ${
                  mobileSearchOpen && "d-block"
                }`}
              >
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn my-2 my-sm-0" type="submit">
                  <img alt="" src="assets/images/menu_icons/search.svg" />
                </button>
              </form>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a
                    style={{ cursor: "pointer" }}
                    className="nav-link "
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    <img alt="" src="assets/images/menu_icons/home.svg" />
                  </a>
                </li>
                <li className="nav-item d-lg-none openList">
                  <a
                    className="nav-link friends_link"
                    onClick={() => setMobileCategoriesOpen(true)}
                  >
                    <img alt="" src="assets/images/menu_icons/list.png" />
                  </a>
                </li>
                <li className="nav-item openNetworks">
                  <a
                    className="nav-link friends_link"
                    onClick={() => setMobileNetworkOpen(true)}
                  >
                    <img alt="" src="assets/images/menu_icons/friends.svg" />
                    <span>
                      <span>10</span>
                    </span>
                  </a>
                </li>
                <li className="nav-item openChat d-lg-none">
                  <a
                    className="nav-link msg_link"
                    onClick={() => setChatToggle((prev) => !prev)}
                  >
                    <img alt="" src="assets/images/menu_icons/message.svg" />
                    <span>
                      <span>15</span>
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    <img
                      alt=""
                      src="assets/images/menu_icons/notification.svg"
                    />
                  </a>
                </li>
                <li className="nav-item search_btn d-lg-none">
                  <a
                    className="nav-link"
                    onClick={() => setMobileSearchOpen((prev) => !prev)}
                  >
                    <img
                      alt=""
                      src="assets/images/menu_icons/search.png"
                      height="26"
                    />
                  </a>
                </li>
                <li className="nav-item d-lg-none">
                  <a
                    className="nav-link openNav"
                    onClick={() => setSidebarOpen(true)}
                  >
                    <img
                      alt=""
                      src="assets/images/menu_icons/menu.png"
                      height="26"
                    />
                  </a>
                </li>
                <li className="nav-item dropdown d-none d-lg-block">
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    style={{ cursor: "pointer" }}
                    onClick={() => setProfileOpen(!profileOpen)}
                  >
                    <img
                      alt=""
                      src="assets/images/profile/person1.png"
                      width="width: 42px"
                      height="44px"
                    />{" "}
                    Lisa <img alt="" src="assets/images/menu_icons/play.svg" />
                  </a>
                  {profileOpen && (
                    <div className="dropdown-menu dropdown-menu-right d-block">
                      <a
                        className="dropdown-item"
                        onClick={() => {
                          setProfileOpen(false);
                          navigate("/profile");
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        Profile
                      </a>
                      <a
                        className="dropdown-item"
                        onClick={() => setProfileOpen(false)}
                        style={{ cursor: "pointer" }}
                      >
                        Settings
                      </a>
                      <a
                        className="dropdown-item"
                        onClick={() => setProfileOpen(false)}
                        style={{ cursor: "pointer" }}
                      >
                        Help & Support
                      </a>
                      <div className="dropdown-divider"></div>
                      <a
                        className="dropdown-item"
                        onClick={() => {
                          setProfileOpen(false);
                          dispatch(logoutAction());
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        Logout
                      </a>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className={style.chatIconDiv}>
        <img
          src="assets/images/icons/chat.png"
          alt=""
          onClick={() => setChatToggle((prev) => !prev)}
        />
      </div>

      <Sidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
        navigate={navigate}
        dispatch={dispatch}
      />

      {chartToggle && (
        <ChartList chartToggle={chartToggle} setChatToggle={setChatToggle} />
      )}
      <MobileCategories
        mobileCategoriesOpen={mobileCategoriesOpen}
        setMobileCategoriesOpen={setMobileCategoriesOpen}
      />
      <Networks
        mobileNetworksOpen={mobileNetworksOpen}
        setMobileNetworkOpen={setMobileNetworkOpen}
      />
    </>
  );
};

export default NavBar;
