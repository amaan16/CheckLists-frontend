import React, {useState, useEffect} from "react";
import Header2 from "./Header2";
import SideNav from "./SideNav";
import ContentSection from "./ContentSection";
import TodosPopUp from "./TodosPopUp";
import GeneralServices from "../Services/GeneralServices";
import { Navigate } from "react-router-dom";

const Home = ({ data, isLoggedIn, initialData, logOut }) => {

  const [popOpen , setPopOpen] = useState(false);
  
  const [userId, setUserID] = useState(localStorage.getItem('userId') || '');
  console.log("userId: ",userId)
  useEffect(() => {
    async function fetchData(){
      if(data.userId == "" ){
        let req = {
          userId : userId
        }
        const resp = await GeneralServices.getTodos(req);
        initialData(resp);

      }
    }
    fetchData();
  },[]);

  console.log("popOpen:", popOpen)

  const openPopUp = () => {
    setPopOpen(true);
    console.log("popOpen: ",popOpen)
  }

  return (
    
    <>
    {isLoggedIn ? (
        <>
          <TodosPopUp isOpen = {popOpen} onRequestClose = {() => setPopOpen(false)}  />
          <Header2 data={data} logOut = {logOut} openPopUp={openPopUp}/>
          <SideNav data={data} />
          <ContentSection data={data} />
        </>
      ) : (
        <Navigate
          to={{
            pathname: '/login',
          }}
        />
      )}
    </>
  );
};

export default Home;
