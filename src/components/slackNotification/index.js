import React from "react";
import style from "./slack.module.scss";

const SlackNotification = () => {
  return (
    <>
      <div className={style.main}>
        <div>Password</div>
      </div>
      <div style={{ padding: "30px 19px" }}>
        <div className={style.wrapper}>
          <div className={style.header}>
            <div>
              <p>
                Automatically send notifications to Slack about your account.
              </p>
            </div>

            <div >
              <button className={style.btn}>+Add</button>
            </div>
          </div>
          <div className={style.grid}>
            <div class={style.item}>Notification type</div>
            <div>Channel to notify</div>
            <div>Delete</div>
          </div>

          <div className={style.detail}>
            <h3>Connect to Slack to receive updates from SocialDog</h3>
            <button className={style.btn}>+Add a slack notification setting</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlackNotification;
