import React, { useContext, useEffect, useState } from "react";
import UserData from "./subcomponents/UserData";
import UserDataFavourites from "./subcomponents/UserDataFavourites";
import UserDataSearch from "./subcomponents/UserDataSearch";
import Swal from "sweetalert2";

import { CustomUserContext } from "../../../../../providers/user/UserManagementProvider";
import { useNavigate } from "react-router-dom";

function UserSearch({ onClose }) {
  const [activeTab, setActiveTab] = useState("User");
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const { customUsers = [], setCustomUsers } = useContext(CustomUserContext);
  const [selectedItems, setSelectedItems] = useState(customUsers);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  // Tree data state
  const [data, setData] = useState([]);

  // Get users data from api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/data");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  });

  const handleConfirmSearch = (data) => {
    Swal.fire({
      title: "Save",
      text: "Do you sure you want to save?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "Close",
    }).then((result) => {
      if (result.isConfirmed) {
        setCustomUsers(data);
        Swal.fire({
          title: "Save successfully!",
          text: "Selected items has been saved successfully.",
          icon: "success",
        });
        navigate("/user/user_management");
      } else {
        console.log("Search cancelled.");
      }
    });
  };

  // Save with api
  // const saveCustomUsers = async (data) => {
  //   try {
  //     //
  //     const response = await fetch("http://localhost:3000/custom_users", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     });
  //     const res = await response.json();
  //     if (res.data) {
  //       setCustomUsers(res.data.custom_users);
  //       Swal.fire({
  //         title: "Item already selected",
  //         text: "This item is already in the selected list!",
  //         icon: "warning",
  //       });
  //       navigate("/user/user_management");
  //       return;
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <div className="popup-overlay" />
      <div className="popup popup--medium">
        <div className="popup-content">
          <div className="popup-title">
            <h6>User search</h6>
            <div onClick={onClose}>
              <i className="fa-solid fa-xmark popup__close-icon"></i>
            </div>
          </div>
          <div className="popup__group-no-border">
            <div className="user-search__filter">
              <div className="user-search__filter-select mb-2">
                <select
                  name="userType"
                  id="userType"
                  className="label-common input__strength-label input_bg-primary input--light-border"
                >
                  <option value="1">Employees of the company</option>
                </select>
                <select
                  name="userType"
                  id="userType"
                  className="input--light-border"
                >
                  <option value="1">Full time employees</option>
                </select>
              </div>
              <div className="user-search__filter-search">
                <div className="user-search__filter-search-input-group">
                  <label className="label-common input__strength-label input_bg-primary input--light-border">
                    Employee number/Name/Department
                  </label>
                  <input
                    className="input input--light-border"
                    type="text"
                    placeholder="When the multiple inputs are being done, they can search"
                    value={searchInput}
                    onChange={handleSearchInputChange}
                  />
                </div>
                <button className="btn__primary btn__class ms-3">Search</button>
              </div>
            </div>
            <div className="user-search__tree-data">
              <div>
                <div className="d-flex">
                  <div className="user-search__data-list-func d-flex mb-0">
                    <div
                      className={
                        activeTab === "User"
                          ? "user-search__data-list-item active"
                          : "user-search__data-list-item "
                      }
                      onClick={() => handleTabClick("User")}
                    >
                      User
                    </div>
                    <li
                      className={
                        activeTab === "Favorites"
                          ? "user-search__data-list-item active"
                          : "user-search__data-list-item "
                      }
                      onClick={() => handleTabClick("Favorites")}
                    >
                      Favorites
                    </li>
                    <li
                      className={
                        activeTab === "Search"
                          ? "user-search__data-list-item border-right active"
                          : "user-search__data-list-item border-right"
                      }
                      onClick={() => handleTabClick("Search")}
                    >
                      Search
                    </li>
                  </div>
                  <div className="user-search__data-list-nothing"></div>
                </div>
                <div>
                  {activeTab === "User" && (
                    <UserData
                      data={data}
                      selectedItems={selectedItems}
                      setSelectedItems={setSelectedItems}
                    />
                  )}
                  {activeTab === "Favorites" && (
                    <UserDataFavourites
                      data={data}
                      selectedItems={selectedItems}
                      setSelectedItems={setSelectedItems}
                    />
                  )}
                  {activeTab === "Search" && (
                    <UserDataSearch
                      data={data}
                      searchInput={searchInput}
                      setSelectedItems={setSelectedItems}
                      selectedItems={selectedItems}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="group__btn">
              <button
                className="btn__class btn__confirm"
                onClick={() => {
                  handleConfirmSearch(selectedItems);
                }}
              >
                Save
              </button>
              <button className="btn__class btn__close" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserSearch;
