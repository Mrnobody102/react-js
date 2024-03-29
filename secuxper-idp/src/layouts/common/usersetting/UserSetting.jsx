import React, { useState } from "react";
import "../Common.css";
import "../../../assets/styles/layouts/Popups.css";
import PersonalSetting from "./PersonalSetting";
import ChangePassword from "./ChangePassword";
import { useAuth } from "../../../providers/AuthProvider";

function UserSetting() {
  // Popup hidden state
  const [showPersonalSettingPopup, setShowPersonalSettingPopup] =
    useState(false);
  const [showChangePasswordPopup, setShowChangePasswordPopup] = useState(false);

  const handlePersonalSettingsClick = () => {
    setShowPersonalSettingPopup(true);
  };

  const handleShowChangePasswordClick = () => {
    setShowChangePasswordPopup(true);
  };

  const handleConfirmPersonalSetting = () => {};

  const handleConfirmChangePassword = () => {};

  const auth = useAuth();

  return (
    <div className="user-setting">
      <div className="user-setting-list">
        <div className="user-setting-item">
          <i className="fa-regular fa-user user-setting-icon"></i>
          <span>Nguyen Dinh Trong trongnd10</span>
        </div>
        <div
          className="user-setting-item"
          onClick={handlePersonalSettingsClick}
        >
          <i className="fa-regular fa-edit user-setting-icon"></i>
          <span>Personal Settings</span>
        </div>
        <div
          className="user-setting-item"
          onClick={handleShowChangePasswordClick}
        >
          <i className="fa-solid fa-lock user-setting-icon"></i>
          <span>Change password</span>
        </div>
        <div className="user-setting-item" onClick={() => auth.logOut()}>
          <i className="fas fa-sign-out user-setting-icon"></i>
          <span>Log out</span>
        </div>
      </div>
      {/* Show popup if showPersonalSettingPopup is true */}
      {showPersonalSettingPopup && (
        <PersonalSetting
          handleConfirmPersonalSetting={handleConfirmPersonalSetting}
          onClose={() => setShowPersonalSettingPopup(false)}
        />
      )}
      {/* Show popup if showChangePasswordPopup is true */}
      {showChangePasswordPopup && (
        <ChangePassword
          handleConfirmChangePassword={handleConfirmChangePassword}
          onClose={() => setShowChangePasswordPopup(false)}
        />
      )}
    </div>
  );
}

export default UserSetting;
