import React from "react";
import style from "./posting.module.scss";
import { ImInfo } from "react-icons/im";
import { IoDiamondOutline } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { RiCloseFill } from "react-icons/ri";
import DefaultLayout from "layout/defaultLayout";

const postingtimes = () => {
  return (
    
      <>      {/*============== head =============== */}
      <div className={style.head}>
        <div className={style.headheading}>
          <h5>Posting Times</h5>
        </div>
        <div className={style.headbtn}>
          <button>+ Add Posting Time</button>
        </div>
      </div>
      <div className={style.container}>
        {/* <hr /> */}
        {/*=============== Delete Button =================*/}
        <div className={style.deletebtn}>
          <div className={style.delbtn}>
            <button>Delete all posting times</button>
          </div>
        </div>

        {/* =================table ================ */}
        <div className={style.tableDiv}>
          <div className={style.table}>
            <table>
              <thead>
                <tr>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Satureday</th>
                  <th>Sunday</th>
                </tr>
              </thead>
              <tbody style={{ width: "88" }}>
                <tr>
                  <td>
                    <button>
                      19 : 43
                      <span>
                        <RiCloseFill />
                      </span>
                    </button>
                  </td>
                  <td>
                    <p>Not yet</p>
                  </td>
                  <td>
                    <p>Not yet</p>
                  </td>
                  <td>
                    <button>
                      19 : 43
                      <span>
                        <RiCloseFill />
                      </span>
                    </button>
                  </td>
                  <td>
                    <p>Not yet</p>
                  </td>
                  <td>
                    <button>
                      19 : 43
                      <span>
                        <RiCloseFill />
                      </span>
                    </button>
                  </td>
                  <td>
                    <p>Not yet</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* ============Time Zone ==============*/}
        <div className={style.timezone}>
          <p>Time Zone : Asia/Karachi (change)</p>
        </div>
        {/*============Posting Times ============*/}
        <div className={style.PostingTime}>
          <div className={style.divdata}>
            <div className={style.divIcon}>
              <span>
                <ImInfo style={{ width: "30px", height: "20px" }} />
              </span>
            </div>
            <div className={style.data}>
              <h6>4 / 7 Posting times are in use.</h6>
              <p>
                Upgrade your plan to increase the number of posting times you
                can add.
              </p>
            </div>
          </div>
          <div className={style.freebtn}>
            <button>
              <span>
                <IoDiamondOutline
                  style={{ width: "20px", height: "20px", marginRight: "10px" }}
                />
              </span>
              Try It free
            </button>
          </div>
        </div>
        {/*====================About Container ===============*/}
        <div className={style.aboutContainer}>
          <div className={style.aboutheading}>
            <h6>About Posting Times</h6>
          </div>
          <hr />
          <div className={style.cardheading}>
            <h5>
              Tweet on set days and times of the week by setting posting times.
            </h5>
          </div>
          <div className={style.cards}>
            <div className={style.card1}>
              <img src="assets/postingImages/image1.png" alt="3d image" />
              <div className={style.cardDes1}>
                Specify a day and time you often tweet at.
              </div>
            </div>
            <div className={style.card2}>
              <img src="assets/postingImages/image2.png" alt="3d image" />
              <div className={style.cardDes2}>
                Then, just create Tweets in the order you want them to be
                posted.
              </div>
            </div>
            <div className={style.card3}>
              <img src="assets/postingImages/image3.png" alt="3d image" />
              <div className={style.cardDes3}>
                Tweets will automatically be posted in order.
              </div>
            </div>
          </div>
          {/*================= Note Portion ================*/}
          <div className={style.notediv}>
            <h3>
              <span>
                <AiOutlineInfoCircle
                  style={{ width: "20px", height: "15px" }}
                />
              </span>
              Note
            </h3>
            <ul>
              <li>Tweet content that will engage your followers.</li>
              <li>
                Followers may unfollow if the frequency and number of Tweets are
                too high, so please be careful.
              </li>
              <li>
                Tweets that are completely identical will not be Tweeted due to
                Twitter's specifications.
              </li>
            </ul>
          </div>
        </div>
      </div>
      </>

   
  );
};

export default postingtimes;
