import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";

import Button from "components/button";
import TextField from "components/text-field";
import { loginSchema } from "./helper";

import style from "./login.module.scss";
import { loginAction } from "redux/actions";
import { apiRequest } from "utils/helper";
import { createNotification } from "notification-popup";
import { AiOutlineMail } from "react-icons/ai";
import { FiLock } from "react-icons/fi";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const [signupData, setSignupData] = useState([]);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    const temp = [...signupData];
    setLoading(true);
    if (
      temp.find(
        (ele) => ele.email === data.email && ele.password === data.password
      )
        ? true
        : false
    ) {
      const res = await apiRequest({
        type: "post",
        path: "login",
        body: data,
      });
      if (res.status === 201) {
        dispatch(loginAction(temp.find((e) => e.email === data.email)));
        setLoading(false);
      }
    } else {
      setTimeout(() => {
        createNotification("error", "Error", "Incorrect Email or Password");
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await apiRequest({
        type: "get",
        path: "sign-up",
      });
      if (res.status === 200) {
        setSignupData([...res.data]);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={style.bg}>
      <form onSubmit={handleSubmit(onSubmit)} className={style.formWraper}>
        <img src="assets/images/icons/social.png" alt="abc" />

        <div className={style.inputDiv}>
          <div className={style.mainDiv}>
            <span>
              <AiOutlineMail className={style.iconColor}/>
            </span>
            <TextField
              name={"email"}
              type="emial"
              placeholder="Email"
              register={register}
              errorMessage={errors?.email?.message}
              className={style.field}
            />
          </div>
          <div className={style.mainDiv}>
            <span>
              <FiLock className={style.iconColor}/>
            </span>
            <TextField
            name={"password"}
            type="password"
            placeholder=" Password"
            register={register}
            errorMessage={errors?.password?.message}
            className={style.field}
          />
          </div>
          

          <div className={style.forgotPasswordDiv}>
            <Link to={"/forgot-password"} className={style.forgotPassword}>
              Forgot password?
            </Link>
          </div>
        </div>
        <Button
          type="submit"
          title="Log in"
          className={style.btn1}
          isLoading={loading}
        />
        <p>or</p>
        <Button
          type="submit"
          title="Log In with Twitter"
          className={style.btn}
          isLoading={loading}
        />
        <p style={{ marginTop: "10px" }} className={style.p}>
          <Link to={"/signup"}>Register here</Link>
        </p>
      </form>

     
    </div>
  );
};

export default Login;
