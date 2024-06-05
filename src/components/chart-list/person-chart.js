import React from "react";

const PersonChart = ({ personOpen, personChatData, setPersonOpen }) => {
  return (
    <>
      {personOpen && (
        <div
          className={`chatbar person sidemenu position-fixed ${
            personOpen && "showPersonChart"
          }`}
        >
          <ul className="p-2 mb-0 border-top border-right border-bottom chat_head">
            <span className="close-icon">
              <img
                alt=""
                src="assets/images/icons/close.svg"
                onClick={() => {
                  setPersonOpen(false);
                }}
              />
            </span>
            <li>
              <img
                alt=""
                src={personChatData?.profile}
                className="pimg"
                width="auto"
                height="28"
              />{" "}
              <span className="font-weight-bold pname">
                {personChatData?.name}
              </span>
              <span></span>
            </li>
          </ul>
          <ul className="networks_ border-right p-2 mb-0">
            <li className="msg msg-i">Hi, How are you?</li>
            <li className="msg msg-u">I'm fine, whats about you?</li>
            <li className="msg msg-i">
              fine! i have seen your laptop on sale, its just looks perfect for
              my office work.
            </li>
            <li className="msg msg-u">That's good !</li>
          </ul>
          <ul className="nav nav-pills border-top justify-content-between ">
            <li className="search-item w-100 ">
              <form
                className="my-lg-0 ml-auto d-flex flex-row"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  className="form-control"
                  type="text"
                  placeholder="Type message.."
                />
                <button className="btn my-sm-0" type="submit">
                  <img alt="" src="assets/images/icons/send.png" />
                </button>
              </form>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default PersonChart;
