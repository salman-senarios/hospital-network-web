import React from "react";
import style from "./rightSec.module.scss";
import Rating from "./rating";
import { Link } from "react-router-dom";
import DefaultLayout from "layout/defaultLayout";
const DashboardRightSec = () => {
  return (
    // <DefaultLayout>
      <div style={{ background: "white" }}>
        <div className={style.statics}>
          <h1>Statics</h1>
        </div>

        <div className={style.subContainer}>
          <div className={style.app}>
            <h3>Mobile apps and Chrome extension</h3>
            <div className={style.subapp}>
              <h4>Mobile apps</h4>

              <div className={style.imgDiv}>
                <a href="https://apps.apple.com/app/id1450787857#sd_dashboard">
                  <img src="/assets/images/apple.svg" alt="img" />{" "}
                </a>
                <a href="https://play.google.com/store/apps/details?id=jp.autoscale.socialdog&hl=en&utm_campaign=socialdog_dashboard">
                  <img src="/assets/images/android.png" alt="img" />{" "}
                </a>
              </div>
              <h4 className={style.chrome}>Chrome extension</h4>
              <p>Schedule Tweets and Retweets with SocialDog from Twitter.</p>
              <button className={style.btn}> Chrome extension</button>
            </div>
          </div>
          <div className={style.likes}>
            <div className={style.rating}>
              <Rating heading={"Replies"} />

              <Rating heading={"Retweets"} />

              <Rating heading={"likes"} />
            </div>
            <div className={style.recentsec}>
              <div className={style.header}>
                <div>
                  <h3>Recent popular Tweets</h3>
                </div>
                <div>
                  <span>Retrieving Tweets </span>
                  <button>Retrieve</button>
                </div>
              </div>
              <div className={style.link}>
                <Link to="#">Top 3 Retweeted</Link>

                <Link to="#">Top 3 liked</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    // </DefaultLayout>
  );
};

export default DashboardRightSec;
