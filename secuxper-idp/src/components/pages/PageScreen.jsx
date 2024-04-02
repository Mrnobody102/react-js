import React from "react";
import Header from "../../layouts/header/Header";
import Sidebar from "../../layouts/sidebar/Sidebar";
import { menuItems } from "../../services/menuItems";

/**
 * The PageScreen component is a wrapper component that renders the common
 * layout for all pages. It contains a header, a sidebar and the content
 * for each page. It receives the page title, the navigation element and
 * the sidebar id as props from the parent component.
 *
 * @param {object} props - The props for the component
 * @param {string} props.title - The title of the page
 * @param {number} props.navElement - The navigation element id
 * @param {string} props.sidebarId - The sidebar id
 * @param {*} props.children - The content of the page
 */
function PageScreen({ title, navElement, sidebarId, children }) {
  return (
    <>
      {/* The header component is rendered with the id of the next nav element */}
      <Header id={navElement + 1} />
      <div className="app-container">
        <div className="content">
          {/* The Sidebar component is rendered with the items, title, sidebarId and parentHref as props */}
          <Sidebar
            title={`${title}`}
            items={menuItems[navElement].children}
            sidebarId={`${sidebarId}`}
            parentHref={menuItems[navElement].href}
          />
          {/* The page content is rendered inside a page__wrapper and page__container */}
          <div className="page__wrapper">
            <div className="page__container">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageScreen;
