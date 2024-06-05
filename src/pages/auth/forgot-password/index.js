import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "components/button";
import { forgotSchema } from "./helper";
import TextField from "components/text-field";

import style from "./forgotpassword.module.scss";
import { apiRequest } from "utils/helper";
import { createNotification } from "notification-popup";

const Forgotpassword = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(forgotSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    const res = await apiRequest({ type: "get", path: "sign-up" });
    if (res.status === 200) {
      if (res?.data?.find((ele) => ele.email === data.email)) {
        navigate("/reset-password");
      } else {
        createNotification("error", "Error", "Email dones not exist");
      }
    }
    setLoading(false);
  };

  return (
    <div className={style.bg}>
      <form onSubmit={handleSubmit(onSubmit)} className={style.formWraper}>
      <img src="assets/images/icons/social.png" alt="abc"/>
      <h4>Forgot password</h4>
        <p className={style.text}>
          Enter the  email you registered with socialDog to receive password reset link.
        </p>

        <div className={style.inputDiv}>
          <TextField
            type="text"
            name="email"
            placeholder="Enter email"
            register={register}
            errorMessage={errors?.email?.message}
            className={style.field}
          />
        </div>

        <Button
          type="submit"
          className={style.btn}
          title="Send"
          isLoading={loading}
        />

        <p style={{ marginTop: "10px" }} className={style.p}>
           <Link to={"/login"}>Log in</Link>
        </p>
      </form>
    </div>
  );
};

export default Forgotpassword;
