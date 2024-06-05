import React from "react";
import TweetList from "components/tweetList";
import { Link } from "react-router-dom";
import style from "./tweet.module.scss";
import DefaultLayout from "layout/defaultLayout";
import Comments from "components/comment";
import DraftTweets from "components/drafttweets";

const Tweets = () => {
  return (
    // <DefaultLayout navItems={List}>
    <div style={{ background: "rgb(242, 245, 249)" }}>
      <div style={{ maxWidth: "600px" }}>
        <DraftTweets />
        <div style={{ marginTop: "8px" }}>
          <Comments />
          <Comments />
          <Comments />
          <Comments />
          <Comments />
          <Comments />
        </div>
      </div>
    </div>
    // </DefaultLayout>
  );
};

export default Tweets;
