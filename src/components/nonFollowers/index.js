import React from "react";
import style from "./nonfollwers.module.scss";
import { BiUserMinus } from "react-icons/bi";
import { MdStarOutline } from "react-icons/md";

const NonFollowers = () => {
  return (
    <>
      <div className={`container ${style.main}  p-0 m-0 `}>
        <div className={`d-flex justify-content-between pt-2`}>
          <div className=" ">
            <div className="d-flex">
              <div className="flex-shrink-0">
                <img
                  src="/assets/images/profile7.jpg"
                  alt="image"
                  className={style.img}
                />
              </div>

              <div className="pl-3">
                <h6 className={style.id_name}> 𝙈𝙪𝙦𝙖𝙙𝙙𝙖𝙨 𝙅𝙖𝙛𝙧𝙞🦋</h6>
                <p className={style.id_name_des}>
                  {" "}
                  @Muqaddasjafrii Jageer-e-Ahl-e-Bait A.S❤
                </p>
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
                <BiUserMinus className={style.icon} />
                <span>Unfollow</span>
              </button>
              <div className={`text-center ${style.tab_container}`}>
                <ul className={style.tab_list}>
                  <li className={style.tab_item}>
                    <MdStarOutline className={style.del_icon} />
                    <span className={style.hide_txt}>Keep</span>
                  </li>
                  <li className={style.tab_item}></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ======================= card 2 ====================== */}
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
                <h6 className={style.id_name}>Nida J@ffery🖤 </h6>
                <p className={style.id_name_des}> @Nidaa_313🖤☠️@idname</p>
                <p>
                  SALAAM GHAZI 🙌 🇮🇳 hussaini ALHUMDULILLAH (ANA GHADEERI)♥️
                </p>
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
                <BiUserMinus className={style.icon} />
                <span>Unfollow</span>
              </button>
              <div className={`text-center ${style.tab_container}`}>
                <ul className={style.tab_list}>
                  <li className={style.tab_item}>
                    <MdStarOutline className={style.del_icon} />
                    <span className={style.hide_txt}>Keep</span>
                  </li>
                  <li className={style.tab_item}></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ============================ card 3  ==================== */}
      <div className={`container ${style.main}  p-0 m-0 `}>
        <div className={`d-flex justify-content-between pt-2`}>
          <div className=" ">
            <div className="d-flex">
              <div className="flex-shrink-0">
                <img
                  src="/assets/images/profile8.jpg"
                  alt="image"
                  className={style.img}
                />
              </div>

              <div className="pl-3">
                <h6 className={style.id_name}> Syed Zaidi </h6>
                <p className={style.id_name_des}> @SyedZai68813755</p>
                <p>
                  Proud to be Naqvi Syed💖 Pakistani🇵🇰 Han Mera Mola Ali a.s
                  🙌🏻❤Member Of.
                </p>
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
                <BiUserMinus className={style.icon} />
                <span>Unfollow</span>
              </button>
              <div className={`text-center ${style.tab_container}`}>
                <ul className={style.tab_list}>
                  <li className={style.tab_item}>
                    <MdStarOutline className={style.del_icon} />
                    <span className={style.hide_txt}>Keep</span>
                  </li>
                  <li className={style.tab_item}></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ========================== card 4 ==================== */}
      <div className={`container ${style.main}  p-0 m-0 `}>
        <div className={`d-flex justify-content-between pt-2`}>
          <div className=" ">
            <div className="d-flex">
              <div className="flex-shrink-0">
                <img
                  src="/assets/images/profile5.jpg"
                  alt="image"
                  className={style.img}
                />
              </div>

              <div className="pl-3">
                <h6 className={style.id_name}>گلِ زھرا </h6>
                <p className={style.id_name_des}>
                  {" "}
                  @syedaGulezahra2 Islamabad, Pakistan
                </p>
                <p>
                  مد اُس رب کے لیۓ جس نے ہمیں علی ع کا شیعہ بنایا —❤ Artist!.
                </p>
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
                <BiUserMinus className={style.icon} />
                <span>Unfollow</span>
              </button>
              <div className={`text-center ${style.tab_container}`}>
                <ul className={style.tab_list}>
                  <li className={style.tab_item}>
                    <MdStarOutline className={style.del_icon} />
                    <span className={style.hide_txt}>Keep</span>
                  </li>
                  <li className={style.tab_item}></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ====================== card 5 ===================== */}
      <div className={`container ${style.main}  p-0 m-0 `}>
        <div className={`d-flex justify-content-between pt-2`}>
          <div className=" ">
            <div className="d-flex">
              <div className="flex-shrink-0">
                <img
                  src="/assets/images/profile6.jpg"
                  alt="image"
                  className={style.img}
                />
              </div>

              <div className="pl-3">
                <h6 className={style.id_name}>گ@anam__abbas</h6>
                <p className={style.id_name_des}>
                  {" "}
                  @Shiaism_Threads Lahore, Pakistan🇵🇰
                </p>
                <p>
                  ||۳۱۳|| The Poor is one who does not have any Friend. -Imam
                  Ali۴||
                </p>
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
                <BiUserMinus className={style.icon} />
                <span>Unfollow</span>
              </button>
              <div className={`text-center ${style.tab_container}`}>
                <ul className={style.tab_list}>
                  <li className={style.tab_item}>
                    <MdStarOutline className={style.del_icon} />
                    <span className={style.hide_txt}>Keep</span>
                  </li>
                  <li className={style.tab_item}></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ======================= card 6 ==================== */}
      <div className={`container ${style.main}  p-0 m-0 `}>
        <div className={`d-flex justify-content-between pt-2`}>
          <div className=" ">
            <div className="d-flex">
              <div className="flex-shrink-0">
                <img
                  src="/assets/images/profile7.jpg"
                  alt="image"
                  className={style.img}
                />
              </div>

              <div className="pl-3">
                <h6 className={style.id_name}>Syeda Dure Najaf</h6>
                <p className={style.id_name_des}>
                  {" "}
                  @Shiaism_Threads Lahore, Pakistan🇵🇰
                </p>
                <p>
                  {" "}
                  Keep list No one absolutely no one can close the door that God
                  has open for you.😊🌍
                </p>
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
                <BiUserMinus className={style.icon} />
                <span>Unfollow</span>
              </button>
              <div className={`text-center ${style.tab_container}`}>
                <ul className={style.tab_list}>
                  <li className={style.tab_item}>
                    <MdStarOutline className={style.del_icon} />
                    <span className={style.hide_txt}>Keep</span>
                  </li>
                  <li className={style.tab_item}></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ======================== card 7 ======================= */}
      <div className={`container ${style.main}  p-0 m-0 `}>
        <div className={`d-flex justify-content-between pt-2`}>
          <div className=" ">
            <div className="d-flex">
              <div className="flex-shrink-0">
                <img
                  src="/assets/images/profile9.jpg"
                  alt="image"
                  className={style.img}
                />
              </div>

              <div className="pl-3">
                <h6 className={style.id_name}>گ@anam__abbas</h6>
                <p className={style.id_name_des}>
                  {" "}
                  @Shiaism_Threads Lahore, Pakistan🇵🇰
                </p>
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
                <BiUserMinus className={style.icon} />
                <span>Unfollow</span>
              </button>
              <div className={`text-center ${style.tab_container}`}>
                <ul className={style.tab_list}>
                  <li className={style.tab_item}>
                    <MdStarOutline className={style.del_icon} />
                    <span className={style.hide_txt}>Keep</span>
                  </li>
                  <li className={style.tab_item}></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NonFollowers;
