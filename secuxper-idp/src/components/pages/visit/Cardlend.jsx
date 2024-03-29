import React from "react";
import Header from "../../../layouts/header/Header";
import Sidebar from "../../../layouts/sidebar/Sidebar";
import { menuItems } from "../../../services/menuItems";

function Visit() {
  const sidebarElement = menuItems[1];
  return (
    <>
      <Header id="2"></Header>
      <div className="app-container">
        <div className="content">
          <Sidebar
            title="Visit"
            items={sidebarElement.children}
            sidebarId="23"
            parentHref={sidebarElement.href}
          ></Sidebar>
          <div className="user-management__wrapper">Card lend ID</div>
        </div>
      </div>
    </>
  );
}

export default Visit;
