import React, { useEffect, useState } from "react";
import style from "./deleteAccount.module.scss";
import { IoCheckboxOutline } from "react-icons/io5";
import { FiLifeBuoy } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";

const DeleteAccount = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  //   useEffect(() => {
  //     alert("hello");
  //   }, []);
  return (
    <>
      <div className={style.container}>
        <div className={style.notification}>
          <div className={style.heading}>
            <h2>Getting too many notifications?</h2>
          </div>
          <div className={style.setting}>
            <div className={style.icon}>
              <IoCheckboxOutline />
            </div>
            <div>
              <p>Email and push notifications can be turned off from here. </p>
            </div>
            <div style={{ marginTop: "15px" }}>
              <button className={style.btn}>Notification setting</button>
            </div>
          </div>
        </div>

        <div className={style.notification} style={{ marginTop: "40px" }}>
          <div className={style.heading}>
            <h2>For those who don't know how to use it</h2>
          </div>
          <div className={style.setting}>
            <div className={style.icon}>
              <FiLifeBuoy />
            </div>
            <div>
              <p>See our help page for information on how to use SocialDog. </p>
            </div>
            <div>
              <p>Please check it out. </p>
            </div>

            <div style={{ marginTop: "15px" }}>
              <a href="#" className={style.help}>
                {" "}
                Help <HiOutlineExternalLink />
              </a>
            </div>
          </div>
          <div className={style.link}>
            <p>Frequently Asked Questions</p>
            <ul>
              <li>
                <a href="#">
                  How do you grow your followers on SocialDog?{" "}
                  <HiOutlineExternalLink />
                </a>
              </li>

              <li>
                <a href="#">
                  Can I stop receiving mailings? <HiOutlineExternalLink />
                </a>
              </li>

              <li>
                <a href="#">
                  Can I try it completely free? <HiOutlineExternalLink />
                </a>
              </li>
            </ul>
            <div>
              <a href="#" className={style.help}>
                View more <HiOutlineExternalLink />
              </a>
            </div>
          </div>
        </div>

        <div className={style.notification} style={{ marginTop: "40px" }}>
          <div className={style.heading}>
            <h2>Delete your SocialDog account</h2>
          </div>
          <div className={style.account}>
            <div className={style.subHeading}>
              If you would like to delete your SocialDog account, please fill
              out the questionnaire and click "Delete". <br /> This process
              cannot be undone
            </div>
            <div className={style.feedback}>
              <ol>
                <li value="1">
                  Please tell us the reason for deleting your account (multiple
                  selections possible) <span> * Required </span>
                </li>
                <div className={style.form}>
                  <div>
                    <label onClick={handleToggle}>
                      <input type="checkbox" />
                      There are no features I want.
                    </label>
                  </div>
                  {open ? (
                    <div className={style.hide}>
                      <div className={style.subDetail}>
                        <label>
                          What kind of features would you like to have?{" "}
                        </label>
                      </div>
                      <div className={style.comment}>
                        <input type="text" name="name" />
                      </div>
                    </div>
                  ) : (
                    ""
                  )}

                  <div>
                    <label>
                      <input type="checkbox" />
                      I'm no longer using the Twitter account
                    </label>
                  </div>

                  <div>
                    <label>
                      <input type="checkbox" />
                      I'm using another service (please enter the name of the
                      service below)
                    </label>
                  </div>

                  <div>
                    <label>
                      <input type="checkbox" />
                      It's difficult to use.
                    </label>
                  </div>

                  <div>
                    <label>
                      <input type="checkbox" />
                      Mail notifications/push notifications were annoying.
                    </label>
                  </div>

                  <div>
                    <label>
                      <input type="checkbox" />I don't need it.
                    </label>
                  </div>

                  <div>
                    <label>
                      <input type="checkbox" />
                      Other (please enter the reason(s) below)
                    </label>
                  </div>
                </div>
                <li>
                  Please describe the reason for deleting your account in the
                  field below. (Up to 1,000 double-byte characters)
                </li>
              </ol>
              <div>
                <textarea id="message" name="message" rows="5"></textarea>
              </div>
            </div>
          </div>
          <div className={style.btnCancel}>
            <button>Cancel</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteAccount;
