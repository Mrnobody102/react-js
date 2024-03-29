import React from "react";
import Header from "../../../layouts/header/Header";
import Sidebar from "../../../layouts/sidebar/Sidebar";
import { menuItems } from "../../../services/menuItems";

function Management() {
  const navElement = 4;
  const sidebarElement = menuItems[navElement];
  return (
    <>
      <Header id={navElement + 1}></Header>

      <div className="content">
        <Sidebar
          title="식수"
          items={sidebarElement.children}
          sidebarId="51"
          parentHref={sidebarElement.href}
        ></Sidebar>
        <div className="user-management__wrapper">식당메뉴관리</div>
      </div>
    </>
  );
}

export default Management;
