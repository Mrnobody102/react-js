import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

function Columns(props) {
  const { list, onHide, allColumns } = props;
  const [selectedColumns, setSelectedColumns] = useState([]);

  const columnsToShow = allColumns.filter((column) =>
    list.some((item) => item.id === column.id)
  );

  /**
   * Handle the toggle of the column selection
   * @param {string} columnId - The id of the column to toggle
   */
  const handleToggleColumn = (columnId) => {
    // If the column is already selected
    if (selectedColumns.includes(columnId)) {
      // Remove it from the selected columns
      setSelectedColumns(selectedColumns.filter((id) => id !== columnId));
    } else {
      // Add the column to the selected columns
      setSelectedColumns([...selectedColumns, columnId]);
    }
  };


  /**
   * Handle the show/hide table column
   */
  const handleShowTableColumn = () => {
    // Loop through all columns
    columnsToShow.forEach((column) => {
      // If the column is selected to hide
      if (selectedColumns.includes(column.id)) {
        // Hide the column
        column.toggleHidden(true);
      } else {
        // Show the column
        column.toggleHidden(false);
      }
    });

    // Call the onHide function to hide the modal
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
