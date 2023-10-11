import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React, {useState} from "react";
import Header2 from "./Header2";
import Home from "./Home";
import SideNav from "./SideNav";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import "bootstrap/dist/css/bootstrap.min.css";
import ContentSection from "./ContentSection";
import ListSettings from "./ListSettings";

function App() {

  const [data , setData] = useState({
    userName : "",
    userId : "",
    todos : []
  });

  

  const initialData = (data) => {
    localStorage.setItem('userId', data.userId);
    setData((prevData)=>({
      ...prevData,
      userName : data.userName,
      userId : data.userId,
      todos:data.todos
    }))
  }

  const changeTodo = (newTodos) => {
    setData((prevData)=>({
      ...prevData,
      todos:newTodos
    }))
  }

  console.log("afterChange:  ", data)

  const [isLoggedIn ,setLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

  const updateLogIn = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setLoggedIn(true);
    console.log( " LoggedIn: ", isLoggedIn)
  }

  const logOut = () => {
    localStorage.setItem('isLoggedIn', 'false');
    setLoggedIn(false);
  }

  return (
    <Router>
      <Routes>
      
      <Route path="/login" element={<LoginPage updateLogIn = {updateLogIn} initialData = {initialData} />} />
      <Route path="/signup" element={<SignUpPage updateLogIn = {updateLogIn} initialData = {initialData} />} />
        <Route
          path=""
          element={
            <>
              <Home data = {data} isLoggedIn = {isLoggedIn} initialData = {initialData} logOut = {logOut} />
            </>
          }
        />
        {/* <Route
          path="/home"
          element={
            <>
              <Home data = {data}/>
            </>
          }
        /> */}
      </Routes>
    </Router>
    
  );
}

export default App;
