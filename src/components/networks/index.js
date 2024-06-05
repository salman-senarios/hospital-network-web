/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

import NewNetworks from "./new-networks";
import RequestNetworks from "./request-networks";

const Networks = ({ mobileNetworksOpen, setMobileNetworkOpen }) => {
  const [activeTab, setActiveTabs] = useState("request");
  return (
    <>
      <div
        className={`chatbar network sidemenu position-fixed ${
          mobileNetworksOpen && "d-block"
        }`}
      >
        <ul className="p-2 mb-0 border-top border-bottom chat_head border-left-0">
          <span
            className="close-icon d-lg-none"
            onClick={() => setMobileNetworkOpen(false)}
          >
            <img alt="" src="assets/images/icons/close.svg" />
          </span>

          {activeTab === "request" && (
            <li className="headRequests">
              <img
                alt=""
                src="assets/images/icons/Icon awesome-user-friends.svg"
              />
              <span className="font-weight-bold">NETWORK REQUESTS</span>
              <span></span>
            </li>
          )}

          {activeTab === "new" && (
            <li className="headNew ">
              <img alt="" src="assets/images/icons/Icon feather-activity.svg" />
              <span className="font-weight-bold">NEW JOIN IN NETWORK</span>
              <span></span>
            </li>
          )}
        </ul>

        <ul className="nav nav-pills border-bottom justify-content-between border-left-0 position-relative">
          <li className="nav-item border-right flex-fill">
            <a
              className={`nav-link showRequests ${
                activeTab === "request" && "active"
              }`}
              onClick={() => setActiveTabs("request")}
            >
              Network Requests
            </a>
          </li>

          <li className="nav-item border-right flex-fill">
            <a
              className={`nav-link showNew ${activeTab === "new" && "active"}`}
              onClick={() => setActiveTabs("new")}
            >
              New join in network
            </a>
          </li>
        </ul>

        {activeTab === "request" && <RequestNetworks />}
        {activeTab === "new" && <NewNetworks />}
      </div>
    </>
  );
};

export default Networks;
