import React, { useState } from "react";
import { Link } from "react-router-dom";
import GeneralServices from "../Services/GeneralServices";


const SideNav = ({ data, setData }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  // console.log("data: ",data)


  function changeVisibility (index) {
    const updatedTodos = [...data.todos];
    updatedTodos[index] = {
      ...updatedTodos[index],
      display: !updatedTodos[index].display,
    };
    const updatedData = { ...data, todos: updatedTodos };
    setData(updatedData);    
    console.log("data.todo ",data.todos[index])

    let req = {
      userId : data.userId,
      index : index,
      editedTodo : updatedTodos[index]
    }
    console.log("Req: ",req);
    const resp = GeneralServices.updateTodo(req);  
    // setDisplay(false);
  };

  function deleteTodo (index) {
    const updatedTodos = [...data.todos];
    updatedTodos.splice(index, 1);
    const updatedData = { ...data, todos: updatedTodos };
    setData(updatedData);    
    console.log("data.todo ",data.todos[index])

    let req = {
      userId : data.userId,
      index : index,
    }
    console.log("Req: ",req);
    const resp = GeneralServices.deleteTodo(req);  
  };


  return (
    <div className="sideNav glass">
      <ul>
        {data.todos.map((todo, index) => (
          <li
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <a  className="todo-link ">
          <span className="todo-name">{todo.nameOfTodo}</span>
            {hoveredIndex === index && (
              <div className="right-elements sideNav-icons">
              <i className="material-icons eye-icon" onClick={(event) => changeVisibility(index)}>visibility</i>
              <i className="material-icons eye-icon" onClick={(event) => deleteTodo(index)}>delete</i>
              </div>
              
            )}
          </a>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
