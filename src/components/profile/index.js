import React, { useState } from "react";
import style from "./profile.module.scss";
import { TbRefresh } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { RiArrowDownSFill } from "react-icons/ri";
import { IoMdArrowDropup } from "react-icons/io";
import NavItem from "components/navItem";
import { GoPlus } from "react-icons/go";

const Profile = () => {
  const [open, setOpen] = useState(false);

  // const handleOpen = () => {
  //     setOpen(true);
  // }

  const handlleToggle = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <div>
        <div className={style.profile}>
          <div className={style.profile_img}>
            <img src="/assets/images/profile.png" alt="img" />
          </div>
          <div className={style.subIcon}>
            <TbRefresh className={style.icon} />

            <IoSettingsOutline className={style.icon} />
          </div>
        </div>

        <div className={style.info} onClick={handlleToggle}>
          <div>
            <h4>Haider Ali</h4>
            <p>@captainhaider48</p>
          </div>
          <div>
            {open ? (
              <IoMdArrowDropup className={style.icon} />
            ) : (
              <RiArrowDownSFill className={style.icon} />
            )}
          </div>
          {open ? (
            <div className={style.info_detail}>
              <NavItem icon={<GoPlus />} text={"Add a Twitter account"} />

              <NavItem icon={<IoSettingsOutline />} text={"Twitter accounts"} />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
