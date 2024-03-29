import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { v4 as uuidv4 } from "uuid";

function Sidebar({ title, items, sidebarId, parentHref, handleActiveNavbar }) {
  // Hidden state of sidebar
  const [isOpen, setIsOpen] = useState(true);

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen ? (
        <div className="p-0 m-0 nav-container">
          <Nav>
            <div className="sidebar-list">
              <div className="sidebar-header">
                <div className="sidebar-title">
                  <i
                    className="fa-solid fa-bars pe-3 sidebar__toggle-button"
                    onClick={handleToggleSidebar}
                  ></i>
                  <span>{title}</span>
                </div>
                <div className="sidebar-list-item">
                  {items.map((item) => (
                    <Link
                      key={uuidv4()}
                      className={
                        item.id == sidebarId
                          ? "sidebar-item sidebar-item__active"
                          : "sidebar-item"
                      }
                      to={"/" + parentHref + "/" + item.href}
                      onClick={handleActiveNavbar}
                    >
                      <span>{item.title}</span>
                      <i
                        className={
                          item.id == sidebarId
                            ? "fa-solid fa-angle-right me-2"
                            : "d-none"
                        }
                      ></i>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="sibebar-footer">
                <Link className="sidebar__footer-item sidebar__help-desk">
                  <i className="fa-regular fa-user"></i>
                  <span className="sidebar__help-desk-title">Help Desk</span>
                </Link>
                <Link className="sidebar__footer-item sidebar__phone">
                  <i className="fa-solid fa-phone"></i>
                  <span className="sidebar__phone-number">02-1111-2222</span>
                </Link>
                <Link className="sidebar__footer-item sidebar__mail">
                  <i className="fa-regular fa-envelope"></i>
                  <span className="sidebar__mail-address">
                    idp-plus@lgcns.com
                  </span>
                </Link>
              </div>
            </div>
          </Nav>
        </div>
      ) : (
        <div className="p-0 m-0 sibebar--show">
          <div className="sidebar__only-icon">
            <i
              className="fa-solid fa-bars sidebar__toggle-button"
              onClick={handleToggleSidebar}
            ></i>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
