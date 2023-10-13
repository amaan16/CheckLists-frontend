import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import GeneralServices from "../Services/GeneralServices";

const TodosPopUp = ({ isOpen, onRequestClose, updateData }) => {
  const [selectedTodo, setSelectedTodo] = useState("");
  const [customTodoName, setCustomTodoName] = useState("");
  // setSelectedTodo("")
  const Todos = [
    "Custom",
    "Daily",
    "Weekly",
    "Monthly",
    "Quaterly",
    "Half-Yearly",
    "Yearly",
  ];

  const handleClose = () => {
    setSelectedTodo("");
    setCustomTodoName("");
    onRequestClose();
  };

  async function onSave() {
    let todoName = selectedTodo;
    if (selectedTodo != "") {
      const userId = localStorage.getItem("userId");
      if (selectedTodo == "Custom" && customTodoName != "") {
        todoName = customTodoName;
      }else{
        return
      }
      let req = {
        userId: userId,
        nameOfTodo: todoName,
        display: true,
      };
      const resp = await GeneralServices.addTodo(req);
      console.log(resp);
      if (resp.message == "Todo added Successfully") {
        updateData(todoName);
        setSelectedTodo("");
        setCustomTodoName("");
        onRequestClose();
      }
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Popup"
      shouldCloseOnOverlayClick={false}
      className="custom-modal"
    >
      <div className="modal-header">
        <h6>Add Todo</h6>
      </div>

      <div className="popup-Inputs">
        <label>Todo Type:</label>
        <select
          value={selectedTodo}
          onChange={(e) => {
            setSelectedTodo(e.target.value);
            setCustomTodoName("");
          }}
        >
          <option value="">Select type</option>
          {Todos.map((todo) => (
            <option value={todo}>{todo}</option>
          ))}
        </select>
      </div>
      {selectedTodo == "Custom" && (
        <div>
          <label>Todo Name:</label>
          <input
            type="text"
            name="todoName"
            value={customTodoName}
            onChange={(e) => setCustomTodoName(e.target.value)}
          ></input>
        </div>
      )}
      <div className="down-elements">
        <button className="cancel-button" onClick={handleClose}>
          Cancel
        </button>
        <button onClick={onSave}>Add</button>
      </div>
    </Modal>
  );

  return;
};

export default TodosPopUp;
