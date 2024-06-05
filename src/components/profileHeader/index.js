import React, { useState } from "react";
import { tabsList } from "./helper";
import style from "./profileHeader.module.scss";

const ProfileHeader = () => {
  const [active, setActive] = useState("Timeline");
  return (
    <>
      <div className={style.profileMain}>
        <div className={style.profileInfo}>
          <div className={style.profileImg}>
            <img src="assets/images/profile/person1.png" alt="" />
          </div>
          <h3>Lisa Merraro</h3>
        </div>

        <div className={style.timeline}>
          <ul>
            {tabsList?.map((ele, index) => (
              <li
                key={index}
                style={{
                  borderBottom:
                    active === ele.title
                      ? "2px solid #198AD1"
                      : "2px solid transparent",
                  cursor: "pointer",
                }}
                onClick={() => setActive(ele.title)}
              >
                <div className={style.timeIcon}>
                  <img alt="" src={ele.img} />
                </div>
                <p>{ele.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;
