import React from "react";
import { Modal } from "react-bootstrap";

/**
 * TaskDetail component
 *
 * Component for rendering a modal with privacy process task information
 *
 * @param {object} props - Component properties
 * @returns {JSX.Element} - Rendered component
 */
function TaskDetail(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* Modal header */}
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Privacy process task
        </Modal.Title>
      </Modal.Header>

      {/* Modal body */}
      <Modal.Body>
        <div className="table__record-detail__wrapper">
          <div className="table__record-detail-group-container">
            {/* Call URL */}
            <div className="table__record-detail-item">
              <div className="table__record-detail-label">Call URL</div>
              <div className="table__record-detail-content" id="tbName">
                {/* Show call URL */}
              </div>
            </div>

            {/* Process details */}
            <div className="table__record-detail-item">
              <div className="table__record-detail-label">Process details</div>
              <div className="table__record-detail-content" id="tbAccessIp">
                {/* Show process details */}
              </div>
            </div>

            {/* Process reason */}
            <div className="table__record-detail-item">
              <div className="table__record-detail-label">Process reason</div>
              <div className="table__record-detail-content" id="tbProcessDatetime">
                {/* Show process reason */}
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>

      {/* Modal footer */}
      <Modal.Footer>
        <div
          className="btn__class btn__close"
          onClick={props.onHide}
        >
          Close
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default TaskDetail;
