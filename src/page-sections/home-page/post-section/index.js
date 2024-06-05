/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { menuDropdown, posts } from "./helper";

const PostSection = () => {
  const [postDropdownOpen, setPostDropdownOpen] = useState(null);

  const handledlePostMenuClick = (index) => {
    if (postDropdownOpen === index) {
      setPostDropdownOpen(null);
    } else {
      setPostDropdownOpen(index);
    }
  };
  return (
    <>
      {posts?.map((ele, index) => (
        <div className="card post" key={index}>
          <div className="card-body">
            <span
              className={`label ${
                ele.label === "BUY" ? "label-success" : "label-danger"
              } text-white pl-2 py-1`}
            >
              {ele.label}
            </span>

            <div className="dropdown post_actions">
              <button
                className="bg-transparent border-0 outline-0"
                type="button"
                onClick={() => handledlePostMenuClick(index)}
              >
                <img alt="" src="assets/images/icons/actions.svg" />
              </button>

              {postDropdownOpen === index && (
                <div className="dropdown-menu dropdown-menu-right d-block">
                  {menuDropdown.map((m, i) => (
                    <a
                      className="dropdown-item "
                      key={i}
                      onClick={() => setPostDropdownOpen(null)}
                      style={{ cursor: "pointer" }}
                    >
                      {m}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="card-header p-0 bg-transparent border-0 d-flex mb-3">
              <div>
                <img alt="" src={ele.profile.img} className="mr-2" />
              </div>
              <div className="txt-light txt-sm">
                <span className="d-block">
                  <strong>{ele.profile.name} </strong> {ele.profile.location}
                </span>
                <span className="d-block">{ele.profile.desigination}</span>
                <span className="d-block">{ele.profile.dateTime}</span>
              </div>
            </div>

            <h5>{ele.title}</h5>
            <p>
              {ele.discription}
              <span className="txt-light">...see more</span>
            </p>
            <div className="price_location font-19">
              <span className="mr-2">
                Price: <span className="color-primary">{ele.price}</span>
              </span>
              <span className="float-right">
                Stock Location:
                <span className="color-primary">{ele.stockLocation}</span>
              </span>

              {ele.link && (
                <p className="mt-3">
                  <img
                    alt=""
                    src="assets/images/icons/Icon awesome-file-alt.svg"
                  />{" "}
                  <a href={ele.link} target={"_blank"} rel="noreferrer">
                    {ele.link}
                  </a>
                </p>
              )}
            </div>

            <div className={`${ele.more && "more-imgs"} mt-3`}>
              {ele.imges?.map((i, ind, imgArr) => (
                <img
                  key={ind}
                  alt=""
                  src={i}
                  className={`${
                    imgArr?.length > 1 ? "w-50 d-inline-block" : "w-100 d-block"
                  }`}
                />
              ))}

              {ele.more && <span>3+</span>}
            </div>

            <div className="mt-3 post_stats">
              <ul className="list-inline d-inline-block pt-2 mb-0 mr-3">
                <li className="list-inline-item font-15">
                  <img
                    alt=""
                    src={`assets/images/icons/${
                      ele.like ? "Like.svg" : "Like-black.svg"
                    }`}
                  />{" "}
                  {ele.likesCount}
                </li>
                <li className="list-inline-item font-15">
                  <img alt="" src="assets/images/icons/comment.png" />{" "}
                  {ele.commentsCount}
                </li>
                <li className="list-inline-item font-15">
                  <img
                    alt=""
                    src="assets/images/icons/Icon ionic-md-share.svg"
                  />{" "}
                  {ele.shareCount}
                </li>
                <li className="list-inline-item font-15">
                  <img
                    alt=""
                    src="assets/images/icons/Icon ionic-ios-eye.svg"
                  />{" "}
                  {ele.viewCount}
                </li>
              </ul>
              <button className="btn btn-primary float-right font-17">
                <img alt="" src="assets/images/icons/Chat with seller.png" />{" "}
                Chat with {ele.label === "BUY" ? "Buyer" : "Seller"}
              </button>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-between text-center">
            <button className="bg-transparent border-0 outline-0 w-33 mx-4">
              <img
                alt=""
                src={`assets/images/icons/${
                  ele.like ? "Like.svg" : "Like-black.svg"
                }`}
              />{" "}
              Like
            </button>
            <button className="bg-transparent border-0 outline-0 w-33 mx-4">
              <img alt="" src="assets/images/icons/comment.png" /> Comment
            </button>
            <button className="bg-transparent border-0 outline-0 w-33 mx-4">
              <img alt="" src="assets/images/icons/Icon ionic-md-share.svg" />{" "}
              Share
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default PostSection;
