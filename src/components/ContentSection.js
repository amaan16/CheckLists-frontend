import React from 'react';
import TodoList from './TodoList';

const ContentSection = ({data}) => {

  const handleAddItemInData = (newItem,index) => {

    data.todos[index].items.push(newItem);
  };

  return (
    <div  className="content glass2" >
      {data.todos.map((todo, index) => (
        <TodoList index={index} todo={todo}  handleAddItemInData = {handleAddItemInData}/> // Pass the todo object as a prop
      ))}
    </div>
  );
};

export default ContentSection;
