import React from "react";

const ProfileSection = () => {
  return (
    <div className="card-deck">
      <div className="card">
        <img alt="" src="assets/images/cover.png" className="card-img-top" />
        <div className="card-body text-center">
          <img
            alt=""
            src="assets/images/profile/person1@2x.png"
            width="102"
            height="102"
            className="user_img"
          />
          <h5 className="font-medium mb-0 mt-1">Umair Tahir</h5>
        </div>
        <div className="card-footer text-center px-2 pt-0 border-0 bg-transparent">
          <ul className="nav d-flex justify-content-between flex-nowrap">
            <li className="w-100 border-right">
              <h6 className="txt-light mb-1">Posts</h6>
              <h6 className="mb-0">23</h6>
            </li>
            <li className="w-100 border-right">
              <h6 className="txt-light mb-1">Views</h6>
              <h6 className="mb-0">73</h6>
            </li>
            <li className="w-100">
              <h6 className="txt-light mb-1">Network</h6>
              <h6 className="mb-0">691</h6>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
