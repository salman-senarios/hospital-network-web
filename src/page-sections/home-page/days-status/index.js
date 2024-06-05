import React, { useState } from "react";

const DaysStatus = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      {open && (
        <div className="card">
          <div className="card-body welcome_note card-title-wrap pr-5">
            <span className="close_icon">
              <img
                alt=""
                src="assets/images/icons/close.svg"
                style={{ cursor: "pointer" }}
                onClick={() => setOpen(false)}
              />
            </span>
            <div className="row">
              <div className="col-sm-10 pr-2">
                <h5>Good morning, lisa valentine</h5>
                <p className="txt-light mb-1">
                  May this morning be light, blessed, enlightend, productive and
                  happy
                </p>
              </div>
              <div className="col-sm-2 pl-0 pr-5">
                <img alt="" src="assets/images/icons/sunset.svg" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DaysStatus;
