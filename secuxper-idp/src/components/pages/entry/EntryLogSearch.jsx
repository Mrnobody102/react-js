import React from "react";
import Header from "../../../layouts/header/Header";
import Sidebar from "../../../layouts/sidebar/Sidebar";
import { menuItems } from "../../../services/menuItems";

function PermissionPolicyManagement() {
  const navElement = 3;
  const sidebarElement = menuItems[navElement];
  return (
    <>
      <Header id={navElement + 1}></Header>
      <div className="content">
        <Sidebar
          title="Entry"
          items={sidebarElement.children}
          sidebarId="47"
          parentHref={sidebarElement.href}
        ></Sidebar>
        <div className="user-management__wrapper">Entry</div>
      </div>
    </>
  );
}

export default PermissionPolicyManagement;
