import DefaultLayout from "layout/defaultLayout";
import React from "react";
import style from "./notificationset.module.scss";
import { Link } from "react-router-dom";
const Notification = () => {
  return (
    <>
      {/* <div className={style.header_div}>
        <div className={style.heading}>Notification settings</div>
        <div>
          <span>SocialDog UserID:940367</span>
        </div>
      </div> */}
      {/* header div close  */}

      <div className={style.header}>
        <div>Notification settings</div>

        <div className={style.uid}>SocialDog User ID: 940371</div>
      </div>
      <div className={style.body}>
        {/* email notification setting start */}
        <div className={style.email_main}>
          <div className={style.email_notifi}>Email notification settings</div>
          <div className={style.listitems}>
            <ul>
              <li>
                <label class={style.container_two}>
                  Data retrivel complete email
                  <input type="checkbox" checked />
                  <span class={style.checkmark}></span>
                </label>
              </li>
              <li>
                <label class={style.container_two}>
                  Daily report
                  <input type="checkbox" checked />
                  <span class={style.checkmark}></span>
                </label>
              </li>
              <li>
                <label class={style.container_two}>
                  Weekly report
                  <input type="checkbox" />
                  <span class={style.checkmark}></span>
                </label>
              </li>
              <li>
                <label class={style.container_two}>
                  Notices From socialDog
                  <input type="checkbox" checked />
                  <span class={style.checkmark}></span>
                </label>
              </li>
              <li>
                <label class={style.container_two}>
                  Scheduled Tweet queue empty notfication
                  <input type="checkbox" checked />
                  <span class={style.checkmark}></span>
                </label>
              </li>
              <li>
                <label class={style.container_two}>
                  keyword monitor new Tweet email
                  <input type="checkbox" checked />
                  <span class={style.checkmark}></span>
                </label>
              </li>
              <div className={style.dropdown}>
                <label>keyword monitor new tweet email frequency </label>
                <select className={style.option}>
                  <option value="1" disabled>
                    Once an day
                  </option>
                  <option value="2" disabled>
                    Once every 6 hour
                  </option>
                  <option value="2" disabled>
                    Once every 12 hour
                  </option>
                  <option value="2"> Once a hour </option>
                  <option value="2"> Once every 7 days </option>
                </select>
              </div>
            </ul>
          </div>
          <div className={style.btn_main}>
            <div>
              <button type="submit">Save</button>
            </div>
          </div>
        </div>
        {/* email setting close  */}
        <div className={style.browser_main}>
          <div className={style.browser_notifi}>
            Browser push notification setting
          </div>
          <div className={style.text1}>
            <span>
              You can receive the following notifications via browser
              notifications. Notifications can be received even when the page is
              not open.
            </span>
          </div>
          <div className={style.htext}>
            <div>Browser push notifications</div>
            <div>
              <span>Off</span>
            </div>
          </div>
          <div className={style.browsitems}>
            <ul>
              <li>
                <label class={style.container_two}>
                  Data retrivel complete email
                  <input type="checkbox" disabled />
                  <span class={style.checkmark}></span>
                </label>
              </li>
              <li>
                <label class={style.container_two}>
                  Daily report
                  <input type="checkbox" disabled />
                  <span class={style.checkmark}></span>
                </label>
              </li>
              <li>
                <label class={style.container_two}>
                  Weekly report
                  <input type="checkbox" disabled />
                  <span class={style.checkmark}></span>
                </label>
              </li>
              <li>
                <label class={style.container_two}>
                  Notices From socialDog
                  <input type="checkbox" disabled />
                  <span class={style.checkmark}></span>
                </label>
              </li>
              <li>
                <label class={style.container_two}>
                  Scheduled Tweet queue empty notfication
                  <input type="checkbox" disabled />
                  <span class={style.checkmark}></span>
                </label>
              </li>
              <li>
                <label class={style.container_two}>
                  keyword monitor new Tweet email
                  <input type="checkbox" disabled />
                  <span class={style.checkmark}></span>
                </label>
              </li>
            </ul>
          </div>
          <div className={style.browsers}>
            <p>
              <b>Compatible browsers:</b>
              <br></br>
              Windows: Chrome, Firefox, Edge<br></br>
              Mac: Chrome, Firefox<br></br>
              Android: Chrome, Firefox<br></br>
              iOS: Not compatible
            </p>
            <p>
              Notifications can be received on multiple browsers. Please change
              the settings for each browser from this page.
            </p>
          </div>
          <div className={style.btn_turnOn}>
            <div>
              <button type="submit">Trun on</button>
            </div>
          </div>
        </div>
        <Link to="/slackNotification">Slack Notification</Link>
      </div>
      {/* <a href=""></a> */}
    </>
  );
};

export default Notification;
