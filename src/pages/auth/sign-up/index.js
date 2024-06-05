import React, { useEffect, useState } from "react";
import Button from "components/button";
import style from "./signup.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import TextField from "components/text-field";
import { signupSchema } from "./helper";
import { apiRequest } from "utils/helper";
import { createNotification } from "notification-popup";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [signupData, setSignupData] = useState([]);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "all",
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = (data) => {
    setLoading(true);
    const temp = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    };

    const signupTemp = [...signupData];
    setTimeout(async () => {
      if (signupTemp?.find((e) => e.email === data.email) ? false : true) {
        const res = await apiRequest({
          type: "post",
          path: "sign-up",
          body: temp,
        });
        if (res.status === 201) {
          reset();
          createNotification(
            "success",
            "Success",
            "Successfully created account"
          );
          navigate("/login");
        }
        setLoading(false);
      } else {
        createNotification("error", "Error", "email already exits");
        setLoading(false);
      }
    }, 1000);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await apiRequest({
        type: "get",
        path: "sign-ups",
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
      <img src="assets/images/icons/social.png" alt="abc"/>
        <h5>Register </h5>
        <Button
          type="submit"
          className={style.btn}
          title="Register free with twitter"
          isLoading={loading}
        />
        <div>
        <a href="to ">Terms of Use  </a>
        <a href="to ">Privacy policy   </a>
        </div>
        
        <p className={style.p}> <Link to={"/login"}>Already have an account?</Link>
      </p>
      </form>
      
    </div>
  );
};

export default Signup;
