import React from "react";
import Header from "../../layouts/header/Header";
import Sidebar from "../../layouts/sidebar/Sidebar";
import { menuItems } from "../../services/menuItems";

function PageScreen({ title, navElement, sidebarId, children }) {
  return (
    <>
      <Header id={navElement + 1}></Header>
      <div className="app-container">
        <div className="content">
          <Sidebar
            title={`${title}`}
            items={menuItems[navElement].children}
            sidebarId={`${sidebarId}`}
            parentHref={menuItems[navElement].href}
          ></Sidebar>
          <div className="page__wrapper">
            <div className="page__container">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageScreen;
