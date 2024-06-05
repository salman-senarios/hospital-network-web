import React from "react";
import { Link } from "react-router-dom";
import style from "./KaywordMonitorSettings.module.scss";
import {
  AiOutlineHolder,
  AiOutlineInfoCircle,
  AiOutlineSketch,
} from "react-icons/ai";
import { BsQuestionCircle } from "react-icons/bs";
const MonitorSetting = () => {
  return (
    <div>
      {/* Navbar */}
      <div>
        <div className={style.main}>
          <div>Keyword Monitor settings</div>
        </div>

        {/* table */}
        <div className={style.wrapper}>
          <div>
            <div className={`mt-4 `}>
              <div
                className={`card-header d-flex justify-content-between align-items-center `}
              >
                <div className={`${style.headerText} align-self-center `}>
                  <snap className="text-blod text-muted ">
                    View Tweets containing your specified keywords in
                    <Link to="/inbox" className="text-primary">
                      {" "}
                      Inbox
                    </Link>
                    , or receive them by email.
                    <Link to="/notification" className="text-primary">
                      Notification settings
                    </Link>
                  </snap>
                </div>
                <div className="align-self-center">
                  <span className="btn btn-primary  h6">+ Add</span>
                </div>
              </div>{" "}
              <table class={`table ${style.content_bg}`}>
                <thead>
                  <tr className="h6">
                    <th> </th>
                    <th scope="col">Title</th>
                    <th scope="col">Search option</th>
                    <th scope="col">Last synced</th>
                    <th scope="col">Estimated number of Tweets per day</th>
                  </tr>
                </thead>
                <tbody className={style.table_row}>
                  <tr className={style.table_row}>
                    <div className={style.icon_table}>
                      <AiOutlineHolder />
                    </div>

                    <td scope="row">
                      <div className="d-flex">
                        <div></div>
                        <div>
                          <ul className={style.list_group}>
                            <li className="text-left pl-1 font-wight-normal text-primary">
                              <b> Name</b>
                            </li>

                            <li className={style.list_item_min}>5 hours ago</li>
                            <li className={style.list_item} title>
                              Edit
                            </li>
                            <li className={style.list_item}> Delete</li>
                          </ul>
                        </div>
                      </div>
                    </td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr className={style.table_row}>
                    <div className={style.icon_table}>
                      <AiOutlineHolder />
                    </div>
                    <td scope="row">
                      <div className="d-flex">
                        <div></div>
                        <div>
                          <ul className={style.list_group}>
                            <li className="text-left pl-1 font-wight-normal text-primary">
                              <b> Name</b>
                            </li>

                            <li className={style.list_item_min}>5 hours ago</li>
                            <li className={style.list_item}> Edit</li>
                            <li className={style.list_item}> Delete</li>
                          </ul>
                        </div>
                      </div>
                    </td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr className={style.table_row}>
                    <div className={style.icon_table}>
                      <AiOutlineHolder />
                    </div>
                    <td scope="row">
                      <div className="d-flex">
                        <div></div>
                        <div>
                          <ul className={style.list_group}>
                            <li className="text-left pl-1 font-wight-normal text-primary">
                              <b> Name</b>
                            </li>

                            <li className={style.list_item_min}>5 hours ago</li>
                            <li className={style.list_item}> Edit</li>
                            <li className={style.list_item}> Delete</li>
                          </ul>
                        </div>
                      </div>
                    </td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* table */}

          {/* button */}
          <div className=" mt-5  ">
            <div className="d-flex">
              <div>
                <button className={`btn btn-outline-primary ${style.btn_try}`}>
                  Retrieve new Tweets
                </button>
              </div>
              <div>
                <button
                  className={`btn btn-outline-primary ml-3 ${style.btn_try}`}
                >
                  Show Retweets/likes
                </button>
              </div>
            </div>
          </div>
          {/* button */}
          {/* try free */}
          <div className=" mt-5 ">
            <div
              className={`d-flex justify-content-between align-items-center  p-4 ${style.content_bg}`}
            >
              <div>
                <div className="d-flex">
                  <div>
                    {" "}
                    <span className={`text-primary ${style.icon_tryFree}`}>
                      <AiOutlineInfoCircle />
                    </span>
                  </div>
                  <div>
                    {" "}
                    <h5 className={`text-primary text-wrap`}>
                      {" "}
                      2/3 Keyword Monitors are in use.
                    </h5>
                    <p
                      className={`text-primary text-wrap text-md-start ${style.text_try}`}
                    >
                      Upgrade your plan to get more keyword monitors.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <span
                  className={`btn btn-outline-primary h5 bg-light ${style.btn_try}`}
                >
                  <AiOutlineSketch />
                  Try for free
                </span>
              </div>
            </div>
          </div>
          {/* try free */}

          <div className={`${style.retrived} mt-5`}>
            <div className={style.number}>
              <h2>Number of Tweets retrieved</h2>
            </div>
            <div className={style.title}>
              <div>
                <p className={style.progressText}>
                  Retrieved in the last 24 hours / Maximum number of Tweets
                  retrieved per day
                  <span>
                    <BsQuestionCircle />
                  </span>
                </p>
              </div>
              <div className={style.progressBar}>
                <label>0 / 5</label>
                <progress id="file" value="0" max="5">
                  {" "}
                  0{" "}
                </progress>
              </div>
            </div>
            <div className="p-3">
              <button className={style.btn}>
                upgrade and increase your limit
              </button>
            </div>
          </div>

          <div className={style.retrived}>
            <div className={style.number}>
              <h2>Note</h2>
            </div>
            <div className={style.list}>
              <ul>
                <li>
                  Keyword Monitor uses the Twitter API to retrieve Tweets and
                  may not be able to retrieve all Tweets in some cases.
                </li>
                <li>
                  When a large number of Tweets such as campaign Tweets are
                  sent, some Tweets may not be able to be retrieved.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonitorSetting;
