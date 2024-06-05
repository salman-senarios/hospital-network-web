import React from "react";
import style from "./navItem.module.scss";
const NavItem =(props)=>{
  return(
    <div className={style.container}>
      <span>{props.icon}</span> <span> {props.text}</span>
    </div>
    )
    ;
  }
  
  export default NavItem;