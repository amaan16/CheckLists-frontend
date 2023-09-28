import React, { useState, async } from "react";

const TodoList = ({ index, todo, handlePrint, handleAddItemInData }) => {
  const [Todo, setTodo] = useState(todo);
  const [visibility, setVisibility] = useState(todo.display);
  const [items, setItems] = useState(todo.items);
  const [newItemName, setNewItemName] = useState("");

  const handleItemStatusChange = (index, event) => {
    const updatedItems = [...items];
    updatedItems[index].Status = event.target.checked ? "Yes" : "No";
    setTimeout(() => {setItems(updatedItems);},250);
    // setItems(updatedItems);
    console.log(todo);
    handlePrint();
  };

  //   console.log("index",index);
  // console.log("Updated items", items);
  const handleAddItem = () => {
    if (newItemName.trim() !== "") {
      const newItem = {
        itemName: newItemName,
        Status: "No",
      };
      console.log("newItem", newItem);
      handleAddItemInData(newItem, index);
      setNewItemName("");
      console.log("Pre Updated items", items);
      const updatedItems = [...items, newItem];
      setItems(updatedItems);
      console.log("Updated items", items);
      //   console.log("Updated items in Todo", todo);
      //   setNewItemName("");
    }
  };

  const changeVisibility = () => {
    console.log("todo:", todo);
    todo.display = false;
    console.log("updated todo", todo);
    setVisibility(todo.display)
    // setVisibility(false);
    // handlePrint();
  };

  return (
    <div>
    {visibility && (
    <div className="notepad">
      <div className="inlineText">
        <h3>{todo.nameOfTodo}</h3>
        <div className="eye">
            <i className="material-icons" onClick={changeVisibility}>visibility</i>
        </div>
      </div>
      <ul>
        {todo.items.map((item, index) => (
        item.Status === "No" ? (
          <li index={index} className="left-elements">
            <input
              type="checkbox"
              id={`item-${index}`}
              name={`item-${index}`}
              value={item.itemName}
              checked={item.Status === "Yes"}
              onChange={(e) => handleItemStatusChange(index, e)}
            />
            <label htmlFor={`item-${index}`}>{item.itemName}</label>
          </li>
        ) : null
        ))}
      </ul>

      <div className="inlineText">
        <input
          type="text"
          placeholder="Enter new item"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          onKeyDown={(e) => {
            // console.log("Key pressed:", e.key);
            if (e.key == "Enter") {
              handleAddItem();
            }
          }}
        />
        {/* <button className="round-add-button" onClick={handleAddItem}>
          <i className="material-icons">add</i>
        </button> */}
      </div>
    </div>
  )}</div>
    
  );
};

export default TodoList;
