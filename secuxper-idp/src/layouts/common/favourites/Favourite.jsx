import React, { useEffect, useState } from "react";
import "../Common.css";
import { menuItems } from "../../../services/menuItems";
import { Link } from "react-router-dom";

function Favourite() {
  const [favouriteItems, setFavouriteItems] = useState([]);

  useEffect(() => {
    const storedFavourites = JSON.parse(localStorage.getItem("favouriteItems"));
    if (storedFavourites) {
      setFavouriteItems(storedFavourites);
    }
  }, []);

  const handleRemoveFavourites = (itemId) => {
    const updatedFavourites = [...favouriteItems];
    if (updatedFavourites.includes(itemId)) {
      updatedFavourites.splice(updatedFavourites.indexOf(itemId), 1);
    }

    setFavouriteItems(updatedFavourites);
    localStorage.setItem("favouriteItems", JSON.stringify(updatedFavourites));
  };

  return (
    <div className="favourites">
      <header className="favourites-title">Favourites</header>
      <div className="favourites-list">
        {menuItems.map((menuItem) => (
          <div key={menuItem.id} className="menu-sublist">
            <div>
              {menuItem.children &&
                menuItem.children.map((childItem) => (
                  <div
                    key={childItem.id}
                    className={
                      favouriteItems.includes(childItem.id)
                        ? "d-block menu-item"
                        : "d-none"
                    }
                  >
                    <i
                      className="fa-solid fa-star pe-2 star-active"
                      onClick={() => handleRemoveFavourites(childItem.id)}
                    ></i>
                    <Link
                      to={"/" + menuItem.href + "/" + childItem.href}
                      className="favourites-link"
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

export default Favourite;
