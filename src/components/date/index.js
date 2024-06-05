import React, { useState } from "react";
import DatePicker from "react-datepicker";

import style from "./date.module.scss";
const CustomDateRangeInputs = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.rang}>
          <DatePicker
            placeholderText="Select date"
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default CustomDateRangeInputs;
