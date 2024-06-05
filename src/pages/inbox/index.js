import React from "react";
import InboxHeader from "components/inboxheader";
import InboxCards from "components/inboxCard/InboxCards";

const Inbox = () => {
  return (
    <div>
      <InboxHeader
        heading={"Inbox"}
        title={"Tweets with mentions and monitored keywords"}
      />
      <InboxCards />
    </div>
  );
};

export default Inbox;
