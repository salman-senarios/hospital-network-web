import React from "react";

import style from "./Firsttab.module.scss";

const Firsttab = () => {
  return (
    <div className={style.main}>
      <div className={style.filter1}>
        <ul>
          <div className={style.list_mian}>
            <li>
              <label class={style.container_two}>
                Followers
                <input type="checkbox" />
                <span class={style.checkmark}></span>
              </label>
            </li>
          </div>
          <div className={style.list_mian}>
            <li>
              <label class={style.container_two}>
                Not following
                <input type="checkbox" />
                <span class={style.checkmark}></span>
              </label>
            </li>
          </div>

          <div className={style.list_mian}>
            <li>
              <label class={style.container_two}>
                Have never followerd
                <input type="checkbox" />
                <span class={style.checkmark}></span>
              </label>
            </li>
          </div>

          <div className={style.list_mian}>
            <li>
              <label class={style.container_two}>
                Not pendding approval
                <input type="checkbox" />
                <span class={style.checkmark}></span>
              </label>
            </li>
          </div>

          <div className={style.list_mian}>
            <li>
              <label class={style.container_two}>
                Over 1,000 followers
                <input type="checkbox" />
                <span class={style.checkmark}></span>
              </label>
            </li>
          </div>

          <div className={style.list_mian}>
            <li>
              <label class={style.container_two}>
                Active
                <input type="checkbox" />
                <span class={style.checkmark}></span>
              </label>
            </li>
          </div>

          <div className={style.list_mian}>
            <li>
              <label class={style.container_two}>
                Not blocked
                <input type="checkbox" />
                <span class={style.checkmark}></span>
              </label>
            </li>
          </div>

          <div className={style.list_mian}>
            <li>
              <label class={style.container_two}>
                Not muted
                <input type="checkbox" />
                <span class={style.checkmark}></span>
              </label>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Firsttab;
