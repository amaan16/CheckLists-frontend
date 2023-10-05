import React, { useState } from "react";
import { Link } from "react-router-dom";

const SideNav = ({ data }) => {
  return (
    <div className="sideNav glass">
      <ul>
        {data.todos.map((todo, index) => (
          <li><a href=""> {todo.nameOfTodo}</a></li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
