import React from 'react';
import TodoList from './TodoList';
import GeneralServices from "../Services/GeneralServices";

const ContentSection = ({data}) => {

  const handleAddItemInData = (newItem,index) => {

    data.todos[index].items.push(newItem);
    let req = {
      userId : data.userId,
      index : index,
      editedTodo : data.todos[index]
    }
    console.log("Req: ",req);
    const resp = GeneralServices.updateTodo(req);
  };

  return (
    <div  className="content glass2" >
      {data.todos.map((todo, index) => (
        <TodoList index={index} todo={todo}  handleAddItemInData = {handleAddItemInData} userId = {data.userId}/> // Pass the todo object as a prop
      ))}
    </div>
  );
};

export default ContentSection;
