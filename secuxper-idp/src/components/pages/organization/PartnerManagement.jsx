import React from "react";
import Header from "../../../layouts/header/Header";
import Sidebar from "../../../layouts/sidebar/Sidebar";
import { menuItems } from "../../../services/menuItems";

function CompanySiteManagement() {
  const navElement = 5;
  const sidebarElement = menuItems[navElement];
  return (
    <>
      <Header id={navElement + 1}></Header>

      <div className="content">
        <Sidebar
          title="Organization"
          items={sidebarElement.children}
          sidebarId="63"
          parentHref={sidebarElement.href}
        ></Sidebar>
        <div className="user-management__wrapper">Organization</div>
      </div>
    </>
  );
}

export default CompanySiteManagement;
