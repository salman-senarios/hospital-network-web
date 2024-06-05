/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import ProfileHeader from "components/profileHeader";
import PostWrite from "page-sections/home-page/post-write";
import DaysStatus from "page-sections/home-page/days-status";
import FilterSection from "page-sections/home-page/filter";
import PostSection from "page-sections/home-page/post-section";

import style from "./profile.module.scss";

const Profile = () => {
  return (
    <>
      <main>
        <div className="container">
          <ProfileHeader />
          <div className="row p-3">
            <div className="col-lg-2 col-sm-12 pr-0 sidemenu">
              <div className={style.profile_complete}>
                <div className={style.comp_header}>
                  <h3>Profile Completion</h3>
                  <h4>30%</h4>
                </div>
                <div className={style.comp_body}>
                  <ul>
                    <li>
                      <img src="assets/images/profile-icon/tick.svg" alt="" />
                      <p>Add your profile picture</p>
                    </li>
                    <li>
                      <img src="assets/images/profile-icon/tick.svg" alt="" />
                      <p>Add your name</p>
                    </li>
                    <li>
                      <img src="assets/images/profile-icon/plus.svg" alt="" />
                      <p>Add your workplace</p>
                    </li>
                    <li>
                      <img src="assets/images/profile-icon/plus.svg" alt="" />
                      <p>Add your country</p>
                    </li>
                    <li>
                      <img src="assets/images/profile-icon/plus.svg" alt="" />
                      <p>Add your address</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={style.profile_information}>
                <div className={style.info_header}>
                  <img src="assets/images/profile-icon/info.svg" alt="" />
                  <h3>Information</h3>
                </div>
                <div className={style.info_body}>
                  <ul>
                    <li>
                      <img
                        src="assets/images/profile-icon/Icon awesome-eye.svg"
                        alt=""
                      />
                      <div>
                        <p>
                          <span> Online</span>
                        </p>
                        <p>3 posts</p>
                      </div>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <img
                        src="assets/images/profile-icon/Icon ionic-md-male.svg"
                        alt=""
                      />
                      <p>Male</p>
                    </li>
                    <li>
                      <img
                        src="assets/images/profile-icon/Icon awesome-heart.svg"
                        alt=""
                      />
                      <p>Single</p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <img
                        src="assets/images/profile-icon/Icon material-work.svg"
                        alt=""
                      />
                      <p>Working at Lahore</p>
                    </li>
                    <li>
                      <img
                        src="assets/images/profile-icon/Icon awesome-graduation-cap.svg"
                        alt=""
                      />
                      <p>Studying at lahore</p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <img
                        src="assets/images/profile-icon/Icon awesome-globe-asia.svg"
                        alt=""
                      />
                      <p>Living in America</p>
                    </li>
                    <li>
                      <img
                        src="assets/images/profile-icon/Icon material-location-on.svg"
                        alt=""
                      />
                      <p>
                        Located in 100 Awami Villas, Bahria Nasheman Ferozpur
                        Road
                      </p>
                    </li>
                  </ul>
                  <div className={style.info_map}>
                    <img src="assets/images/profile-icon/map.svg" alt="" />
                  </div>
                </div>
              </div>
              <div className={style.profile_about}>
                <div className={style.about_header}>
                  <img src="assets/images/profile-icon/Group 338.svg" alt="" />
                  <h3>About</h3>
                </div>
                <div className={style.about_body}>
                  <ul>
                    <li>
                      <img src="assets/images/profile-icon/music.svg" alt="" />
                      <p>Speakers</p>
                    </li>
                    <li>
                      <img
                        src="assets/images/profile-icon/uninterrupted-power-supply.svg"
                        alt=""
                      />
                      <p>UPS & Power Supply</p>
                    </li>
                    <li>
                      <img src="assets/images/profile-icon/print.svg" alt="" />
                      <p>Prniter Consumeables</p>
                    </li>
                    <li>
                      <img src="assets/images/profile-icon/alexa.svg" alt="" />
                      <p>Wireless Devices</p>
                    </li>
                    <li>
                      <img src="assets/images/profile-icon/addon.svg" alt="" />
                      <p>Add on Cards</p>
                    </li>
                    <li>
                      <img src="assets/images/profile-icon/alert.svg" alt="" />
                      <p>Security Products</p>
                    </li>
                    <li>
                      <img src="assets/images/profile-icon/voip.svg" alt="" />
                      <p>VOIP & Telephony</p>
                    </li>
                    <li>
                      <img
                        src="assets/images/profile-icon/clapperboard.svg"
                        alt=""
                      />
                      <p>Video Equipment</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={style.profile_friend}>
                <div className={style.friend_header}>
                  <img src="assets/images/profile-icon/Ellipse 10.svg" alt="" />
                  <h3>Friends</h3>
                </div>
                <div className={style.friend_body}>
                  <div className={style.friend_img}>
                    <img src="assets/images/profile-icon/user.svg" alt="" />
                    <p>VOIP & Telephony</p>
                  </div>
                  <div className={style.friend_img}>
                    <img
                      src="assets/images/profile-icon/Rectangle 77.svg"
                      alt=""
                    />
                    <p>VOIP & Telephony</p>
                  </div>
                  <div className={style.friend_img}>
                    <img
                      src="assets/images/profile-icon/Rectangle 76.svg"
                      alt=""
                    />
                    <p>VOIP & Telephony</p>
                  </div>
                  <div className={style.friend_img}>
                    <img
                      src="assets/images/profile-icon/Rectangle 79.svg"
                      alt=""
                    />
                    <p>VOIP & Telephony</p>
                  </div>
                  <div className={style.friend_img}>
                    <img
                      src="assets/images/profile-icon/Rectangle 78.svg"
                      alt=""
                    />
                    <p>VOIP & Telephony</p>
                  </div>
                  <div className={style.friend_img}>
                    <img
                      src="assets/images/profile-icon/Rectangle 80.svg"
                      alt=""
                    />
                    <p>VOIP & Telephony</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-sm-12 listing">
              <PostWrite />
              <DaysStatus />
              <FilterSection />
              <PostSection />
            </div>
            <div className="col-lg-3 col-sm-12 order-sm-1 px-0 sidebar-right d-none d-lg-block"></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;
