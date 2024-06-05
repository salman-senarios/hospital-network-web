import InboxHeader from "components/inboxheader";
import React from "react";

const Mentions = () => {
  return (
    <>
      <InboxHeader
        heading={"Mentions"}
        title={"Tweets mentioning you."}
        value={"0"}
      />
    </>
  );
};

export default Mentions;
