import React from "react";
import Header from "../../../layouts/header/Header";
import Sidebar from "../../../layouts/sidebar/Sidebar";
import { menuItems } from "../../../services/menuItems";

function Visit() {
  const navElement = 1;
  const sidebarElement = menuItems[navElement];
  return (
    <>
      <Header id={navElement + 1}></Header>
      <div className="app-container">
        <div className="content">
          <Sidebar
            title="Visit"
            items={sidebarElement.children}
            sidebarId="21"
            parentHref={sidebarElement.href}
          ></Sidebar>
          <div className="user-management__wrapper">Request</div>
        </div>
      </div>
    </>
  );
}

export default Visit;
