import React from "react";
import { Button, Modal } from "react-bootstrap";

function PrivacyItem(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Privacy item
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Privacy item</h4>
        <p>Privacy item</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PrivacyItem;
