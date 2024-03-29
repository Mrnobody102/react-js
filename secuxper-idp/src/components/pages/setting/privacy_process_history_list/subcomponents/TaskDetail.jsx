import React from "react";
import { Button, Modal } from "react-bootstrap";

function TaskDetail(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Task Detail
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Task Detail</h4>
        <p>Task Detail</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TaskDetail;
