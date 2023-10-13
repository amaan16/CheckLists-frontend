import React, { useState, useEffect } from "react";
import Header2 from "./Header2";
import SideNav from "./SideNav";
import ContentSection from "./ContentSection";
import TodosPopUp from "./TodosPopUp";
import GeneralServices from "../Services/GeneralServices";
import { Navigate } from "react-router-dom";

const Home = ({ data, isLoggedIn, initialData, logOut, setData }) => {
  const [popOpen, setPopOpen] = useState(false);

  const [userId, setUserID] = useState(localStorage.getItem("userId") || "");
  useEffect(() => {
    async function fetchData() {
      if (data.userId == "") {
        let req = {
          userId: userId,
        };
        const resp = await GeneralServices.getTodos(req);
        initialData(resp);
      }
    }
    fetchData();
  }, []);

  const openPopUp = () => {
    setPopOpen(true);
  };

  const updateData = (todoName) => {
    let newTodo = {
      nameOfTodo: todoName,
      display: true,
      items: []
    };
    setData((prevData)=>({
      ...prevData,
      todos : [...prevData.todos , newTodo]
    }))
    console.log(data.todos)
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <TodosPopUp
            isOpen={popOpen}
            onRequestClose={() => setPopOpen(false)}
            updateData={updateData}
          />
          <Header2 data={data} logOut={logOut} openPopUp={openPopUp} />
          <SideNav data={data} />
          <ContentSection data={data} />
        </>
      ) : (
        <Navigate
          to={{
            pathname: "/login",
          }}
        />
      )}
    </>
  );
};

export default Home;
