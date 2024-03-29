import React from "react";
import Header from "../../../../layouts/header/Header";
import Sidebar from "../../../../layouts/sidebar/Sidebar";
import { menuItems } from "../../../../services/menuItems";
import "../User.css";

function Photo() {
  const navElement = 0;
  const sidebarElement = menuItems[navElement];
  return (
    <>
      <Header id={navElement + 1}></Header>
      <div className="app-container">
        <div className="content">
          <Sidebar
            title="User"
            items={sidebarElement.children}
            sidebarId="12"
            parentHref={sidebarElement.href}
          ></Sidebar>
          <div className="user-management__wrapper">Photo registration</div>
        </div>
      </div>
    </>
  );
}

export default Photo;
