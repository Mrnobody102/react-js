import React from "react";
import Header from "../../../layouts/header/Header";
import Sidebar from "../../../layouts/sidebar/Sidebar";
import { menuItems } from "../../../services/menuItems";

function MenuManagement() {
  const navElement = 6;
  const sidebarElement = menuItems[navElement];
  return (
    <>
      <Header id={navElement + 1}></Header>
      <div className="app-container">
        <div className="content">
          <Sidebar
            title="User"
            items={sidebarElement.children}
            sidebarId="75"
            parentHref={sidebarElement.href}
          ></Sidebar>
          <div className="user-management__wrapper">Photo registration</div>
        </div>
      </div>
    </>
  );
}

export default MenuManagement;
