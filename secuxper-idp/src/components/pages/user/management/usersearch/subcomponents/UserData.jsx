import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "jstree";
import "../../../User.css";
import Swal from "sweetalert2";

function UserData({ data, selectedItems, setSelectedItems }) {
  // Reference of data-tree
  const treeRef = useRef(null);

  // Reference of selected nodes
  const selectedRef = useRef(null);

  $(treeRef.current).jstree({
    core: {
      data: data,
    },
    checkbox: {
      three_state: false,
    },
  });

  $(treeRef.current).on("open_node.jstree", (e, data) => {
    const parentNode = data.node;
    const parentIcon = parentNode.icon;

    if (parentIcon === "fas fa-plus-square") {
      $(treeRef.current).jstree("set_icon", parentNode, "fas fa-minus-square");
    }
  });

  $(treeRef.current).on("close_node.jstree", (e, data) => {
    const parentNode = data.node;
    const parentIcon = parentNode.icon;

    if (parentIcon === "fas fa-minus-square") {
      $(treeRef.current).jstree("set_icon", parentNode, "fas fa-plus-square");
    }
  });

  $(selectedRef.current).on("click", ".um__user-data__selected-item", (e) => {
    const selectedItem = e.target;
    $(selectedItem).toggleClass("active");
  });

  const handleRightArrowClick = () => {
    const selectedNodes = $(treeRef.current).jstree("get_selected", true);
    selectedNodes.forEach((node) => {
      const parentNode = $(treeRef.current).jstree("get_node", node.parent);
      const parentText = parentNode.text;
      const itemText = `${parentText}/${node.text}`;
      if (selectedItems.includes(itemText)) {
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
          if (!prevItems.includes(itemText)) {
            return [...prevItems, itemText];
          }
          return prevItems;
        });
      }
    });
  };

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
              key={index}
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

export default UserData;
