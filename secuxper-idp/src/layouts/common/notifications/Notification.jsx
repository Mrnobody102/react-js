import React from "react";
import "../Common.css";

function Notification() {
  return (
    <div className="notifications">
      <header className="notifications-title">Notifications list</header>
      <div className="notifications-list">
        <div className="notifications-item">Notification 1</div>
        <div className="notifications-item">Notification 2</div>
      </div>
      <footer className="notifications-footer">
        <div className="notifications-button-group">
          <div className="notifications-button form-switch">
            <label>Notice</label>
            <input
              type="checkbox"
              className="form-check-input notifications-switch"
            />
          </div>
          <div className="form-switch notifications-button ">
            <label>Alert</label>
            <input
              type="checkbox"
              className="form-check-input notifications-switch"
            />
          </div>
        </div>
        <div className="notifications-setting">
          <div className="notifications-setting-icon">
            <i className="fa-solid fa-trash"></i>
          </div>
          <div className="notifications-setting-icon">
            <i className="fa-solid fa-gear"></i>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Notification;
