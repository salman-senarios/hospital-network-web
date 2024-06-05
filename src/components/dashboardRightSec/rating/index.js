import React from "react";
import style from "./rating.module.scss";
import { Link } from "react-router-dom";
const Rating = (props) => {
  return (
    <div className={style.wrapper}>
      <Link to="#">
        <h3>{props.heading}</h3>
        <div>
          <span>0</span> <span>0</span>
        </div>
      </Link>
    </div>
  );
};
export default Rating;
