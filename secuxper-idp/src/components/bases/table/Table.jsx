import React, { useState } from "react";
import styled from "styled-components";
import {
  useTable,
  useSortBy,
  useBlockLayout,
  useResizeColumns,
} from "react-table";
import { usePagination } from "react-table/dist/react-table.development";
import Columns from "./Columns";
import { v4 as uuidv4 } from "uuid";
import "./CustomTable.css"

const Style = styled.div`
  padding: 1rem 0;

  table {
    border-spacing: 0;
    border-left: 1px solid var(--border-color);

    :first-child {
      tr {
        border-top: 1px solid var(--border-color);
      }
    }

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }

      &:nth-child(even) {
        background-color: var(--table-stripe-color);
      }
    }

    th,
    td {
      font-weight: 400;
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid var(--border-color);
      border-right: 1px solid var(--border-color);
      :last-child {
        border-right: 0;
      }
    }

    td:hover {
      cursor: pointer;
    }

    th {
      background-color: var(--table-header-color);
    }

    input[type="checkbox"] {
      /* Add if not using autoprefixer */
      -webkit-appearance: none;
      /* Remove most all native input styles */
      appearance: none;
      /* For iOS < 15 */
      background-color: var(--form-background);
      /* Not removed via appearance */
      margin: 0;
    
      font: inherit;
      color: gray;
      width: 1.15em;
      height: 1.15em;
      border: 0.15em solid currentColor;
      border-radius: 0.15em;
      transform: translateY(-0.075em);
    
      display: grid;
      place-content: center;
    }
    
    
  }

  input[type="checkbox"]:hover {
    cursor: pointer;
  }
  
  input[type="checkbox"]::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--form-control-color);
    /* Windows High Contrast Mode */
    background-color: CanvasText;
  }
  
  input[type="checkbox"]:checked::before {
    transform: scale(1);
  }

  ${"" /* In this example we use an absolutely position resizer,
       so this is required. */
  }
  position: relative;

  .resizer {
    display: inline-block;
    width: 10px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(50%);
    z-index: 1;
    ${"" /* prevents from scrolling while dragging on touch devices */}
    touch-action:none;
  }

  .table__options {
    padding: 12px;
    font-size: 0.9rem;
  }

  .table__options i {
    margin-right: 6px;
    color: gray;
  }

  .table__options i:hover {
    cursor: pointer;
  }

  .table__icon-stop {
    padding: 6px 7px 4px 7px;
    border: 1px solid var(--border-color);
    border-radius: 2px;
  }

  .table__icon-pause {
    padding: 6px 8px 4px 8px;
    border: 1px solid var(--border-color);
    border-radius: 2px;
  }

  .table__paging {
    border: 1px solid var(--border-color);
    border-top: none;
    padding: 6px;
    background-color: var(--primary-bg-color);
    color: #636363;
  }

  .table__paging-distance {
    padding: 6px;
    background-color: white;
    border: 1px solid var(--border-color);
    border-top: none;
  }

  .table__no-record {
    background-color: white;
    padding: 100px 0;
  }
`;


function Table({
  columns,
  data,
  totalSize,
  fetchData,
  filterTable,
  submitState,
  loading,
  pageCount: controlledPageCount,
  list, // list to show or hide
  columnsToShow,
  setColumnsToShow,
  columnShowDetails,
  setDataToDetail,
  showDetailState,
  setShowDetailState
}) {

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    allColumns,
    // Get the state from the instance
    state: { pageIndex, pageSize, sortBy },
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: 0,
        hiddenColumns: list.map((column) => column.id),
      }, // Pass our hoisted table state
      manualSortBy: true,
      manualPagination: true, // Tell the usePagination
      // hook that we'll handle our own data fetching
      // This means we'll also have to provide our own
      // pageCount.
      pageCount: controlledPageCount,
    },
    useSortBy,
    usePagination,
    useBlockLayout,
    useResizeColumns
  );

  const [modalShow, setModalShow] = useState(false);

  const [selectedRow, setSelectedRow] = useState(null);

  React.useEffect(() => {
    fetchData({ sortBy, pageIndex, pageSize });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchData]);

  React.useEffect(() => {
    filterTable(sortBy, pageIndex, pageSize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitState, sortBy, pageIndex, pageSize]);

  /**
   * Handle the show/hide detail setting of a row in the table
   * @param {object} row - The row data of the clicked row
   * @param {array} columnShowDetails - The columns that need to show/hide
   * @param {array} allColumns - All columns of the table
   */
  const handleShowDetail = (row, columnShowDetails, allColumns) => {
    // Toggle the detail setting state
    setShowDetailState(prevState => !prevState);

    // Set the clicked row data to the state
    setDataToDetail(row);

    // If the detail is shown
    if (showDetailState) {
      // Loop through all columns
      allColumns.forEach((column) => {
        // If the column is in the columns that need to show/hide
        if (columnShowDetails.includes(column.id)) {
          // Show the column
          column.toggleHidden(false);
        } else {
          // Hide the column
          column.toggleHidden(true);
        }
      });
    } else {
      // Loop through all columns
      allColumns.forEach((column) => {
        // Show the column
        column.toggleHidden(false);
      });
    }
  };

  /**
   * Handle the show/hide detail setting of the table
   * @param {object} row - The row data of the clicked row
   * @param {array} columnShowDetails - The columns that need to show/hide
   * @param {array} allColumns - All columns of the table
   */
  const handleShowDetailSetting = (row, columnShowDetails, allColumns) => {
    // Toggle the detail setting state
    setShowDetailState(prevState => !prevState);

    // Set the clicked row data to the state
    setDataToDetail(row);

    // Set the selected row to null
    setSelectedRow(null);

    // If the detail is shown
    if (showDetailState) {
      // Loop through all columns
      allColumns.forEach((column) => {
        // If the column is in the columns that need to show/hide
        if (columnShowDetails.includes(column.id)) {
          // Show the column
          column.toggleHidden(false);
        } else {
          // Hide the column
          column.toggleHidden(true);
        }
      });
    } else {
      // Loop through all columns
      allColumns.forEach((column) => {
        // Show the column
        column.toggleHidden(false);
      });

    }
  };

  const handleHideDetailSetting = (row, columnShowDetails, allColumns) => {
    // Toggle the detail setting state
    setShowDetailState(prevState => !prevState);

    // Set the clicked row data to the state
    setDataToDetail(row);

    // Set the selected row to null
    setSelectedRow(null);

    // If the detail is shown
    if (showDetailState) {
      // Loop through all columns
      allColumns.forEach((column) => {
        // If the column is in the columns that need to show/hide
        if (columnShowDetails.includes(column.id)) {
          // Show the column
          column.toggleHidden(false);
        } else {
          // Hide the column
          column.toggleHidden(true);
        }
      });
    } else {
      // Loop through all columns
      allColumns.forEach((column) => {
        // Show the column
        column.toggleHidden(false);
      });

    }
  }

  return (
    <div className="d-flex">
      <Style>
        {/* Table header */}
        <div className="d-flex align-items-baseline mb-2">
          {loading ? (
            // Use our custom loading state to show a loading indicator
            <div colSpan="10000" className="me-3">
              Loading...
            </div>
          ) : (
            <div colSpan="10000" className="me-3">
              Total: <span className="span--pink">{totalSize}</span>
            </div>
          )}
          <span>
            <select
              className="select__paging"
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                gotoPage(0);
              }}
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
              <option value={40}>40</option>
              <option value={50}>50</option>
            </select>
            / page
          </span>
          <div className="table__options">
            <i
              className="fa-solid fa-gear"
              onClick={() => setModalShow(true)}
            ></i>
            <Columns
              show={modalShow}
              list={list}
              allColumns={allColumns}
              columnsToShow={columnsToShow}
              onHide={() => setModalShow(false)}
            />
            <i className={showDetailState ? "fas fa-stop table__icon-stop icon__active" : "fas fa-stop table__icon-stop"} onClick={() => handleHideDetailSetting(
              {
                original: {
                  accessIp: "",
                  loginId: "",
                  name: "",
                  processMenu: "",
                  processType: "",
                  processTask: "",
                  privacyItem: "",
                  processDatetime: ""
                }
              }, columnShowDetails, allColumns)}></i>
            <i className={showDetailState ? "fas fa-pause table__icon-pause" : "fas fa-pause table__icon-pause icon__active"} onClick={() => handleShowDetailSetting({
              original: {
                accessIp: "",
                loginId: "",
                name: "",
                processMenu: "",
                processType: "",
                processTask: "",
                privacyItem: "",
                processDatetime: ""
              }
            }, columnShowDetails, allColumns)}></i>
          </div>
        </div>

        {/* Table data */}
        <table {...getTableProps()} >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} className="tr">
                {headerGroup.headers.map((column) => (
                  <th key={uuidv4()} {...column.getHeaderProps()} className="th"
                  >
                    <div
                      {...column.getSortByToggleProps()}
                      className="header-content"
                    >
                      {column.render("Header")}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? " 🔽"
                            : " 🔼"
                          : ""}
                      </span>
                    </div>
                    <div
                      {...column.getResizerProps()}
                      className={`resizer ${column.isResizing ? "isResizing" : ""
                        }`}
                    />
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          {totalSize > 0 ?
            <tbody {...getTableBodyProps()}>
              {page.map((row, i) => {
                prepareRow(row);
                const isSelected = selectedRow && selectedRow.id === row.id;

                return (
                  <tr
                    key={uuidv4()}
                    {...row.getRowProps()}
                    onClick={() => {
                      setSelectedRow(row); // Update selectedRow when a row is clicked
                      setDataToDetail(row);
                    }}
                    onDoubleClick={() => handleShowDetail(row, columnShowDetails, allColumns)}

                  >
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()} className={isSelected ? 'table__row-select' : ''}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody> : <tbody><tr><td className="table__no-record">No data was retrieved</td></tr></tbody>}
        </table>

        {/* Pagination */}
        <div className="table__paging-distance"></div>
        <div className="table__paging d-flex justify-content-center">
          <button
            onClick={() => gotoPage(0)}
            style={{
              color: canPreviousPage ? "#303030" : "#b6b6b6",
              cursor: canPreviousPage ? "pointer" : "auto",
              backgroundColor: "var(--primary-bg-color)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="currentColor"
              className="bi bi-chevron-double-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
              />
              <path
                fillRule="evenodd"
                d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
              />
            </svg>
          </button>
          <button
            onClick={() => previousPage()}
            style={{
              color: canPreviousPage ? "#303030" : "#b6b6b6",
              cursor: canPreviousPage ? "pointer" : "auto",
              backgroundColor: "var(--primary-bg-color)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="currentColor"
              className="bi bi-chevron-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
              />
            </svg>
          </button>
          {Array.from(Array(Math.min(pageCount, 10)).keys()).map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => gotoPage(pageNumber)}
              style={{
                textDecoration: pageNumber === pageIndex ? "underline" : "none",
                color:
                  pageNumber === pageIndex ? "var(--favourite-color)" : "#636363",
                backgroundColor:
                  pageNumber === pageIndex ? "white" : "var(--primary-bg-color)",
                fontWeight: pageNumber === pageIndex ? "bold" : "normal",
              }}
            >
              {pageNumber + 1}
            </button>
          ))}

          <button
            onClick={() => nextPage()}
            style={{
              color: canNextPage ? "#303030" : "#b6b6b6",
              cursor: canNextPage ? "pointer" : "auto",
              backgroundColor: "var(--primary-bg-color)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="currentColor"
              className="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </button>
          <button
            onClick={() => gotoPage(pageCount - 1)}
            style={{
              color: canNextPage ? "#303030" : "#b6b6b6",
              cursor: canNextPage ? "pointer" : "auto",
              backgroundColor: "var(--primary-bg-color)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="currentColor"
              className="bi bi-chevron-double-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"
              />
              <path
                fillRule="evenodd"
                d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </button>
        </div>
      </Style>
    </div>
  );
}

export default Table;
