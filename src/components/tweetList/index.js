import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import style from "./tweetList.module.scss";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const List = [
  { title: "Scheduled Tweets", to: "/comments" },
  { title: "Tweets", to: "/accounts" },
  {
    title: "Calendar",
    to: "/engagements",
  },
  {
    title: "Draft Tweets",
    to: "/postingtimes",
  },
  {
    title: "Media",
    to: "/drafttweets",
  },
];

const TweetList = (props) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const currentRoute = location.pathname;

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div onClick={handleToggle}>
      <div className={style.item}>
        <span>{props.heading}</span>
      </div>

      {
        <div className={style.options_container}>
          {List.map((m) => {
            return (
              <div className={style.option} key={m.title}>
                <Link
                  to={m.to || "#"}
                  className={m.to === currentRoute ? style.active : ""}
                >
                  <span>{m.title}</span>
                  {m.type && <span>{m.type}</span>}
                </Link>
              </div>
            );
          })}
        </div>
      }
    </div>
  );
};

export default TweetList;
