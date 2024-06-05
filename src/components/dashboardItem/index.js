import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import style from "./dashboardItem.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const DashboardItem = ({ defaultNavigation }) => {
  const [open, setOpen] = useState(null);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleItemClick = (index) => {
    if (index === open) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };

  const handleNavigate = (path) => {
    // alert(path);
    navigate(path);
  };

  return (
    <div className={style.base}>
      <div className={style.options_container}>
        {defaultNavigation?.map((m, i) => (
          <>
            <div
              className={`${style.option} ${
                pathname?.includes(m?.active) && style.active
              } `}
              key={i}
              onClick={() => {
                handleItemClick(i);
                !m?.menus && handleNavigate(m.to);
              }}
            >
              <p to="#" className={style.text}>
                <span>{m.title}</span>
              </p>

              {m.menus && (
                <>{i === open ? <IoIosArrowDown /> : <IoIosArrowForward />}</>
              )}
            </div>

            {m.menus?.length > 0 &&
              i === open &&
              m.menus?.map((ele, ind) => (
                <div
                  className={`${style.option} ${
                    pathname?.includes(m?.active) && style.active
                  } `}
                  key={ind}
                  style={{ marginLeft: "10px" }}
                  onClick={() => handleNavigate(ele.to)}
                >
                  <p className={style.text}>
                    <span>{ele.title}</span>
                  </p>
                </div>
              ))}
          </>
        ))}
      </div>
    </div>
  );
};

export default DashboardItem;
