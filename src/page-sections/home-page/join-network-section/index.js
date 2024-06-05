/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { joinNetworks } from "./helper";

const JoinNetworkSection = () => {
  const [list, setList] = useState(joinNetworks);

  const handleIgnore = (i) => {
    const temp = [...list];
    temp.splice(i, 1);
    setList([...temp]);
  };

  return (
    <>
      {list?.length > 0 && (
        <div className="card">
          <div className="card-header bg-white border-0 pb-0">
            <h6>
              <img alt="" src="assets/images/icons/Icon feather-activity.svg" />
              &nbsp;New join in network
              <a className="text-body float-right">
                <img alt="" src="assets/images/icons/Icon open-reload.svg" />
              </a>
            </h6>
          </div>
          <div className="card-body new_join p-0 d-flex flex-wrap">
            {list?.map((ele, ind) => (
              <div
                key={ind}
                className={`frequest w-50 border-bottom ${
                  (1 + ind) % 2 === 1 && "border-right"
                } p-3 text-center d-flex flex-column justify-content-center`}
              >
                <div>
                  <img alt="" src={ele.profile} className="mr-1" />
                </div>
                <h5 className="my-2">
                  {ele.name}
                  <small>{ele.location}</small>
                </h5>
                <div className="btns">
                  <button
                    className="btn btn-light mr-2"
                    onClick={() => handleIgnore(ind)}
                  >
                    Add Friend
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleIgnore(ind)}
                  >
                    Ignore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default JoinNetworkSection;
