import React, { useState, async } from "react";
import GeneralServices from "../Services/GeneralServices";

const TodoList = ({ index, todo, handleAddItemInData,userId }) => {
  const [Todo, setTodo] = useState(todo);
  const [display, setDisplay] = useState(todo.display);
  const [items, setItems] = useState(todo.items);
  const [newItemName, setNewItemName] = useState("");

  const handleItemStatusChange = (itemIndex, event) => {
    const updatedItems = [...items];
    updatedItems[itemIndex].Status = event.target.checked ? "Yes" : "No";
    setTimeout(() => {setItems(updatedItems);},250);
    // setItems(updatedItems);
    let req = {
      userId : userId,
      index : index,
      itemIndex : itemIndex,
      change : "Yes"
    }
    console.log("req: ",req);
    const resp = GeneralServices.updateStatus(req);
    console.log(todo);
  };

  const handleAddItem = () => {
    if (newItemName.trim() !== "") {
      const newItem = {
        itemName: newItemName,
        Status: "No",
      };
      handleAddItemInData(newItem, index);
      setNewItemName("");
      const updatedItems = [...items, newItem];
      setItems(updatedItems);
    }
  };

  function changeVisibility () {
    todo.display = false;
    let req = {
      userId : userId,
      index : index,
      editedTodo : todo
    }
    console.log("Req: ",req);
    const resp = GeneralServices.updateTodo(req);  
    setDisplay(false);
  };

  return (
    <div className="glass2">
    {todo.display && (
    <div className="notepad glass">
      <div className="inlineText">
        <h3>{todo.nameOfTodo}</h3>
        <div className="eye">
            <i className="material-icons" onClick={changeVisibility}>visibility</i>
        </div>
      </div>
      <ul>
        {todo.items.map((item, index) => (
        item.Status === "No" ? (
          <li index={index} className="left-elements overFlow">
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
        class="glass"
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
