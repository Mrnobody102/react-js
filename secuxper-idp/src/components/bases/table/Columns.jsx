import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

function Columns(props) {
  const { list, onHide, allColumns } = props;
  const [selectedColumns, setSelectedColumns] = useState([]);

  const columnsToShow = allColumns.filter((column) =>
    list.some((item) => item.id === column.id)
  );

  const handleToggleColumn = (columnId) => {
    if (selectedColumns.includes(columnId)) {
      setSelectedColumns(selectedColumns.filter((id) => id !== columnId));
    } else {
      setSelectedColumns([...selectedColumns, columnId]);
    }
  };

  const handleShowTableColumn = () => {
    columnsToShow.forEach((column) => {
      if (selectedColumns.includes(column.id)) {
        column.toggleHidden(true);
      } else {
        column.toggleHidden(false);
      }
    });
    onHide();
  };

  return (
    <Modal
      {...props}
      size="sm"
      className="modal"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <span>Column setting</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-inline">
        {columnsToShow.map((column) => (
          <div className="table__column-item d-flex " key={uuidv4()}>
            <input
              className="me-2 mt-1"
              type="checkbox"
              checked={!selectedColumns.includes(column.id)}
              onChange={() => handleToggleColumn(column.id)}
            />
            <span>{column.id}</span>
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <div
          className="btn__class btn__confirm"
          onClick={handleShowTableColumn}
        >
          Save
        </div>
        <div className="btn__class btn__close" onClick={onHide}>
          Close
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default Columns;
