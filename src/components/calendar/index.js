import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import style from "./calendar.module.scss";
import { Link } from "react-router-dom";
const Calendar = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <div className={style.head}>
        <div className={style.headheading}>
          <h5>Posting Times</h5>
        </div>
        <div className={style.icon} onClick={handleToggle}>
          <IoEllipsisHorizontalSharp />
          {open ? (
            <div className={style.model}>
              {" "}
              <div>Export calendar</div>{" "}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className={style.calendar}>
        <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
        <div className={style.time}>
          Time zone: Pacific/Fakaofo <Link to="#"> (Change)</Link>
        </div>
      </div>
    </>
  );
};

export default Calendar;
