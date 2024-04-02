import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import PageScreen from "../../PageScreen";
import Table from "../../../bases/table/Table";

import "rsuite/dist/rsuite-rtl.css";
import "../Setting.css";
import {
  getFilteredProcessHistory,
} from "../../../../services/apis/settings";
import UserInformation from "./subcomponents/UserInformation";
import PrivacyItem from "./subcomponents/PrivacyItem";
import Datepicker from "../../../bases/input/datepicker/Datepicker";
import TaskDetail from "./subcomponents/TaskDetail";
import $ from "jquery"

/* HuyPQ62 */
function PrivacyProcessHistoryList() {

  // Define columns of table
  const columns = React.useMemo(
    () => [
      {
        Header: "Login ID",
        accessor: "loginId",
      },
      {
        Header: "Name",
        accessor: "name",
      },

      {
        Header: "Employee number",
        accessor: "employeeNumber",
      },

      {
        Header: "Company",
        accessor: "company",
      },
      {
        Header: "Department",
        accessor: "department",
      },

      {
        Header: "Process menu",
        accessor: "processMenu",
      },
      {
        Header: "Process type",
        accessor: "processType",
      },
      {
        Header: "Process task",
        accessor: "processTask",
      },
      {
        Header: "User information",
        accessor: "userInformation",
      },
      {
        Header: "Privacy item",
        accessor: "privacyItem",
      },
      {
        Header: "Access IP",
        accessor: "accessIp",
      },
      {
        Header: "Process date and time",
        accessor: "processDatetime",
      },
    ],
    []
  );

  // Hide these columns first
  const hiddenColumns = [
    {
      id: "employeeNumber",
      name: "Employee number",
    },
    {
      id: "company",
      name: "Company",
    },
    {
      id: "department",
      name: "Department",
    },
  ];

  // Only these columns will be display after click to show record details 
  const showColumnIdsAfterShowProcessDetails = [
    "loginId", "accessIp", "processDatetime"
  ];


  // Data states
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [totalSize, setTotalSize] = useState(0);

  const sortIdRef = React.useRef(0);

  // Filter input states 
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filterValues, setFilterValues] = useState({});
  const [submitState, setSubmitState] = useState(0);

  // Modal states
  const [modalTaskDetailShow, setModalTaskDetailShow] = useState(null);
  const [modalUserInformationShow, setModalUserInformationShow] =
    useState(null);
  const [modalPrivacyItemShow, setModalPrivacyItemShow] = useState(null);

  // Show button of Modal process detail
  const processDetail = ({ id, link }) => (
    <Link
      onClick={() => setModalTaskDetailShow(id)}
      className="setting__history-list__process-detail-link pe-2"
    >
      <i className="fa-solid fa-up-right-from-square"></i>
      <span className="ms-1">Task detail</span>
    </Link>
  );

  // Show button of User information
  const userInformation = ({ id, link, number }) => (
    <>
      <Link
        onClick={() => setModalUserInformationShow(id)}
        className="setting__history-list__number"
      >
        <span className="ms-1">{number}</span>
      </Link>
    </>
  );

  // Show button of privacy item
  const privacyItem = ({ id, link, number }) => (
    <>
      <Link
        onClick={() => setModalPrivacyItemShow(id)}
        className="setting__history-list__number"
      >
        <span className="ms-1">{number}</span>
      </Link>
    </>
  );

  // Fetch data and put data into table
  const fetchData = useCallback(
    async ({
      sortBy,
      startDate,
      endDate,
      handle,
      accessIp,
      processType,
      pageSize,
      pageIndex
    }) => {
      setLoading(true);
      const response = await getFilteredProcessHistory(
        startDate,
        endDate,
        handle,
        accessIp,
        processType,
        pageIndex,
        pageSize,
      );
      const processHistoryList = response.content;
      const tableData = processHistoryList.map((processHistory) => {
        const {
          id,
          loginId,
          name,
          processMenu,
          processType,
          processTaskLink,
          userInformationNumber,
          privacyItemNumber,
          accessIp,
          processDatetime,
        } = processHistory;
        return {
          id,
          loginId,
          name,
          processMenu,
          processType,
          processTask: processDetail({ link: processTaskLink }),
          userInformation: userInformation({
            id: `user-information_${id}`,
            link: "#",
            number: userInformationNumber,
          }),
          privacyItem: privacyItem({
            id: `privacy-item_${id}`,
            link: "#",
            number: privacyItemNumber,
          }),
          accessIp,
          processDatetime,
        };
      });

      try {
        // Give this sort an ID
        const sortId = ++sortIdRef.current;

        // Doing multisort
        if (sortId === sortIdRef.current) {
          let sorted = tableData;

          sorted.sort((a, b) => {
            for (let i = 0; i < sortBy.length; ++i) {
              if (a[sortBy[i].id] > b[sortBy[i].id])
                return sortBy[i].desc ? -1 : 1;
              if (a[sortBy[i].id] < b[sortBy[i].id])
                return sortBy[i].desc ? 1 : -1;
            }
            return 0;
          });
          setData(sorted.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize));
          setTotalSize(response.totalElements);
          setPageCount(Math.ceil(response.totalElements / pageSize));
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }

    },
    []
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFilterValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setSubmitState(submitState + 1);
  }


  const filterTable = (sortBy, pageIndex, pageSize) => {
    // event.preventDefault();
    setLoading(true);


    try {
      // Get the selected values from the form inputs
      const startDateValue = startDate;
      const endDateValue = endDate;

      const processTypeValue = "Setting";

      fetchData({
        sortBy,
        startDate: startDateValue,
        endDate: endDateValue,
        handle: filterValues.handle,
        accessIp: filterValues.accessIp,
        processType: processTypeValue,
        pageSize,
        pageIndex: pageIndex,
      });


      // Handle the response from the backend
      // ...
    } catch (error) {
      // Handle the error
      // ...
    } finally {
      setLoading(false);
    }
  };

  // Handle date change
  const handleDateChange = (start, end) => {
    setStartDate(start);
    setEndDate(end);
  };

  //Set data to detail
  const setDataToDetail = (data) => {
    console.log(data);
    // Access the HTML elements by their class names or IDs and assign the values
    $('#tbAccessIp').text(data.original.accessIp);
    $('#tbLoginId').text(data.original.loginId);
    $('#tbName').text(data.original.name);
    $('#tbProcessMenu').text(data.original.processMenu);
    $('#tbProcessType').html()
    // $('#tbProcessTask').html(`${data.original.processTask}`);
    // $('#tbPrivacyItem').html(`${data.original.privacyItem});
    $('#tbProcessDatetime').text(data.original.processDatetime);
  }

  return (
    <>
      <div className="page__header">
        <div className="page__header-title">
          <i
            className="fa-regular fa-star page__header-favourite__icon"
          // onClick={handleAddFavourite()}
          ></i>
          <span className="page__header-main-title">
            Privacy process history list
          </span>
          <div className="page__header-help">
            <i className="page__header-help__icon fa-solid fa-circle-exclamation"></i>
            <Link className="page__header-help-link">Help</Link>
          </div>
        </div>
        <div className="page__header-path">
          <Link className="page__header-path-link">Setting</Link>
          <span>{">"}</span>
          <Link className="page__header-path-link">
            Privacy process history
          </Link>
          <span>{">"}</span>
          <Link className="page__header-path-link">
            Privacy process history list
          </Link>
        </div>
      </div>
      <div className="pt-2 user-management__filter">
        <div className="user-management__userType">
          <div className="d-flex align-items-center">
            <button
              htmlFor="userType"
              className="label-common input__strength-label input_bg-primary input--light-border me-0"
            >
              Process date and time
            </button>
            <Datepicker onDateChange={handleDateChange} />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <select
              onChange={handleInputChange}
              id="userType"
              name="select-handle"
              className="label-common input__strength-label input_bg-primary input--light-border me-0"
            >
              <option value="1">Handle</option>
            </select>
            <input
              onChange={handleInputChange}
              className="input input--medium input--light-border me-2"
              type="text"
              placeholder="When the multiple inputs are being done, they can"
              name="handle"
              id=""
            />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <label
              htmlFor="userType"
              className="label-common input__strength-label input_bg-primary input--light-border  me-0"
            >
              Access IP
            </label>
            <input
              className=" input input--medium input--light-border"
              type="text"
              onChange={handleInputChange}
              placeholder="When the multiple inputs are being done, they can"
              name="accessIp"
              id=""
            />
          </div>
          <br />
        </div>
        <div className="d-flex align-items-center mt-2">
          <button
            htmlFor="processType"
            className="label-common input__strength-label input_bg-primary input--light-border me-0"
          >
            Process type
          </button>
          <select
            className="select--medium input--light-border pe-5 me-1"
            name="processType"
            id="processType"
          >
            <option value="Setting">Total</option>
            <option value="Setting">Setting</option>
          </select>
          <button className=" btn__class btn__primary" onClick={handleSubmit}>
            Search
          </button>
        </div>
      </div>
      <div className="d-flex">
        <Table
          columns={columns}
          data={data}
          fetchData={fetchData}
          filterTable={filterTable}
          submitState={submitState}
          loading={loading}
          totalSize={totalSize}
          pageCount={pageCount}
          list={hiddenColumns}
          columnShowDetails={showColumnIdsAfterShowProcessDetails}
          setDataToDetail={setDataToDetail}
        ></Table>
        { }
        <div id="tableRowDetail" className="table__record-detail">
          <div className="table__record-detail__wrapper">
            <div className="table__record-detail-title">
              | Privacy handler
            </div>
            <div className="table__record-detail-group-container">
              <div className="table__record-detail-group">
                <div className="table__record-detail-item">
                  <div className="table__record-detail-label"> Login ID</div>
                  <div className="table__record-detail-content" id="tbLoginId">

                  </div>
                </div>
                <div className="table__record-detail-item">
                  <div className="table__record-detail-label">Employee ID</div>
                  <div className="table__record-detail-content" >
                    EID102
                  </div>
                </div>
              </div>
              <div className="table__record-detail-item">
                <div className="table__record-detail-label">Name</div>
                <div className="table__record-detail-content" id="tbName">

                </div>
              </div>
              <div className="table__record-detail-group">
                <div className="table__record-detail-item">
                  <div className="table__record-detail-label">Company</div>
                  <div className="table__record-detail-content" id="tbCompany">
                    LG
                  </div>
                </div>
                <div className="table__record-detail-item">
                  <div className="table__record-detail-label">Department</div>
                  <div className="table__record-detail-content">
                    IT2
                  </div>
                </div>
              </div>
              <div className="table__record-detail-item">
                <div className="table__record-detail-label">Access IP</div>
                <div className="table__record-detail-content" id="tbAccessIp">

                </div>
              </div>
              <div className="table__record-detail-item">
                <div className="table__record-detail-label">Process date and time</div>
                <div className="table__record-detail-content" id="tbProcessDatetime">

                </div>
              </div>
            </div>
          </div>
          <div className="table__record-detail__wrapper">
            <div className="table__record-detail-title">
              | Privacy process
            </div>
            <div className="table__record-detail-group-container">

              <div className="table__record-detail-item">
                <div className="table__record-detail-label">Process menu</div>
                <div className="table__record-detail-content" id="tbProcessMenu">

                </div>
              </div>
              <div className="table__record-detail-item">
                <div className="table__record-detail-label">Process type</div>
                <div className="table__record-detail-content" id="tbProcessType">
                  Setting
                </div>
              </div>
              <div className="table__record-detail-item">
                <div className="table__record-detail-label">Process task</div>
                <div className="table__record-detail-content p-2" id="tbProcessTask">
                  <Link
                    onClick={() => setModalTaskDetailShow(1)}
                    className="setting__history-list__process-detail-link pe-2"
                  >
                    <i className="fa-solid fa-up-right-from-square"></i>
                    <span className="ms-1">Task detail</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="table__record-detail__wrapper">
            <div className="table__record-detail-title">
              | Privacy subject
            </div>
            <div className="table__record-detail-group-container">

              <div className="table__record-detail-item">
                <div className="table__record-detail-label">User information</div>
                <div className="table__record-detail-content">
                  <Link
                    onClick={() => setModalTaskDetailShow(1)}
                    className="setting__history-list__process-detail-link pe-2"
                  >
                    <i className="fa-solid fa-up-right-from-square"></i>
                    <span className="ms-1">3</span>
                  </Link>
                </div>
              </div>
              <div className="table__record-detail-item">
                <div className="table__record-detail-label">Privacy item</div>
                <div className="table__record-detail-content" id="tbPrivacyItem">
                  <Link
                    onClick={() => setModalTaskDetailShow(1)}
                    className="setting__history-list__process-detail-link pe-2"
                  >
                    <i className="fa-solid fa-up-right-from-square"></i>
                    <span className="ms-1">100</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <TaskDetail
        id={modalTaskDetailShow}
        show={modalTaskDetailShow !== null}
        onHide={() => setModalTaskDetailShow(null)}
      />
      <UserInformation
        id={modalUserInformationShow}
        show={modalUserInformationShow !== null}
        onHide={() => setModalUserInformationShow(null)}
      />
      <PrivacyItem
        id={modalPrivacyItemShow}
        show={modalPrivacyItemShow !== null}
        onHide={() => setModalPrivacyItemShow(null)}
      />
    </>
  );
}

function MenuManagement() {
  const navElement = 6;
  return (
    <>
      <PageScreen
        title="Privacy process history"
        navElement={navElement}
        sidebarId="710"
        children={PrivacyProcessHistoryList()}
      ></PageScreen>
    </>
  );
}

export default MenuManagement;
