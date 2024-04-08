import React from "react";
import { Modal } from "react-bootstrap";

/**
 * PrivacyItem component
 *
 * Component for rendering a modal with privacy item information
 */
function PrivacyItem(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* Modal header */}
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Privacy item
        </Modal.Title>
      </Modal.Header>

      {/* Modal body */}
      <Modal.Body>
        <table className="table">
          <thead>
            <tr className="table__header">
              <td className="table__header">Privacy</td>
              <td className="table__header">Explaination</td>
            </tr>
          </thead>
          <tbody>
            <tr className="table__body">
              <td className="table__body">loginId</td>
              <td className="table__body">Login ID</td>
            </tr>
            <tr className="table__body">
              <td className="table__body">userId</td>
              <td className="table__body">User ID</td>
            </tr>
            <tr className="table__body">
              <td className="table__body">comNm</td>
              <td className="table__body">Company Name</td>
            </tr>
            <tr className="table__body">
              <td className="table__body">depNm</td>
              <td className="table__body">Department Name</td>
            </tr>
            <tr className="table__body">
              <td className="table__body">userNm</td>
              <td className="table__body">User Name</td>
            </tr>
            <tr className="table__body">
              <td className="table__body">posnNm</td>
              <td className="table__body">User Posn Name</td>
            </tr>
          </tbody>
        </table>
      </Modal.Body>

      {/* Modal footer */}
      <Modal.Footer>
        <div className="btn__class btn__close" onClick={props.onHide}>
          Close
        </div>
      </Modal.Footer>
    </Modal>
  );
}


export default PrivacyItem;
