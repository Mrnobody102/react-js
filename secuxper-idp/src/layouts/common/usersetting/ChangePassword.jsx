import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";

function ChangePassword({ handleConfirmChangePassword, onClose }) {
  // Validate fields of change password
  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    validationSchema: Yup.object({
      // Current password is required field
      currentPassword: Yup.string().required(
        "Current password is a required entry."
      ),

      // New password is required and at least 8 characters
      newPassword: Yup.string()
        .min(8, "Password must be at least 8 characters.")
        .required("New password is a required entry."),

      // Confirm new password is required
      confirmNewPassword: Yup.string()
        .required("New password confirmation is a required entry.")
        .oneOf([Yup.ref("newPassword")], "Passwords must match"),
    }),
  });

  // Click outside field state
  const [isClickedOutside, setClickedOutside] = useState(true);

  // Click side
  const handleClickOutside = (event) => {
    if (
      event.target.tagName !== "INPUT" &&
      formik.touched.currentPassword &&
      formik.touched.newPassword &&
      formik.touched.confirmNewPassword
    ) {
      // re validate here
      formik.validateForm().then(() => {
        setClickedOutside(false);
        console.log(1);
      });
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="popup-overlay" />
      <div className="popup popup--small">
        <form
          className="popup-content"
          onSubmit={formik.handleSubmit}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <div className="popup-title">
            <h6>Change password</h6>
            <div onClick={onClose}>
              <i className="fa-solid fa-xmark popup__close-icon"></i>
            </div>
          </div>
          <div className="popup__group">
            <div className="popup__row border-bottom">
              <div className="popup__title">
                <label className="field-require">*</label>Current password
              </div>
              <div className="popup__selection">
                <input
                  value={formik.values.currentPassword}
                  onChange={formik.handleChange}
                  name="currentPassword"
                  type="password"
                  className={`popup__input ${
                    isClickedOutside &&
                    formik.errors.currentPassword &&
                    formik.touched.currentPassword
                      ? "popup__input_error"
                      : ""
                  }`}
                />
                {formik.errors.currentPassword &&
                  isClickedOutside &&
                  formik.touched.currentPassword && (
                    <span className="text__error">
                      {formik.errors.currentPassword}
                    </span>
                  )}
              </div>
            </div>
            <div className="popup__row border-bottom">
              <div className="popup__row-item popup__title">
                {" "}
                <label className="field-require">*</label>New password
              </div>
              <div className="popup__row-item popup__selection">
                <input
                  value={formik.values.newPassword}
                  onChange={formik.handleChange}
                  name="newPassword"
                  type="password"
                  className={`popup__input ${
                    formik.errors.newPassword && formik.touched.newPassword
                      ? "popup__input_error"
                      : ""
                  }`}
                />
                {formik.errors.newPassword && formik.touched.newPassword && (
                  <span className="text__error">
                    {formik.errors.newPassword}
                  </span>
                )}
              </div>
            </div>
            <div className="popup__row">
              <div className="popup__row-item popup__title">
                <label className="field-require">*</label>
                New password confirmation
              </div>
              <div className="popup__row-item popup__selection">
                <input
                  value={formik.values.confirmNewPassword}
                  onChange={formik.handleChange}
                  name="confirmNewPassword"
                  type="password"
                  className={`popup__input ${
                    formik.errors.confirmNewPassword &&
                    formik.touched.confirmNewPassword
                      ? "popup__input_error"
                      : ""
                  }`}
                />
                {formik.errors.confirmNewPassword &&
                  formik.touched.confirmNewPassword && (
                    <span className="text__error">
                      {formik.errors.confirmNewPassword}
                    </span>
                  )}
              </div>
            </div>
          </div>

          <div className="group__btn">
            <button
              type="submit"
              className="btn__class btn__confirm"
              onClick={handleConfirmChangePassword}
            >
              Save
            </button>
            <button className="btn__class btn__close" onClick={onClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ChangePassword;
