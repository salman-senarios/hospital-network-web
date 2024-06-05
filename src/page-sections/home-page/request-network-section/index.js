/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { requestNetwork } from "./helper";

const RequestNetwork = () => {
  const [list, setList] = useState(requestNetwork);

  const handleRemove = (i) => {
    const temp = [...list];
    temp.splice(i, 1);
    setList([...temp]);
  };

  return (
    <>
      {list?.length > 0 && (
        <div className="card requests">
          <div className="card-header bg-white border-0 pb-0">
            <h6>
              <img
                alt=""
                src="assets/images/icons/Icon awesome-user-friends.svg"
                className="mr-2"
              />
              Network Requests
              <a
                className="text-body float-right see_txt "
                style={{ cursor: "pointer" }}
              >
                See all
              </a>
              <a className="text-body float-right see_icon">
                <img
                  alt=""
                  src="assets/images/icons/Icon ionic-ios-eye.svg"
                  style={{ cursor: "pointer" }}
                />
              </a>
            </h6>
          </div>

          <div className="card-body p-0">
            {list?.map((ele, index) => (
              <div
                key={index}
                className="frequest border-bottom d-flex justify-content-between align-items-center flex-nowrap p-3"
              >
                <div className="mr-1 grow-1">
                  <img alt="" src={ele.profile} />
                </div>
                <h5 className="mr-2 grow-3">
                  {ele.name}
                  <small>{ele.location}</small>
                </h5>
                <div className="btns d-flex justify-content-between grow-1">
                  <button
                    className="btn btn-light mr-2"
                    onClick={() => handleRemove(index)}
                  >
                    Ignore
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleRemove(index)}
                  >
                    Confirm
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

export default RequestNetwork;
