import React from "react";

function PersonalSetting({ handleConfirmPersonalSetting, onClose }) {
  return (
    <>
      <div className="popup-overlay" />
      <div className="popup popup--small">
        <div className="popup-content">
          <div className="popup-title">
            <h6>Personal Settings</h6>
            <div onClick={onClose}>
              <i className="fa-solid fa-xmark popup__close-icon"></i>
            </div>
          </div>
          <div className="popup__group">
            <div className="popup__row border-bottom">
              <div className="popup__title">Language</div>
              <div className="popup__selection">
                <select className="popup__select">
                  <option>English</option>
                  <option>Korean</option>
                  <option>Vietnamese</option>
                </select>
              </div>
            </div>
            <div className="popup__row border-bottom">
              <div className="popup__title">Timezone</div>
              <div className="popup__selection">
                <select className="popup__select">
                  <option>Asia/Ho_Chi_Minh</option>
                  <option>Asia/Ha_Noi</option>
                  <option>Asia/Jakarta</option>
                </select>
              </div>
            </div>
            <div className="popup__row ">
              <div className="popup__title">System authority</div>
              <div className="popup__selection">
                <select className="popup__select">
                  <option>Solution manager</option>
                  <option>Project manager</option>
                  <option>Accounting manager</option>
                </select>
              </div>
            </div>
          </div>

          <div className="group__btn">
            <button
              className="btn__class btn__confirm"
              onClick={handleConfirmPersonalSetting}
            >
              Confirm
            </button>
            <button className="btn__class btn__close" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalSetting;
