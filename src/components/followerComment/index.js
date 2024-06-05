import React from "react";
import style from "./followerComment.module.scss";
import { BiUserPlus } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";

const FollowerComment = () => {
  return (
    <>
      <span className={style.line}>
        <h2 className={style.day_title}>Today</h2>
      </span>
      <div className={`container ${style.main}  p-0 m-0 `}>
        <div className={`d-flex justify-content-between pt-2`}>
          <div className=" ">
            <div className="d-flex">
              <div className="flex-shrink-0">
                <img
                  src="/assets/images/profile.png"
                  alt="image"
                  className={style.img}
                />
              </div>

              <div className="pl-3">
                <h6 className={style.id_name}> Id Name </h6>
                <p className={style.id_name_des}> @idname</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="pt-1 pl-lg-5 l-md-0 pl-sm-0 ">
              <ul className={`pl-2 ${style.counter_list}`}>
                <li className={`pl-0 ${style.counter_item}`}>
                  <span className={style.tweet_count}>110 </span>
                  <span className={`text-secondary ${style.tweet_title}`}>
                    Following
                  </span>
                </li>
                <li className={`pl-3 ${style.counter_item}`}>
                  <span className={style.tweet_count}>70 </span>
                  <spna className={`text-secondary ${style.tweet_title}`}>
                    Followers
                  </spna>
                </li>
                <li className={`pl-3 ${style.counter_item}`}>
                  <span className={style.tweet_count}>18</span>
                  <span className={`text-secondary ${style.tweet_title}`}>
                    Tweets
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="ml-2 text-center">
            <div className="">
              <button className={style.btn}>
                <BiUserPlus className={style.icon} />
                <span>Follow</span>
              </button>
              <div className={`text-center ${style.tab_container}`}>
                <ul className={style.tab_list}>
                  <li className={style.tab_item}>
                    <RiDeleteBin5Line className={style.del_icon} />
                    <span className={style.hide_txt}>Hide</span>
                  </li>
                  <li className={style.tab_item}>
                    <span
                      className={`badge p-2 text-success rounded-pill ${style.badge_follower}`}
                    >
                      Followers you{" "}
                    </span>
                  </li>
                  <li className={style.tab_item}>
                    {/* <span className={`badge rounded-pill ${style.badge_ina} `}>
                      Inactive
                    </span> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ========================= card 2 ============================*/}
      <span className={style.line}>
        <h2 className={style.day_title}>Yesterday</h2>
      </span>
      <div className={`container ${style.main}  p-0 m-0 `}>
        <div className={`d-flex justify-content-between pt-2`}>
          <div className=" ">
            <div className="d-flex">
              <div className="flex-shrink-0">
                <img
                  src="/assets/images/profile2.jpg"
                  alt="image"
                  className={style.img}
                />
              </div>

              <div className="pl-3">
                <h6 className={style.id_name}> Mehvish Ali </h6>
                <p className={style.id_name_des}> @Mehvish13655062</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="pt-1 pl-lg-5 l-md-0 pl-sm-0 ">
              <ul className={`pl-2 ${style.counter_list}`}>
                <li className={`pl-0 ${style.counter_item}`}>
                  <span className={style.tweet_count}>110 </span>
                  <span className={`text-secondary ${style.tweet_title}`}>
                    Following
                  </span>
                </li>
                <li className={`pl-3 ${style.counter_item}`}>
                  <span className={style.tweet_count}>70 </span>
                  <spna className={`text-secondary ${style.tweet_title}`}>
                    Followers
                  </spna>
                </li>
                <li className={`pl-3 ${style.counter_item}`}>
                  <span className={style.tweet_count}>18</span>
                  <span className={`text-secondary ${style.tweet_title}`}>
                    Tweets
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="ml-2 text-center">
            <div className="">
              <button className={style.btn}>
                <BiUserPlus className={style.icon} />
                <span>Follow</span>
              </button>
              <div className={`text-center ${style.tab_container}`}>
                <ul className={style.tab_list}>
                  <li className={style.tab_item}>
                    <RiDeleteBin5Line className={style.del_icon} />
                    <span className={style.hide_txt}>Hide</span>
                  </li>
                  <li className={style.tab_item}>
                    <span
                      className={`badge p-2 text-success rounded-pill ${style.badge_follower}`}
                    >
                      Followers you{" "}
                    </span>
                  </li>
                  <li className={style.tab_item}>
                    <span className={`badge rounded-pill ${style.badge_ina} `}>
                      Inactive
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ======================== card 3 ======================= */}
      <span className={style.line}>
        <h2 className={style.day_title}>30 July, 2022</h2>
      </span>
      <div className={`container ${style.main}  p-0 m-0 `}>
        <div className={`d-flex justify-content-between pt-2`}>
          <div className=" ">
            <div className="d-flex">
              <div className="flex-shrink-0">
                <img
                  src="/assets/images/profile3.jpg"
                  alt="image"
                  className={style.img}
                />
              </div>

              <div className="pl-3">
                <h6 className={style.id_name}> Aima Khan </h6>
                <p className={style.id_name_des}> @Kha38622937Aima</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="pt-1 pl-lg-5 l-md-0 pl-sm-0 ">
              <ul className={`pl-2 ${style.counter_list}`}>
                <li className={`pl-0 ${style.counter_item}`}>
                  <span className={style.tweet_count}>110 </span>
                  <span className={`text-secondary ${style.tweet_title}`}>
                    Following
                  </span>
                </li>
                <li className={`pl-3 ${style.counter_item}`}>
                  <span className={style.tweet_count}>70 </span>
                  <spna className={`text-secondary ${style.tweet_title}`}>
                    Followers
                  </spna>
                </li>
                <li className={`pl-3 ${style.counter_item}`}>
                  <span className={style.tweet_count}>18</span>
                  <span className={`text-secondary ${style.tweet_title}`}>
                    Tweets
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="ml-2 text-center">
            <div className="">
              <button className={style.btn}>
                <BiUserPlus className={style.icon} />
                <span>Follow</span>
              </button>
              <div className={`text-center ${style.tab_container}`}>
                <ul className={style.tab_list}>
                  <li className={style.tab_item}>
                    <RiDeleteBin5Line className={style.del_icon} />
                    <span className={style.hide_txt}>Hide</span>
                  </li>
                  <li className={style.tab_item}>
                    <span
                      className={`badge p-2 text-success rounded-pill ${style.badge_follower}`}
                    >
                      Followers you{" "}
                    </span>
                  </li>
                  <li className={style.tab_item}>
                    <span className={`badge rounded-pill ${style.badge_ina} `}>
                      Inactive
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ======================== card 4 ======================*/}
      <span className={style.line}>
        <h2 className={style.day_title}>28 July, 2022</h2>
      </span>
      <div className={`container ${style.main}  p-0 m-0 `}>
        <div className={`d-flex justify-content-between pt-2`}>
          <div className=" ">
            <div className="d-flex">
              <div className="flex-shrink-0">
                <img
                  src="/assets/images/profile4.jpg"
                  alt="image"
                  className={style.img}
                />
              </div>

              <div className="pl-3">
                <h6 className={style.id_name}>Zakir Kazmi </h6>
                <p className={style.id_name_des}> @ZakirKazmi9</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="pt-1 pl-lg-5 l-md-0 pl-sm-0 ">
              <ul className={`pl-2 ${style.counter_list}`}>
                <li className={`pl-0 ${style.counter_item}`}>
                  <span className={style.tweet_count}>110 </span>
                  <span className={`text-secondary ${style.tweet_title}`}>
                    Following
                  </span>
                </li>
                <li className={`pl-3 ${style.counter_item}`}>
                  <span className={style.tweet_count}>70 </span>
                  <spna className={`text-secondary ${style.tweet_title}`}>
                    Followers
                  </spna>
                </li>
                <li className={`pl-3 ${style.counter_item}`}>
                  <span className={style.tweet_count}>18</span>
                  <span className={`text-secondary ${style.tweet_title}`}>
                    Tweets
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="ml-2 text-center">
            <div className="">
              <button className={style.btn}>
                <BiUserPlus className={style.icon} />
                <span>Follow</span>
              </button>
              <div className={`text-center ${style.tab_container}`}>
                <ul className={style.tab_list}>
                  <li className={style.tab_item}>
                    <RiDeleteBin5Line className={style.del_icon} />
                    <span className={style.hide_txt}>Hide</span>
                  </li>
                  <li className={style.tab_item}>
                    <span
                      className={`badge p-2 text-success rounded-pill ${style.badge_follower}`}
                    >
                      Followers you{" "}
                    </span>
                  </li>
                  <li className={style.tab_item}>
                    {/* <span className={`badge rounded-pill ${style.badge_ina} `}>
                      Inactive
                    </span> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FollowerComment;
