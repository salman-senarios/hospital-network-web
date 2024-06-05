import React, { useState } from "react";

import { categoriesList } from "./helper";

const Categories = () => {
  const [categoriesVal, setCategoriesVal] = useState("Phone & Tabs");
  return (
    <>
      <ul>
        <div className="d-flex align-items-center justify-content-between">
          <li>
            <img alt="" src="assets/images/menu_icons/list.svg" />
            <span className="font-weight-bold pl-2">CATOGARIES </span>
            <span></span>
          </li>
          <span className="close-icon d-lg-none">
            <img alt="" src="assets/images/icons/close.svg" />
          </span>
        </div>

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
    </>
  );
};

export default Categories;
