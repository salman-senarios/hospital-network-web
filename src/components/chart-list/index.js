/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

import { chartListArr } from "./helper";
import PersonChart from "./person-chart";

const ChartList = ({ chartToggle, setChatToggle }) => {
  const [searchOpen, setSearchOpen] = useState(true);
  const [personChatOpen, setPersonChatOpen] = useState(false);
  const [personChatData, setPersonChatData] = useState({});

  const handleClick = (data) => {
    setPersonChatData({ ...data });
    !personChatOpen && setPersonChatOpen(true);
  };

  return (
    <>
      <div
        className={`chatbar chatnetworks sidemenu position-fixed ${
          chartToggle && "chartShow"
        }`}
      >
        <ul className="p-2 mb-0 border-top border-bottom chat_head">
          <span className="close-icon d-lg-none">
            <img
              alt=""
              src="assets/images/icons/close.svg"
              onClick={() => setChatToggle(false)}
            />
          </span>
          <li>
            <img alt="" src="assets/images/icons/united.svg" />{" "}
            <span className="font-weight-bold">MY NETWORKS</span>
            <span></span>
          </li>
        </ul>

        <ul className="networks_ p-2 mb-0">
          {chartListArr?.map((ele, ind) => (
            <li key={ind}>
              <a style={{ cursor: "pointer" }} onClick={() => handleClick(ele)}>
                <img alt="" src={ele?.profile} className="pimg" />{" "}
                <span className="pname">{ele.name} </span>
                {ele.onlineOffline && (
                  <span>
                    <img alt="" src={ele.onlineOffline} />
                  </span>
                )}
                {ele.time && <span>{ele.time}</span>}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-pills">
          <ul className="nav nav-pills border-top border-bottom justify-content-between">
            {searchOpen ? (
              <>
                <li className="nav-item border-right flex-fill">
                  <a className="nav-link">Recent Chat</a>
                </li>
                <li className="nav-item active border-right flex-fill">
                  <a className="nav-link">Chat</a>
                </li>
                <li className="nav-item border-right flex-fill">
                  <a className="nav-link">Active (9)</a>
                </li>
                <li
                  className="nav-item flex-fill"
                  onClick={() => setSearchOpen(!searchOpen)}
                >
                  <a className="search_chat">
                    <img alt="" src="assets/images/menu_icons/search.svg" />
                  </a>
                </li>
              </>
            ) : (
              <li className="search-item w-100">
                <form
                  className="my-lg-0 ml-auto d-flex w-100"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSearchOpen(!searchOpen);
                  }}
                >
                  <input
                    className="form-control flex-fill border-0 py-0"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn my-sm-0 flex-fill" type="submit">
                    <img alt="" src="assets/images/menu_icons/search.svg" />
                  </button>
                </form>
              </li>
            )}
          </ul>
        </div>
      </div>

      <PersonChart
        personOpen={personChatOpen}
        personChatData={personChatData}
        setPersonOpen={setPersonChatOpen}
      />
    </>
  );
};

export default ChartList;
