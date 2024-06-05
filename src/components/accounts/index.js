import React, { useState } from "react";
import style from "./accounts.module.scss";
import { Formik, Field, Form } from "formik";
import { Link } from "react-router-dom";
import DefaultLayout from "layout/defaultLayout";
const Accounts = () => {
  const [state, setSate] = useState({
    formValue: [],
  });
  const [initialValues] = useState({
    name: "",
    email: "",
    language: "",
    timeZone: "",
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
    // <DefaultLayout>
      <div>
        <div className={style.header}>
          <div>Account Settings</div>

          <div>SocialDog User ID: 940371</div>
        </div>

        <div className={style.account}>
          <div className={style.detail}>
            <Formik
              initialValues={initialValues}
              onSubmit={async (values) => {
                updateFor(values);
              }}
            >
              {({ handleSubmit, handleChange, handleBlur, values, errors }) => (
                <form onSubmit={handleSubmit}>
                  <div className={style.content}>
                    <div className={style.inputMainDiv}>
                      <div className={style.labelDiv}>
                        <label> Name</label>
                      </div>
                      <div className={style.inputDiv}>
                        <input
                          type="text"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                          name="name"
                          id="name"
                        />
                        <p>This name will appear on the invoice/receipt.</p>
                      </div>
                    </div>

                    <div className={style.inputMainDiv}>
                      <div className={style.labelDiv}>
                        <label> Email</label>
                      </div>
                      <div className={style.inputDiv}>
                        <input
                          type="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          name="email"
                          id="email"
                        />
                        <p>
                          Email notifications will be sent to this email
                          address. You can log in with this email address and
                          <Link to="/password"> your password</Link>
                        </p>
                      </div>
                    </div>

                    <div className={style.inputMainDiv}>
                      <div className={style.labelDiv}>
                        <label> language</label>
                      </div>
                      <div className={style.inputDiv}>
                        <Field
                          name="language"
                          as="select"
                          className="my-select"
                        >
                          <option value="english">English</option>
                          <option value="japnes">Japnes</option>
                        </Field>
                        <p>The page will reload after changing the language.</p>
                      </div>
                    </div>
                    <div></div>
                    <div className={style.inputMainDiv}>
                      <div className={style.labelDiv}>
                        <label> Time zone</label>
                      </div>
                      <div className={style.inputDiv}>
                        <input
                          type="time"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.timeZone}
                          name="timeZone"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={style.btnTop}>
                    <button className={style.btn}>Save</button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
          <div className={style.link}>
            {/* <a href="#">Delete your SocialDog account </a> */}
            <Link to="/deleteAccount">Delete your SocialDog account </Link>
          </div>
        </div>
      </div>
    // </DefaultLayout>
  );
};

export default Accounts;
