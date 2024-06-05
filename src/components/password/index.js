import React from "react";
import style from "./password.module.scss";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { useState } from "react";
import DefaultLayout from "layout/defaultLayout";

const Password = () => {
  const [state, setSate] = useState({
    formValue: [],
  });
  const [initialValues] = useState({
    password: "",
    confirm_password: "",
  });

  const updateFor = (values) => {
    const { formValue } = state;
    formValue.push(values);
    setSate((prevState) => {
      return { ...prevState, formValue };
    });
    alert(JSON.stringify(formValue));
  };
  return (
    <>
      {/* <DefaultLayout> */}

      <div className={style.header}>
        <div>Password</div>

        <div className={style.uid}>SocialDog User ID: 940371</div>
      </div>
      <div style={{ padding: "20px" }}>
        <div className={style.wrapper}>
          <div className={style.heading}>
            <p>
              After setting a password, you will be able to log in to SocialDog
              with <Link to="/accounts">your email address </Link> and password.
              <br />
              No password is currently set.
            </p>
          </div>

          <div className={style.form}>
            <Formik
              initialValues={initialValues}
              onSubmit={async (values) => {
                updateFor(values);
              }}
            >
              {({ handleSubmit, handleChange, values, errors }) => {
                return (
                  <form onSubmit={handleSubmit}>
                    <div className={style.subContainer}>
                      <div className={style.password}>
                        <label htmlFor="password">New password</label>
                      </div>
                      <div className={style.inputRight}>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          className="form-control"
                          //   placeholder="Password *"
                          onChange={handleChange}
                          value={values.password}
                        />
                        <span className={`error_notifier text-danger`}>
                          {errors.password}
                        </span>

                        <div className={style.list}>
                          <ol>
                            <li>At least eight characters</li>
                            <li>At least one uppercase letter</li>
                            <li>At least one number or symbol</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                    <div className={style.subContainer}>
                      <div className={style.password}>
                        <label htmlFor="confirmPassword">
                          Confirm Password
                        </label>
                      </div>
                      <div className={style.inputRight}>
                        <input
                          id="confirmPassword"
                          type="password"
                          name="confirm_password"
                          className="form-control"
                          //   placeholder="Confirm password *"
                          onChange={handleChange}
                          value={values.confirm_password}
                        />
                        <span className={`error_notifier text-danger`}>
                          {errors.confirm_password}
                        </span>
                      </div>
                    </div>
                    <div className={style.btn}>
                      <div>
                        <button>Save</button>
                      </div>
                    </div>
                  </form>
                );
              }}
            </Formik>
          </div>
        </div>
        <div className={style.link}>
          <Link to="#">Forgot password?</Link>
        </div>
      </div>

      {/* </DefaultLayout> */}
    </>
  );
};

export default Password;
