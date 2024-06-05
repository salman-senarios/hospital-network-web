/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Select from "components/select";
import TextArea from "components/textarea";
import Button from "components/button";
import { apiRequest } from "utils/helper";
import TextField from "components/text-field";

import style from "../post.module.scss";
import { createNotification } from "notification-popup";
import { categoriesList } from "../helper";

const BuyPost = ({ setOpen }) => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });

  const formSubmit = async (data) => {
    setLoading(true);
    const res = await apiRequest({
      type: "post",
      path: "post",
      body: { ...data, productImage: "images" },
    });

    if (res.status === 201) {
      createNotification("success", "Success", "Successfully Created Post");
    }
    setOpen(false);
    setLoading(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit(formSubmit)}>
        <Select
          label={"Lead Category"}
          className={style.field}
          name="leadCategory"
          register={register}
          errorMessage={errors?.leadCategory?.message}
        >
          <option value="">select</option>
          {categoriesList?.map((ele, ind) => (
            <option key={ind} value={ele.title}>
              {ele.title}
            </option>
          ))}
        </Select>

        <TextField
          name="heading"
          label={"Heading"}
          placeholder="Heading"
          className={style.field}
          register={register}
          errorMessage={errors?.heading?.message}
        />

        <TextArea
          name={"description"}
          label={"Description"}
          placeholder="Description"
          className={style.field}
          register={register}
          errorMessage={errors?.description?.message}
        />

        <TextField
          label={"Wanted Qty"}
          name="qty"
          type="number"
          placeholder="Quantity"
          className={style.field}
          register={register}
          errorMessage={errors?.qty?.message}
        />

        <TextField
          name="price"
          label={"Price"}
          type="number"
          placeholder="Price"
          className={style.field}
          register={register}
          errorMessage={errors?.price?.message}
        />

        <TextField
          name="location"
          label={"Location"}
          placeholder="Location"
          className={style.field}
          register={register}
          errorMessage={errors?.location?.message}
        />

        <div className={style.attachmentDiv}>
          <label className={style.label1}>Upload Product Image</label>

          <label className={style.uploadBtn} htmlFor="files">
            Select File
          </label>
          <input id="files" hidden type="file" name="attachment" multiple />
        </div>

        <div
          className="card-footer"
          style={{ position: "relative", marginTop: "25px" }}
        >
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
              <Button
                className={`btn btn-primary ${style.btn}`}
                title={"Post"}
                isLoading={loading}
              />
            </li>
          </ul>
        </div>
      </form>
    </>
  );
};

export default BuyPost;

export const schema = yup
  .object({
    leadCategory: yup.string().required("Lead category  is required"),
    heading: yup.string().required("Heading is required"),
    description: yup.string().required("Description is required"),
    qty: yup.string().required("Quantity is required"),
    price: yup.string().required("Price is required"),
    location: yup.string().required("Location is required"),
  })
  .required();
