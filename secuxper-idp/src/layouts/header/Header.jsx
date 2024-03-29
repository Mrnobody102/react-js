import React, { useEffect, useState, useRef } from "react";

// Import services
import { Form } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

// Import components
import Favourite from "../common/favourites/Favourite";
import Menu from "../common/menu/Menu";
import Notification from "../common/notifications/Notification";
import UserSetting from "../common/usersetting/UserSetting";
import { menuItems, childrenItems } from "../../services/menuItems";

// Import style
import "./Header.css";

/*
  HuyPQ62
*/
const Header = ({ id }) => {
  // Hidden state of favourites, menu, notifications and profile setting
  const [showFavourites, setShowFavourites] = useState(false);
  const [showAllFunctions, setShowAllFunctions] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showProfileOptions, setShowProfileOptions] = useState(false);

  // State of search textbox and list of suggestions
  const initSearchItems = childrenItems;
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState(initSearchItems);

  // Hidden state of search suggestion box
  const [showSearchSuggestionsBox, setShowSearchSuggestionsBox] =
    useState(false);

  // Ref of favourite and menu, notifications and profile setting
  const favouriteAndMenuRef = useRef();
  const notificationAndUserSettingRef = useRef();

  const searchSuggestionsBoxRef = useRef();

  // Click outside the component area, the component will be hidden
  const handleClickOutside = (event) => {
    if (
      favouriteAndMenuRef.current &&
      !favouriteAndMenuRef.current.contains(event.target)
    ) {
      setShowFavourites(false);
      setShowAllFunctions(false);
    }

    if (
      notificationAndUserSettingRef.current &&
      !notificationAndUserSettingRef.current.contains(event.target)
    ) {
      setShowNotification(false);
      setShowProfileOptions(false);
    }

    if (
      searchSuggestionsBoxRef.current &&
      !searchSuggestionsBoxRef.current.contains(event.target)
    ) {
      setShowSearchSuggestionsBox(false);
    }
  };

  //
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const faStar = document.getElementById("favourite-icon");
    if (showFavourites) {
      setShowAllFunctions(false);
      faStar.classList.add("star-active");
    } else {
      faStar.classList.remove("star-active");
    }
  }, [showFavourites]);

  useEffect(() => {
    if (showAllFunctions) {
      setShowFavourites(false);
    }
  }, [showAllFunctions]);

  useEffect(() => {
    if (showNotification) {
      setShowProfileOptions(false);
    }
  }, [showNotification]);

  useEffect(() => {
    if (showProfileOptions) {
      setShowNotification(false);
    }
  }, [showProfileOptions]);

  // Search and highlight text when searching
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchText(value);

    const filteredItems = childrenItems
      .filter((item) => item.title.toLowerCase().includes(value.toLowerCase()))
      .slice(0, 20);

    // Update suggestions
    const formattedSuggestions = filteredItems.map((child) => {
      const titleParts = child.title.split(new RegExp(`(${value})`, "gi")); // case-insensitive (i) and global search (g)

      const highlightedTitle = titleParts.map((part, index) => {
        if (part.toLowerCase() === value.toLowerCase()) {
          return <span className="header__search-highlight">{part}</span>;
        }
        return part;
      });
      return { ...child, highlightedTitle };
    });

    setSuggestions(formattedSuggestions);
  };

  // Highlight search icon when input is focused
  const handleSearchFocus = () => {
    const searchIcon = document.getElementById("search-icon");
    searchIcon.classList.add("highlight");
    setShowSearchSuggestionsBox(true);
  };

  // Remove highlight from search icon when input is blurred
  const handleSearchBlur = () => {
    const searchIcon = document.getElementById("search-icon");
    searchIcon.classList.remove("highlight");
  };

  return (
    <div className="header">
      <div className="header__first-row">
        {/* Title area */}
        <Link className="app-title d-flex" to="/">
          <img
            className="app-icon"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFLElEQVR4AbWXU7SjSxQGr23btu/Ytm3btm3btp1jjo5tW2PvWfXQ/+p4+FBx8tVGJytPVO1XyyGpm394JWNdsV8z5n7eJXvTR0uz1nwUlL3i1Rv5e6rIBa/hwnXOxg8ke/O3t3iO1xSGNGzFe3ivs8+3+0T6rK8/T534xXg+NGPxp5eyFn0qkLPyEyk63l8KDrcQQgnXKfLqjJjkmL4uyjX9HJJz9s+xiNyTwJ7ZXZ9Nn/Zlw/RpX53PnPuVgAqG7PX/GFXTBWT0cKQQyN33peSd/EYg3/dbgbyA73bl+P/W0K6AET77RwHCdYmcDZWFypEgWIdwNRLCbQnkhPwiwHhsCtBy5kzb0yZ+fTFj+peiUOF6N3QBgq8ELZecvX/YFcgN+7GAcdAFRmIlkDzwq2KEIYAMY9DDbY2EcCq/c/2i3MpPsCvALqRH/fElAohw26YAlaeO/VLSJny9lscYSe6e7oV6NyxFGAnVI8JSIgGEs4hq7llni21gBJmRv8U7FQA6weMcp/TJX+/SBfQdYfGAcGSUQPaJf/fzXj6Dygl3KpA86PMbhHOdu6WbpG+vvVU9r04HEggoGA9jIhxot6paVZ4WXE4UyZGlHQvEtXzhZvrUfyVjQedb3FedgJBWxd6kGzwPCLCABCOBMK/htaryZP96AvckQPjloFPCQnE7vsuPAom9f/LlmKrX0tqU+SVd01c1ymFHuK3arUCGYEVUUBOBkLB68T4hDawFIv55qxihhLPVugDEdP5rmR6gRECXg/hjHSbHebcWBcH3JBDd8JcbtD6ixo8C3I9s+rcolIQjCA/36Ck6vmd7GHgEtrQvQDhBhOvoEs4EIo4PECDYx3uEEaw4dq6jbYGEYa1Lx/ZrfCPw+z8k6L9/DUKqltZxKhBwfKyAn/tYQQCOnB5isPl03/j5XpNtCxCAANgSOVOizjZnAi6eczd4ukwTOOE9RWCf/1iB9X5j7Av4vV2qmO/bpS+f/bD4HYNvyomCcLVsjuA1SBz0mi+w2W+mAOHzPIfJTPdRGfcsoCR8P6jgYxnkNWLMsnNTZ7gFrVnjxm1LuV1ei30I3nhuhRyL3GNwPGJPskMB37fLiI7nu+XXmgX/3mKQR93+d9x7jBEI2XdI3KaulMNrV95ZZpo7Su+Ef6z3LkKRmOs9T2Z4TJdpHtPj7l1Aq/zYd61+YAymYr3EUoBwOHpyhxCqB8zzHO2rwu9dQKuc326qdnuvqXh81VZ0gSO958iZDYck6sx58XdzE9ezrjLHbYUA3VBjmekxftU9C7i9W96onKrd36l83vXtWmIpcLL1JEGAcL45CV+5Z70hQNV6GJ1wKkA4lfODwjX3CbcUOF55iCDA7Kk8PiZWDzfaPdtjvAAdWOY75g2u7Z4CqiXU9b2yNamacEuBk++0MQRU+9fNWUO40f4JpkVm4Rw9oAPzPAe0YDTIWAkoVLAjgYNVRgnh6wctFgRmb1ot288fFBjjOsUqfL5HXwO1F3YFTG9Xn+NMgNbTAV2AyhHgyE1xHWIznBHc0x8TdsD0XvmTugDhwOx9hq24uaPJFEFg1uK1hgDVq3OvB9N+ve06Dr9Sj79Sp5UucOSJtkb4qrazDYGhO5bJUNOc26r9SPAtSDhz19t+zwK6CGNR7UdgY4VxNxGYNXyFlQDtB34P9KofSoBrukE4C6gLDF+29o4uwDGjavX+exe4R7b9OWIxAvM6LLAS0JfssQmo74xZHRcdHTdizS0E+u5e4jbAdeY/D/JZdwGDHSAkyVP5FwAAAABJRU5ErkJggg=="
          ></img>
          <span>SecuXper IDP+</span>
        </Link>

        {/* Search area */}
        <div className="searchbox" ref={searchSuggestionsBoxRef}>
          <i id="search-icon" className="fas fa-search pt-2 pe-1 ps-1"></i>
          <Form.Control
            className="form__search"
            size="sm"
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={handleSearchChange}
            onFocus={handleSearchFocus}
            onBlur={handleSearchBlur}
          />

          {/* Display search result */}
          {suggestions.length > 0 && showSearchSuggestionsBox && (
            <div className="suggestions">
              {suggestions.map((child) => (
                <Link
                  key={child.id}
                  to={"/" + child.parentHref + "/" + child.href}
                  className="header__search-result"
                >
                  {searchText.length > 0 ? child.highlightedTitle : child.title}
                </Link>
              ))}
            </div>
          )}
          {/* No result */}
          {suggestions.length == 0 && showSearchSuggestionsBox && (
            <div className="suggestions">
              <span className="header__search-result">No result!</span>
            </div>
          )}
        </div>
      </div>
      <div className="header__second-row">
        <div className="d-flex">
          <div className="d-flex" ref={favouriteAndMenuRef}>
            {/* Favourites */}
            <a
              className="header-icon header__star border-right "
              onClick={() => setShowFavourites(!showFavourites)}
            >
              <i id="favourite-icon" className="fa-solid fa-star"></i>
            </a>

            {/* Show Favourite component with animation */}
            {showFavourites && <Favourite />}

            {/* Menu */}
            <a
              className="header-icon border-right "
              onClick={() => setShowAllFunctions(!showAllFunctions)}
            >
              <i className="fas fa-grip-horizontal"></i>
            </a>
            {showAllFunctions && <Menu />}
          </div>

          {/* Menu items */}
          {menuItems.map((menuItem) => (
            <NavLink
              key={uuidv4()}
              id={menuItem.id}
              to={"/" + menuItem.href + "/" + menuItem.children[0].href}
              className={
                menuItem.id == id
                  ? "header-item header-item__active"
                  : "header-item "
              }
            >
              {menuItem.title}
            </NavLink>
          ))}
        </div>

        <div className="d-flex" ref={notificationAndUserSettingRef}>
          {/* Notifications */}
          <a
            className="header-icon border-left "
            onClick={() => setShowNotification(!showNotification)}
          >
            <span className="header-notification">
              <i className="fa-solid fa-bell"></i>
              <span className="badge">2</span>
            </span>
          </a>
          {showNotification && <Notification />}

          {/* Profile setting */}
          <a
            className="header-icon "
            onClick={() => setShowProfileOptions(!showProfileOptions)}
          >
            <i className="fas fa-user-circle"></i>
          </a>
          {showProfileOptions && <UserSetting />}
        </div>
      </div>
    </div>
  );
};

export default Header;
