/* eslint-disable jsx-a11y/anchor-is-valid */
import CreatePost from "components/post-create";
import React, { useState } from "react";

const PostWrite = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <form>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-2 pr-0">
                <img alt="" src="assets/images/profile/person1.png" />
              </div>
              <div className="col-sm-10">
                <textarea
                  onClick={() => setOpen(true)}
                  className="form-control newtxt"
                  placeholder="What's going on? Hashtag.. @Mention.. Link"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="card-footer" style={{ position: "relative" }}>
            <ul className="nav nav-pills card-header-pills">
              <li className="nav-item">
                <a className="nav-link">
                  <img alt="" src="assets/images/icons/add.png" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <img alt="" src="assets/images/icons/gallery.png" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <img alt="" src="assets/images/icons/film.png" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <img alt="" src="assets/images/icons/location.png" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <img alt="" src="assets/images/icons/excel.svg" />
                </a>
              </li>
            </ul>
            <ul className="nav nav-pills card-header-pills" id="new_actions">
              <li className="nav-item pl-3">
                <select className="form-control">
                  <option>Everyone</option>
                  <option>Friends</option>
                  <option>Only me</option>
                </select>
              </li>
              <li className="nav-item pl-3">
                <button className="btn btn-primary">Post</button>
              </li>
            </ul>
          </div>
        </div>
      </form>
      <CreatePost open={open} setOpen={setOpen} />
    </>
  );
};

export default PostWrite;
