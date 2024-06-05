import React from "react";

const FilterSection = () => {
  return (
    <div className="card">
      <div className="card-body">
        <ul className="nav nav-pills card-header-pills filters d-flex justify-content-between flex-nowrap px-3">
          <li className="nav-item pr-2">
            <select className="form-control">
              <option>Country</option>
              <option>USA</option>
              <option>Canada</option>
              <option>Japan</option>
              <option>Korea</option>
              <option>China</option>
            </select>
          </li>
          <li className="nav-item pr-2">
            <select className="form-control">
              <option>Type</option>
              <option>Accessories</option>
              <option>Hardware</option>
            </select>
          </li>
          <li className="nav-item pr-2">
            <select className="form-control">
              <option>Condition</option>
              <option>New</option>
              <option>Used</option>
            </select>
          </li>
          <li className="nav-item pr-2">
            <select className="form-control">
              <option>Price</option>
              <option>Low to high</option>
              <option>High to Low</option>
            </select>
          </li>
          <li className="nav-item pr-0">
            <button className="no-btn">
              <img alt="" src="assets/images/icons/Icon awesome-filter.svg" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterSection;
