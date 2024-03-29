/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "jstree";
import "../../../User.css";
import Swal from "sweetalert2";

function UserSearchData({
  data,
  searchInput,
  selectedItems,
  setSelectedItems,
}) {
  // Reference of tree and selected list
  const treeRef = useRef(null);
  const selectedRef = useRef(null);

  useEffect(() => {
    // Toggle class active whenever click on node of data tree
    $(selectedRef.current).on("click", ".um__user-data__selected-item", (e) => {
      const selectedItem = e.target;
      $(selectedItem).toggleClass("active");
    });
    if (treeRef.current) {
      $(treeRef.current).jstree("destroy");
    }

    $(treeRef.current).jstree({
      core: {
        data: getFilteredData(),
      },
    });

    return () => {
      if (treeRef.current) {
        $(treeRef.current).jstree("destroy");
      }
    };
  }, [searchInput]);

  // Filter data search
  const getFilteredData = () => {
    const filteredData = data.reduce((accumulator, parentItem) => {
      const filteredChildren = parentItem.children.filter((childItem) =>
        childItem.text.toLowerCase().includes(searchInput.toLowerCase())
      );
      if (filteredChildren.length > 0) {
        accumulator.push(...filteredChildren);
      }
      return accumulator;
    }, []);

    return filteredData.map((childItem) => {
      const parentItem = data.find((item) => item.children.includes(childItem));
      const parentText = parentItem ? parentItem.text : ""; // Handle case where parent item is not found
      return {
        id: childItem.id,
        text: `${parentText}/${childItem.text}`, // Include parent item's text
        icon: childItem.icon,
      };
    });
  };

  // Add to selected list
  const handleRightArrowClick = () => {
    const selectedNodes = $(treeRef.current).jstree("get_selected", true);
    selectedNodes.forEach((node) => {
      const selectedText = node.text;
      if (selectedItems.includes(selectedText)) {
        Swal.fire({
          title: "Item already selected",
          text: "This item is already in the selected list!",
          icon: "warning",
        });
      }
      if (node.children.length === 0) {
        $(treeRef.current).jstree(
          "move_node",
          node,
          "#um__user-data__selected"
        );
        $(node).removeClass("jstree-clicked");
        $(node).removeClass("active");
        setSelectedItems((prevItems) => {
          const itemText = node.text;
          if (!prevItems.includes(itemText)) {
            return [...prevItems, itemText];
          }
          return prevItems;
        });
      }
    });
  };

  // Remove from selected list
  const handleLeftArrowClick = () => {
    const selectedNodes = $(selectedRef.current).find(".active");
    selectedNodes.each((index, node) => {
      $(treeRef.current).jstree("move_node", node, "#um__user-data__data-tree");
      $(node).removeClass("active");
      setSelectedItems((prevItems) =>
        prevItems.filter((item) => item !== node.innerText)
      );
    });
  };

  // Remove all selected list
  const handleDoubleLeftArrowClick = () => {
    if (selectedItems.length > 0) {
      Swal.fire({
        title: "Confirm",
        text: "Do you sure you want to remove all selected items?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Accept",
        cancelButtonText: "Close",
      }).then((result) => {
        if (result.isConfirmed) {
          $(selectedRef.current)
            .find(".um__user-data__selected-item")
            .removeClass("active");
          setSelectedItems([]);
        } else {
          console.log("Search cancelled.");
        }
      });
    } else {
      Swal.fire({
        title: "No item in selected list!",
        text: "There are no item in your selected list.",
        icon: "warning",
      });
    }
  };

  // Change total
  useEffect(() => {
    $("#userSelectedTotal").text(selectedItems.length);
  }, [selectedItems]);

  return (
    <>
      <div className="um__user-data__container">
        <div className="um__user-data__data-tree" ref={treeRef} />
        <div className="um__user-data__trans-btn">
          <div
            className="um__user-data__trans-icon"
            onClick={handleRightArrowClick}
          >
            <i className="fa-solid fa-angle-right" />
          </div>
          <div
            className="um__user-data__trans-icon"
            onClick={handleLeftArrowClick}
          >
            <i className="fa-solid fa-angle-left" />
          </div>
          <div
            className="um__user-data__trans-icon"
            onClick={handleDoubleLeftArrowClick}
          >
            <i className="fa-solid fa-angle-double-left" />
          </div>
        </div>

        <div
          className="um__user-data__selected"
          id="um__user-data__selected"
          ref={selectedRef}
        >
          <div className="um__user-data-total">
            <div className="um__user-data-total-number">
              Total: <span id="userSelectedTotal">{selectedItems.length}</span>
            </div>
          </div>
          {selectedItems.map((item, index) => (
            <div
              key={item.id}
              className="um__user-data__selected-item"
              onClick={() =>
                $(selectedRef.current)
                  .find(".um__user-data__selected-item")
                  [index].classList.toggle("active")
              }
            >
              <i className="um__user-data-icon fa-solid fa-user"></i>
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default UserSearchData;
