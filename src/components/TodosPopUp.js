import React, { useState } from "react";
import Modal from "react-modal";

const TodosPopUp = ({ isOpen, onRequestClose }) => {
  const [selectedTodo, setSelectedTodo] = useState("");
  const Todos = [
    "Custom",
    "Daily",
    "Weekly",
    "Monthly",
    "Quaterly",
    "Half-Yearly",
    "Yearly",
  ];
  console.log("In POP UP Modal");
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Popup"
      shouldCloseOnOverlayClick={false}
      className="custom-modal"
      
    >
      <div className="modal-header"><h6>Add Todo</h6></div>
      
      <select
        value={selectedTodo}
        onChange={(e) => setSelectedTodo(e.target.value)}
      >
        <option value="">Select type</option>
        {Todos.map((todo) => (
          <option value={todo}>{todo}</option>
        ))}
      </select>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );

  return <div></div>;
};

export default TodosPopUp;
