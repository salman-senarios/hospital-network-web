import React, { useEffect, useState } from "react";
// import style from "./tweethistory.modules.scss";
import style from "./tweethistory.module.scss";
import { BsBoxArrowInDown } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import { BsSearch } from "react-icons/bs";
import { FiSliders } from "react-icons/fi";
import CustomDateRangeInputs from "components/date";

const Tweethistory = () => {
  const [filterItem, setfilterItem] = useState(false);

  const list = () => {
    setfilterItem((prev) => !prev);
  };

  return (
    <div style={{ background: "rgb(242, 245, 249)" }}>
      <div className={style.container}>
        <div className={style.tweet_header}>
          <div>
            <h1>Tweeet history</h1>
          </div>
          <div className={style.date}>
            <CustomDateRangeInputs />
            <div>
              <BsBoxArrowInDown className={style.icons} />

              <GoGraph className={style.icons} />
            </div>
          </div>
        </div>
        <div className={style.main_search}>
          <div className={style.searchbar}>
            <BsSearch className={style.search_icon} />
            <input type="search" placeholder="search" />
            <div className={style.filter_icon} onClick={list}>
              <FiSliders />
            </div>
          </div>
        </div>
        <div className={style.text_box}>
          <span>
            <p>
              Sorry there are no Tweets to display .Please try changing the
              filter conditions
            </p>
          </span>
        </div>
        {filterItem ? (
          <div className={style.filter_container}>
            <div className={style.filter1}>
              <ul>
                <li>
                  <input type="checkbox" id="Exclude" name="Exclude" />
                  <label for="Exclude">Exclude mentions</label>
                </li>
                <li>
                  <input type="checkbox" id="Exclude" name="Exclude" />
                  <label for="Exclude">Exclude mentions</label>
                </li>
                <li>
                  <input type="checkbox" id="retweet" name="retweet" />
                  <label for="retweet">Exclude Retweets</label>
                </li>
                <li>
                  <input type="checkbox" id="media" name="media" />
                  <label for="media">With media</label>
                </li>
              </ul>
            </div>
            <div className={style.filterS}>
              <ul>
                <li>
                  <input type="radio" id="newest" name="radiobutton" />
                  <label for="newest">
                    <span>Newest first</span>
                  </label>
                </li>
                <li>
                  <input type="radio" id="retweetsD" name="radiobutton" />
                  <label for="retweetsD">Retweets(decending)</label>
                </li>
                <li>
                  <input type="radio" id="retweetsA" name="radiobutton" />
                  <label for="retweetsA">Retweets(acending)</label>
                </li>
                <li>
                  <input type="radio" id="likesD" name="radiobutton" />
                  <label for="likesD">Likes(decending)</label>
                </li>
                <li>
                  <input type="radio" id="likesA" name="radiobutton" />
                  <label for="likesA">Likes(acending)</label>
                </li>
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Tweethistory;
