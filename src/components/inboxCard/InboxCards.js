import React from "react";
import style from "./inboxcard.module.scss";
import { HiOutlineUserAdd } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiMessageRounded } from "react-icons/bi";
import { TbArrowsSort } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";

function InboxCards() {
  return (
    <>
      <div className={style.headerline}>
        <hr/>
      </div>
      <div className={style.box}>
        {/*================ Cards Header==================*/}
        {/* ===================  card 1 ===================*/}
        <div className={style.card}>
          <div className={style.cardleftside}>
            <div className={style.cardImg}>
              <img src="assets/images/inboxcardimg/img.jpg" alt="3d img" />
            </div>
            <div className={style.carddata}>
              <div className={style.cardname}>
                <h5>de brunye</h5>
                <span className={style.cardnamedes}>@qcsht1658314469</span>
              </div>
              <div className={style.follwing}>
                <div className={style.span1}>
                  <span>
                    <h6>5</h6>
                  </span>
                  <span>Followers</span>
                </div>
                <div className={style.span2}>
                  <span>
                    <h6>3</h6>
                  </span>
                  <span>Followings</span>
                </div>
                <div className={style.span3}>
                  <span>
                    <h6>2</h6>
                  </span>
                  <span>Tweets</span>
                </div>
              </div>
              <div className={style.keywordbtn}>
                <button>Tweeted Keyword</button>
                <span className={style.keywordspan}>an hour ago</span>
              </div>
            </div>
          </div>
          <div className={style.users}>
            <div className={style.userbtn1}>
              <button>
                <span>
                  <HiOutlineUserAdd />
                </span>
                Follow
              </button>
            </div>
            <div className={style.userbtn2}>
              <button>
                <span>
                  <RiDeleteBin6Line />
                </span>
                Hide
              </button>
            </div>
          </div>
        </div>
        <div className={style.cardbody}>
          <div className={style.cardbodyleft}>
            <span>Replying to @buckeyeboobs</span>
            <p>
              I'll be happy to preview any swimsuits to make sure they fit. DM
              pics
            </p>
            <div className={style.bodyimage}>
              <img src="assets/images/inboxcardimg/img.jpg" alt="3d img" />
            </div>
            <div className={style.bodyicons}>
              <div className={style.icon1}>
                <span className={style.messageicon}>
                  <BiMessageRounded  />
                </span>
              </div>
              <div className={style.icon2}>
                <span className={style.messageicon}>
                  <TbArrowsSort />
                </span>
              </div>
              <div className={style.icon3}>
                <span className={style.messageicon}>
                  <AiOutlineHeart  />
                </span>
              </div>
            </div>
          </div>
          <div className={style.bodyright}>
            <p>an hour ago</p>
          </div>
        </div>
      </div>
      <div className={style.headerline}>
        <hr/>
      </div>
      {/* ===================== card 2 ====================== */}
      <div className={style.box2}>
        <div className={style.card}>
          <div className={style.cardleftside}>
            <div className={style.cardImg}>
              <img src="assets/images/inboxcardimg/img2.jpg" alt="3d img" />
            </div>
            <div className={style.carddata}>
              <div className={style.cardname}>
                <h5>Zeeshan Haider</h5>
                <span>@zeeshan1791</span>
              </div>
              <div className={style.follwing}>
                <div className={style.span1}>
                  <span>
                    <h6>5</h6>
                  </span>
                  <span>Followers</span>
                </div>
                <div className={style.span2}>
                  <span>
                    <h6>3</h6>
                  </span>
                  <span>Followings</span>
                </div>
                <div className={style.span3}>
                  <span>
                    <h6>2</h6>
                  </span>
                  <span>Tweets</span>
                </div>
              </div>
              <div className={style.keywordbtn}>
                <button>Tweeted Keyword</button>
                <span className={style.keywordspan}>Yesterday</span>
              </div>
            </div>
          </div>
          <div className={style.users}>
            <div className={style.userbtn1}>
              <button>
                <span>
                  <HiOutlineUserAdd />
                </span>
                Follow
              </button>
            </div>
            <div className={style.userbtn2}>
              <button>
                <span>
                  <RiDeleteBin6Line />
                </span>
                Hide
              </button>
            </div>
          </div>
        </div>
        <div className={style.cardbody}>
          <div className={style.cardbodyleft}>
            <span>Replying to @buckeyeboobs</span>
            <p>
              I'll be happy to preview any swimsuits to make sure they fit. DM
              pics
            </p>
            {/* <div className={style.bodyimage}>
              <img src="assets/images/inboxcardimg/img.jpg" alt="3d image" />
            </div> */}
            <div className={style.bodyicons}>
              <div className={style.icon1}>
                <span className={style.messageicon}>
                  <BiMessageRounded  />
                </span>
              </div>
              <div className={style.icon2}>
                <span className={style.messageicon}>
                  <TbArrowsSort  />
                </span>
              </div>
              <div className={style.icon3}>
                <span className={style.messageicon}>
                  <AiOutlineHeart  />
                </span>
              </div>
            </div>
          </div>
          <div className={style.bodyright}>
            <p>Yesterday</p>
          </div>
        </div>
      </div>
      <br />
      {/* =====================  card 3 ====================== */}
      <div className={style.headerline}>
        <hr/>
      </div>
      <div className={style.box3}>
        <div className={style.card}>
          <div className={style.cardleftside}>
            <div className={style.cardImg}>
              <img src="assets/images/inboxcardimg/img3.jpg" alt="3d img" />
            </div>
            <div className={style.carddata}>
              <div className={style.cardname}>
                <h5>Syed Ahsan Ali</h5>
                <span>@syedahsanali</span>
              </div>
              <div className={style.follwing}>
                <div className={style.span1}>
                  <span>
                    <h6>5</h6>
                  </span>
                  <span>Followers</span>
                </div>
                <div className={style.span2}>
                  <span>
                    <h6>3</h6>
                  </span>
                  <span>Followings</span>
                </div>
                <div className={style.span3}>
                  <span>
                    <h6>2</h6>
                  </span>
                  <span>Tweets</span>
                </div>
              </div>
              <div className={style.keywordbtn}>
                <button>Tweeted Keyword</button>
                <span className={style.keywordspan}>2 days ago</span>
              </div>
            </div>
          </div>
          <div className={style.users}>
            <div className={style.userbtn1}>
              <button>
                <span>
                  <HiOutlineUserAdd />
                </span>
                Follow
              </button>
            </div>
            <div className={style.userbtn2}>
              <button>
                <span>
                  <RiDeleteBin6Line />
                </span>
                Hide
              </button>
            </div>
          </div>
        </div>
        <div className={style.cardbody}>
          <div className={style.cardbodyleft}>
            <span>Replying to @buckeyeboobs</span>
            <p>
              I'll be happy to preview any swimsuits to make sure they fit. DM
              pics
            </p>
            <div className={style.bodyimage}>
              <img src="assets/images/inboxcardimg/img3.jpg" alt="3d img" />
            </div>
            <div className={style.bodyicons}>
              <div className={style.icon1}>
                <span className={style.messageicon}>
                  <BiMessageRounded  />
                </span>
              </div>
              <div className={style.icon2}>
                <span className={style.messageicon}>
                  <TbArrowsSort />
                </span>
              </div>
              <div className={style.icon3}>
                <span className={style.messageicon}>
                  <AiOutlineHeart  />
                </span>
              </div>
            </div>
          </div>
          <div className={style.bodyright}>
            <p>2 days ago</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default InboxCards;
