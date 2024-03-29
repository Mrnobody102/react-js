import { useFormik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AuthForm.css";
import * as Yup from "yup";
import { useAuth } from "../../../providers/AuthProvider";

function Login() {
  const auth = useAuth();
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Username is a required entry."),
      password: Yup.string().required("Password is a required entry."),
    }),
    onSubmit: (user) => {
      auth.loginAction(user);
    },
  });
  return (
    <div className="login__container">
      <div className="login__wrapper">
        <div className="login__title">
          <img
            className="login__title-img"
            src="https://lgcns.playgroup.kr/wp-content/uploads/2022/03/img_singlex_logo.png"
            alt="Singlex"
          />
          <span className="mt-1 ms-2 login__title-detail">
            Physical Access Control Platform (SecuXper)
          </span>
        </div>
        <div className="login__form-wrapper">
          <form className="login__form " onSubmit={formik.handleSubmit}>
            <div className="login__input-group">
              <input
                value={formik.values.name}
                onChange={formik.handleChange}
                className="login__input login__username"
                type="text"
                id="name"
                name="name"
                placeholder="Username"
              />
              {formik.errors.name && formik.touched.name && (
                <span className="text__error">{formik.errors.name}</span>
              )}
              <input
                value={formik.values.password}
                onChange={formik.handleChange}
                className="login__input login__password"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
              {formik.errors.password && formik.touched.password && (
                <span className="text__error">{formik.errors.password}</span>
              )}
            </div>
            <button className="btn__login">LOGIN</button>
            <div className="login__options">
              <div className="login__save-id">
                <input type="checkbox" name="saveId" id="" />
                <label className="ps-1">Save ID</label>
              </div>
              <div>
                <Link
                  className="text-decoration-none text-secondary"
                  to="login/reset_password"
                >
                  Reset password
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
