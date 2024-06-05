import InboxHeader from "components/inboxheader";
import React from "react";

const Keywords = () => {
  return (
    <>
      <InboxHeader
        heading={"Tweets containing a keyword"}
        title={"Tweets containing the monitored keywords."}
      />
    </>
  );
};

export default Keywords;
