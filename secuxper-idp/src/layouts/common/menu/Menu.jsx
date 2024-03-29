import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "../../../services/menuItems";
import "../Common.css";

function Menu() {
  const [favouriteItems, setFavouriteItems] = useState([]);

  useEffect(() => {
    const storedFavourites = JSON.parse(localStorage.getItem("favouriteItems"));
    if (storedFavourites) {
      setFavouriteItems(storedFavourites);
    }
  }, []);

  const handleAddFavourites = (itemId) => {
    const updatedFavourites = [...favouriteItems];
    if (updatedFavourites.includes(itemId)) {
      updatedFavourites.splice(updatedFavourites.indexOf(itemId), 1);
    } else {
      updatedFavourites.push(itemId);
    }

    setFavouriteItems(updatedFavourites);
    localStorage.setItem("favouriteItems", JSON.stringify(updatedFavourites));
  };

  // const handleNavigateFunction = (itemId) => {};

  return (
    <div className="menu">
      <div className="menu-list row">
        {menuItems.map((menuItem) => (
          <div key={menuItem.id} className="menu-sublist col-2">
            <div className="menu-sublist-title">{menuItem.title}</div>
            <div>
              {menuItem.children &&
                menuItem.children.map((childItem) => (
                  <div key={childItem.id} className="menu-item">
                    <i
                      className={
                        favouriteItems.includes(childItem.id)
                          ? "fa-solid fa-star pe-2 star-active"
                          : "fa-solid fa-star pe-2"
                      }
                      onClick={() => handleAddFavourites(childItem.id)}
                    ></i>
                    <Link
                      className="menu-link"
                      to={"/" + menuItem.href + "/" + childItem.href}
                    >
                      {childItem.title}
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
