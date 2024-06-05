import React from "react";
import style from "./Account.module.scss";
import { BsExclamationTriangle } from "react-icons/bs";
import { IoDiamondOutline } from "react-icons/io5";
import { VscQuestion } from "react-icons/vsc";
import { AiOutlineCheck } from "react-icons/ai";

const AccountManager = () => {
  return (
    <>
      <div className={style.container}>
        {/* ===================   Header ====================== */}
        <div className={style.header}>
          <h4>Account managers</h4>
        </div>
        <hr style={{ width: "100%" }} />
        {/* ===================== Upgrade Part =======================*/}
        <div className={style.box1}>
          {/* <div className={style.upgradbox}> */}
          <div className={style.upgradebox}>
            <div className={style.divdata}>
              <div className={style.divIcon}>
                <span>
                  <BsExclamationTriangle
                    style={{ width: "30px", height: "20px" }}
                  />
                </span>
              </div>
              <div className={style.data}>
                <h6>Upgrade required.</h6>
                <p>Upgrade your plan to use account managers.</p>
              </div>
            </div>
            <div className={style.freebtn}>
              <button>
                <span>
                  <IoDiamondOutline
                    style={{
                      width: "17px",
                      height: "17px",
                      marginRight: "7px",
                    }}
                  />
                </span>
                Try It free
              </button>
            </div>
          </div>
          {/* </div> */}
        </div>
        {/* =================== Add user Portion ===================== */}
        <div className={style.box2}>
          {/* ===== header =====*/}
          <div className={style.headbox2}>
            <div className={style.heading}>
              <p>Manage a Twitter account with multiple users.</p>
            </div>
            <div className={style.addbtn}>
              <button type="add">+ Add</button>
            </div>
          </div>
          <hr style={{ width: "100%" }} />
          {/* ===== table =======*/}
          <div className={style.tbl}>
            <table className={style.table}>
              <thead>
                <tr>
                  <th>SocialDog User ID</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>945305</td>
                  <td>
                    naqvi1312@gmail.com<span className={style.span}>You</span>
                  </td>
                  <td>
                    <select className={style.selector}>
                      <option>Owner</option>
                      <option>Member</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/*====================  About container =================*/}
        <div className={style.Container2}>
          <div className={style.box3}>
            <div className={style.about}>
              <div className={style.heading2}>
                <p>About account managers</p>
              </div>
              <div className={style.paragraph}>
                <p>
                  Additional users can be added to manage @SyedAli51412 in
                  SocialDog.
                </p>
                <p>
                  A single Twitter account can be managed by multiple SocialDog
                  users.
                </p>
              </div>
            </div>
            {/* </div> */}
            {/*==== about role ====*/}
            <div className={style.roleheading}>
              <p>About roles</p>
            </div>
            {/* ========= table ======== */}
            <div className={style.tabl}>
              <table className={style.table2}>
                <thead>
                  <tr>
                    <th>Role</th>
                    <th>Tweet, manage followers etc.</th>
                    <th>
                      Account managers
                      <span>
                        <VscQuestion
                          style={{ fontSize: "20px", marginLeft: "5px" }}
                        />
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid rgb(136, 136, 136)" }}>
                    <td>Owner</td>
                    <td>
                      <span>
                        <AiOutlineCheck
                          style={{ fontSize: "20px", marginLeft: "60px" }}
                        />
                      </span>
                    </td>
                    <td>
                      <span>
                        <AiOutlineCheck
                          style={{ marginLeft: "60px", fontSize: "20px" }}
                        />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Member</td>
                    <td>
                      <AiOutlineCheck
                        style={{ marginLeft: "60px", fontSize: "20px" }}
                      />
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* ===base=== */}
          <div className={style.tablebase}>
            <div className={style.basedata}>
              <p>Each Twitter account must have an owner.</p>
              <p style={{ color: "#2e7fd5" }}>
                Managing a Twitter account with multiple SocialDog users{" "}
                <span></span>
              </p>
            </div>
          </div>
        </div>
        {/* ===== base ====== */}
        <div className={style.base}>
          <p>Manage another Twitter account</p>
        </div>
      </div>
    </>
  );
};

export default AccountManager;
