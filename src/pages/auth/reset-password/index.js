import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "components/button";
import { resetSchema } from "./helper";
import TextField from "components/text-field";

import style from "./resetpassword.module.scss";

const Resetpassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(resetSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={style.bg}>
      <form onSubmit={handleSubmit(onSubmit)} className={style.formWraper}>
        <h1>EPC Trade</h1>
        <div className={style.inputDiv}>
          <TextField
            label={"New Password"}
            type="password"
            name={"password"}
            placeholder="Enter new password"
            register={register}
            errorMessage={errors?.password?.message}
            className={style.field}
          />

          <TextField
            label={"Confirm Password"}
            name={"confirmPassword"}
            type="password"
            placeholder="Enter confirm password"
            register={register}
            errorMessage={errors?.confirmPassword?.message}
            className={style.field}
          />
        </div>

        <Button type="submit" className={style.btn} title="Submit" />

        <p style={{ marginTop: "10px" }} className={style.p}>
          Back to? <Link to={"/login"}>Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Resetpassword;
