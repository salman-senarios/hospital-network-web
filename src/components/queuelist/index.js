import React from "react";
import DraftTweets from "components/drafttweets";
import Comments from "components/comment";
import DefaultLayout from "layout/defaultLayout";
const QueueList = () => {
  return (
    <DefaultLayout>
      <DraftTweets />
      <Comments />
    </DefaultLayout>
  );
};

export default QueueList;
