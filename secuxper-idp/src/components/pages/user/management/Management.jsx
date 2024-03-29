import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import Header from "../../../../layouts/header/Header";
import Sidebar from "../../../../layouts/sidebar/Sidebar";
import { menuItems } from "../../../../services/menuItems";
import UserSearch from "./usersearch/UserSearch";
import "../../Page.css";
import "../User.css";
import "../../../../assets/styles/layouts/Popups.css";
import UserManagementProvider, {
  CustomUserContext,
} from "../../../../providers/user/UserManagementProvider";

import Swal from "sweetalert2";

import { getUserData } from "../../../../services/apis/users";

function Management() {
  const navElement = 0;
  const sidebarElement = menuItems[navElement];

  const [showSearch, setShowSearch] = useState(false);
  const [showCustomUsers, setShowCustomUsers] = useState(false);
  // const { customUsers = [], setCustomUsers } = useContext(CustomUserContext);

  // Data table define
  const columns = [
    {
      name: "User ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Company",
      selector: (row) => row.company,
    },
    {
      name: "Department",
      selector: (row) => row.department,
    },
    // {
    //   name: "Name/Appointment",
    //   selector: (row) => row.appointment,
    // },
    // {
    //   name: "Status",
    //   selector: (row) => row.status,
    // },
    // {
    //   name: "Employee number",
    //   selector: (row) => row.employeeNumber,
    // },
    // {
    //   name: "Explaination",
    //   selector: (row) => row.explaination,
    // },
    // {
    //   name: "Authentication",
    //   selector: (row) => row.authentication,
    // },
    // {
    //   name: "Login ID",
    //   selector: (row) => row.loginId,
    // },
    // {
    //   name: "User type",
    //   selector: (row) => row.userType,
    // },
    // {
    //   name: "Day and time of revision",
    //   selector: (row) => row.dayAndTimeOfRevision,
    // },
  ];

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getUserData()
      .then((res) => {
        setUserData(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);

  const getUser = async () => {};

  const handleAddUser = () => {};

  // Handle when click custom user
  function handleSubmitCustomUsers() {
    setShowSearch(true);
  }

  function handleDeleteCustomUser(id) {
    Swal.fire({
      title: "Confirm",
      text: "Do you sure you want to remove it from selected list?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Accept",
      cancelButtonText: "Close",
    }).then((result) => {
      if (result.isConfirmed) {
        // setCustomUsers((prevItems) => prevItems.filter((item) => item !== id));
      } else {
        console.log("Cancelled.");
      }
    });
  }

  function handleDeleteAllCustomUser() {
    Swal.fire({
      title: "Confirm",
      text: "Do you sure you want to remove all selected list?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Accept",
      cancelButtonText: "Close",
    }).then((result) => {
      if (result.isConfirmed) {
        // setCustomUsers([]);
      } else {
        console.log("Cancelled.");
      }
    });
  }

  return (
    <UserManagementProvider>
      <CustomUserContext.Consumer>
        {({ customUsers, setCustomUsers }) => {
          const items = customUsers;
          return (
            <>
              <Header id={navElement + 1}></Header>
              <div className="app-container">
                <div className="content">
                  <Sidebar
                    title="User"
                    items={sidebarElement.children}
                    sidebarId="11"
                    parentHref={sidebarElement.href}
                  ></Sidebar>
                  <div className="page__wrapper">
                    <div className="page__header">
                      <div className="page__header-title">
                        <i className="fa-regular fa-star"></i>
                        <span className="page__header-main-title">
                          User list
                        </span>
                        <div className="page__header-help">
                          <i className="page__header-help__icon fa-solid fa-circle-exclamation"></i>
                          <Link className="page__header-help-link">Help</Link>
                        </div>
                      </div>
                      <div className="page__header-path">
                        <span>
                          <Link className="page__header-path-link">User</Link>
                          <span>{">"}</span>
                          <Link className="page__header-path-link">
                            User Management
                          </Link>
                          <span>{">"}</span>
                          <Link className="page__header-path-link">
                            {items.length}
                          </Link>
                        </span>
                      </div>
                    </div>
                    {/* Filter area */}
                    <div className="pt-2 user-management__filter">
                      <div className="user-management__userType">
                        <div className="d-flex align-items-center justify-content-center">
                          <button
                            htmlFor="userType"
                            className="label-common border-0 input__bg-primary input--light-border input__strength-label"
                          >
                            <span className="pink-color">*</span>User
                            type/Company
                          </button>
                          <select
                            className="select--medium select--bg-secondary me-1"
                            name="userType"
                            id="userType"
                          >
                            <option value="1">Employees of the company</option>
                          </select>
                          <select
                            className="select--medium select--bg-secondary me-3"
                            name="userType"
                            id="userType"
                          >
                            <option value="1">Total</option>
                          </select>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                          <button
                            htmlFor="userType"
                            className="label-common border-0 input__bg-primary input--light-border input__strength-label"
                          >
                            Site
                          </button>
                          <select
                            className="select--medium me-1"
                            name="userType"
                            id="userType"
                          >
                            <option value="1">Total</option>
                          </select>
                        </div>
                        <div className="d-flex align-baseline justify-content-center">
                          <button className="border-0 input__bg-primary input--light-border input__strength-label">
                            <span className="ps-2 pe-2">User custom</span>
                          </button>
                          <div className="element-wrapper--medium d-flex align-align-items-baseline">
                            <div className="user-management__custom-user-list">
                              {items.map((item) => (
                                <div className="user-management__custom-user-item">
                                  <i
                                    className="pt-1 fas fa-times"
                                    // onClick={handleDeleteCustomUser(item.id)}
                                  ></i>
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                            <i
                              className="user-management__custom-user-list--close-icon fas fa-times"
                              onClick={handleDeleteAllCustomUser}
                            ></i>
                          </div>
                          <button
                            className="border-0 icon__wrapper-main"
                            onClick={handleSubmitCustomUsers}
                          >
                            <i className="fa-solid fa-up-right-from-square"></i>
                          </button>
                        </div>
                      </div>

                      <button className="mt-2 btn__class btn__primary">
                        Search
                      </button>
                    </div>
                    <div className="user-management__main">
                      <div className="datatable-title user-management__data-table-title d-flex">
                        | User list
                      </div>
                      <DataTable
                        columns={columns}
                        data={userData}
                        pagination
                        selectableRows
                        fixedHeader
                        selectableRowsHighlight
                        highlightOnHover
                      ></DataTable>
                    </div>
                    <div className="user-management__options d-flex justify-content-end mt-3">
                      <div
                        className="btn__class btn__primary me-2"
                        onClick={handleAddUser()}
                      >
                        New
                      </div>
                      <div className="btn__class btn__disable">Resignation</div>
                    </div>
                  </div>
                </div>
              </div>
              {showSearch && (
                <UserSearch onClose={() => setShowSearch(false)} />
              )}
            </>
          );
        }}
      </CustomUserContext.Consumer>
    </UserManagementProvider>
  );
}

export default Management;
