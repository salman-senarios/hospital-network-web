/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { categoriesList } from "./helper";

const MobileCategories = ({
  mobileCategoriesOpen,
  setMobileCategoriesOpen,
}) => {
  const [categoriesVal, setCategoriesVal] = useState("Phone & Tabs");
  return (
    <>
      <div
        className={`chatbar list sidemenu position-fixed ${
          mobileCategoriesOpen && "d-block"
        }`}
      >
        <ul className="p-2 mb-0 border-left-0 border-top border-bottom chat_head">
          <span
            className="close-icon d-lg-none"
            onClick={() => setMobileCategoriesOpen(false)}
          >
            <img alt="" src="assets/images/icons/close.svg" />
          </span>
          <li>
            <img alt="" src="assets/images/menu_icons/list.svg" />
            <span className="font-weight-bold ml-2">CATEGORIES</span>
            <span></span>
          </li>
        </ul>
        <ul className="networks_ p-2 mb-0 border-0">
          {categoriesList?.map((ele, ind) => (
            <li
              key={ind}
              onClick={() => setCategoriesVal(ele.title)}
              style={{ cursor: "pointer" }}
            >
              <img alt="" src={ele.img} />
              <span
                style={{
                  color: categoriesVal === ele.title ? "#1DA1F3" : "#666666",
                }}
                className="pl-2"
              >
                {ele?.title}
              </span>
              <span>{ele.count}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MobileCategories;
