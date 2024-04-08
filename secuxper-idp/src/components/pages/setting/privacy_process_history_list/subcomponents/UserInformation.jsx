import React from "react";
import { Modal } from "react-bootstrap";

/**
 * UserInformation component
 *
 * Component for rendering a modal with user information
 *
 * @param {object} props - Component properties
 * @returns {JSX.Element} - Rendered component
 */
function UserInformation(props) {
  // Render a modal with user information
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
          User Information
        </Modal.Title>
      </Modal.Header>

      {/* Modal body */}
      <Modal.Body>
        <table className="table">
          <thead>
            <tr className="table__header">
              <td className="table__header">Company</td>
              <td className="table__header">Department</td>
              <td className="table__header">Name</td>
            </tr>
          </thead>
          <tbody>
            <tr className="table__body">
              <td className="table__body">IDP +</td>
              <td className="table__body"></td>
              <td className="table__body">IDP Solution Admin</td>
            </tr>
            <tr className="table__body">
              <td className="table__body">IDP +</td>
              <td className="table__body"></td>
              <td className="table__body">IDP Solution Admin</td>
            </tr> <tr className="table__body">
              <td className="table__body">IDP +</td>
              <td className="table__body"></td>
              <td className="table__body">IDP Solution Admin</td>
            </tr> <tr className="table__body">
              <td className="table__body">IDP +</td>
              <td className="table__body"></td>
              <td className="table__body">IDP Solution Admin</td>
            </tr> <tr className="table__body">
              <td className="table__body">IDP +</td>
              <td className="table__body"></td>
              <td className="table__body">IDP Solution Admin</td>
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

export default UserInformation;
