import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Header from "./Header";
import Header2 from "./Header2";
import SideNav from "./SideNav";
import "bootstrap/dist/css/bootstrap.min.css";
import ContentSection from "./ContentSection";
import ListSettings from "./ListSettings";

function App() {
  let user = {
    userName: "Amaan",
    userId: 12345,
  };

  const data = {
    userName: "Amaan",
    userId: 12345,
    todos: [
      {
        nameOfTodo: "Daily",
        display: true,
        items: [
          { itemName: "Eat", Status: "Yes" },
          { itemName: "Sleep", Status: "Yes" },
          { itemName: "Play", Status: "No" },
          { itemName: "Gym", Status: "No" },
          { itemName: "Drink Water", Status: "No" },
        ],
      },
      {
        nameOfTodo: "Monthly",
        display: true,
        items: [
          { itemName: "Eye Checkup", Status: "Yes" },
          { itemName: "Trip", Status: "Yes" },
          { itemName: "Visit Doctor", Status: "No" },
          { itemName: "Visit Dentist", Status: "No" },
          { itemName: "Visit Grandparents", Status: "No" },
          { itemName: "Visit Village", Status: "No" },
          { itemName: "Visit School", Status: "No" },
        ],
      },
      {
        nameOfTodo: "Monthly",
        display: true,
        items: [
          { itemName: "Eye Checkup", Status: "Yes" },
          { itemName: "Trip", Status: "Yes" },
          { itemName: "Visit Doctor", Status: "No" },
          { itemName: "Visit Dentist", Status: "No" },
          { itemName: "Visit Grandparents", Status: "No" },
          { itemName: "Visit Village", Status: "No" },
          { itemName: "Visit School", Status: "No" },
        ],
      },
      {
        nameOfTodo: "Daily",
        display: true,
        items: [
          { itemName: "Eat", Status: "Yes" },
          { itemName: "Sleep", Status: "Yes" },
          { itemName: "Play", Status: "No" },
          { itemName: "Gym", Status: "No" },
          { itemName: "Drink Water", Status: "No" },
        ],
      },
      {
        nameOfTodo: "Monthly",
        display: true,
        items: [
          { itemName: "Eye Checkup", Status: "Yes" },
          { itemName: "Trip", Status: "Yes" },
          { itemName: "Visit Doctor", Status: "No" },
          { itemName: "Visit Dentist", Status: "No" },
          { itemName: "Visit Grandparents", Status: "No" },
          { itemName: "Visit Village", Status: "No" },
          { itemName: "Visit School", Status: "No" },
        ],
      },
      {
        nameOfTodo: "Monthly",
        display: true,
        items: [
          { itemName: "Eye Checkup", Status: "Yes" },
          { itemName: "Trip", Status: "Yes" },
          { itemName: "Visit Doctor", Status: "No" },
          { itemName: "Visit Dentist", Status: "No" },
          { itemName: "Visit Grandparents", Status: "No" },
          { itemName: "Visit Village", Status: "No" },
          { itemName: "Visit School", Status: "No" },
        ],
      },
      {
        nameOfTodo: "Daily",
        display: true,
        items: [
          { itemName: "Eat", Status: "Yes" },
          { itemName: "Sleep", Status: "Yes" },
          { itemName: "Play", Status: "No" },
          { itemName: "Gym", Status: "No" },
          { itemName: "Drink Water", Status: "No" },
        ],
      },
      {
        nameOfTodo: "Monthly",
        display: true,
        items: [
          { itemName: "Eye Checkup", Status: "Yes" },
          { itemName: "Trip", Status: "Yes" },
          { itemName: "Visit Doctor", Status: "No" },
          { itemName: "Visit Dentist", Status: "No" },
          { itemName: "Visit Grandparents", Status: "No" },
          { itemName: "Visit Village", Status: "No" },
          { itemName: "Visit School", Status: "No" },
        ],
      },
      {
        nameOfTodo: "Monthly",
        display: true,
        items: [
          { itemName: "Eye Checkup", Status: "Yes" },
          { itemName: "Trip", Status: "Yes" },
          { itemName: "Visit Doctor", Status: "No" },
          { itemName: "Visit Dentist", Status: "No" },
          { itemName: "Visit Grandparents", Status: "No" },
          { itemName: "Visit Village", Status: "No" },
          { itemName: "Visit School", Status: "No" },
        ],
      },
      {
        nameOfTodo: "Daily",
        display: true,
        items: [
          { itemName: "Eat", Status: "Yes" },
          { itemName: "Sleep", Status: "Yes" },
          { itemName: "Play", Status: "No" },
          { itemName: "Gym", Status: "No" },
          { itemName: "Drink Water", Status: "No" },
        ],
      },
      {
        nameOfTodo: "Monthly",
        display: true,
        items: [
          { itemName: "Eye Checkup", Status: "Yes" },
          { itemName: "Trip", Status: "Yes" },
          { itemName: "Visit Doctor", Status: "No" },
          { itemName: "Visit Dentist", Status: "No" },
          { itemName: "Visit Grandparents", Status: "No" },
          { itemName: "Visit Village", Status: "No" },
          { itemName: "Visit School", Status: "No" },
        ],
      },
      {
        nameOfTodo: "Monthly",
        display: true,
        items: [
          { itemName: "Eye Checkup", Status: "Yes" },
          { itemName: "Trip", Status: "Yes" },
          { itemName: "Visit Doctor", Status: "No" },
          { itemName: "Visit Dentist", Status: "No" },
          { itemName: "Visit Grandparents", Status: "No" },
          { itemName: "Visit Village", Status: "No" },
          { itemName: "Visit School", Status: "No" },
        ],
      },
      {
        nameOfTodo: "Daily",
        display: true,
        items: [
          { itemName: "Eat", Status: "Yes" },
          { itemName: "Sleep", Status: "Yes" },
          { itemName: "Play", Status: "No" },
          { itemName: "Gym", Status: "No" },
          { itemName: "Drink Water", Status: "No" },
        ],
      },
      {
        nameOfTodo: "Monthly",
        display: true,
        items: [
          { itemName: "Eye Checkup", Status: "Yes" },
          { itemName: "Trip", Status: "Yes" },
          { itemName: "Visit Doctor", Status: "No" },
          { itemName: "Visit Dentist", Status: "No" },
          { itemName: "Visit Grandparents", Status: "No" },
          { itemName: "Visit Village", Status: "No" },
          { itemName: "Visit School", Status: "No" },
        ],
      },
      {
        nameOfTodo: "Monthly",
        display: true,
        items: [
          { itemName: "Eye Checkup", Status: "Yes" },
          { itemName: "Trip", Status: "Yes" },
          { itemName: "Visit Doctor", Status: "No" },
          { itemName: "Visit Dentist", Status: "No" },
          { itemName: "Visit Grandparents", Status: "No" },
          { itemName: "Visit Village", Status: "No" },
          { itemName: "Visit School", Status: "No" },
        ],
      },
      {
        nameOfTodo: "Daily",
        display: true,
        items: [
          { itemName: "Eat", Status: "Yes" },
          { itemName: "Sleep", Status: "Yes" },
          { itemName: "Play", Status: "No" },
          { itemName: "Gym", Status: "No" },
          { itemName: "Drink Water", Status: "No" },
        ],
      },
      {
        nameOfTodo: "Monthly",
        display: true,
        items: [
          { itemName: "Eye Checkup", Status: "Yes" },
          { itemName: "Trip", Status: "Yes" },
          { itemName: "Visit Doctor", Status: "No" },
          { itemName: "Visit Dentist", Status: "No" },
          { itemName: "Visit Grandparents", Status: "No" },
          { itemName: "Visit Village", Status: "No" },
          { itemName: "Visit School", Status: "No" },
        ],
      },
      {
        nameOfTodo: "Monthly",
        display: true,
        items: [
          { itemName: "Eye Checkup", Status: "Yes" },
          { itemName: "Trip", Status: "Yes" },
          { itemName: "Visit Doctor", Status: "No" },
          { itemName: "Visit Dentist", Status: "No" },
          { itemName: "Visit Grandparents", Status: "No" },
          { itemName: "Visit Village", Status: "No" },
          { itemName: "Visit School", Status: "No" },
        ],
      },
      {
        nameOfTodo: "Daily",
        display: true,
        items: [
          { itemName: "Eat", Status: "Yes" },
          { itemName: "Sleep", Status: "Yes" },
          { itemName: "Play", Status: "No" },
          { itemName: "Gym", Status: "No" },
          { itemName: "Drink Water", Status: "No" },
        ],
      },
      {
        nameOfTodo: "Monthly",
        display: true,
        items: [
          { itemName: "Eye Checkup", Status: "Yes" },
          { itemName: "Trip", Status: "Yes" },
          { itemName: "Visit Doctor", Status: "No" },
          { itemName: "Visit Dentist", Status: "No" },
          { itemName: "Visit Grandparents", Status: "No" },
          { itemName: "Visit Village", Status: "No" },
          { itemName: "Visit School", Status: "No" },
        ],
      },
      {
        nameOfTodo: "Monthly",
        display: true,
        items: [
          { itemName: "Eye Checkup", Status: "Yes" },
          { itemName: "Trip", Status: "Yes" },
          { itemName: "Visit Doctor", Status: "No" },
          { itemName: "Visit Dentist", Status: "No" },
          { itemName: "Visit Grandparents", Status: "No" },
          { itemName: "Visit Village", Status: "No" },
          { itemName: "Visit School", Status: "No" },
        ],
      },
      {
        nameOfTodo: "Daily",
        display: true,
        items: [
          { itemName: "Eat", Status: "Yes" },
          { itemName: "Sleep", Status: "Yes" },
          { itemName: "Play", Status: "No" },
          { itemName: "Gym", Status: "No" },
          { itemName: "Drink Water", Status: "No" },
        ],
      },
      {
        nameOfTodo: "Monthly",
        display: true,
        items: [
          { itemName: "Eye Checkup", Status: "Yes" },
          { itemName: "Trip", Status: "Yes" },
          { itemName: "Visit Doctor", Status: "No" },
          { itemName: "Visit Dentist", Status: "No" },
          { itemName: "Visit Grandparents", Status: "No" },
          { itemName: "Visit Village", Status: "No" },
          { itemName: "Visit School", Status: "No" },
        ],
      },
      {
        nameOfTodo: "Monthly",
        display: true,
        items: [
          { itemName: "Eye Checkup", Status: "Yes" },
          { itemName: "Trip", Status: "Yes" },
          { itemName: "Visit Doctor", Status: "No" },
          { itemName: "Visit Dentist", Status: "No" },
          { itemName: "Visit Grandparents", Status: "No" },
          { itemName: "Visit Village", Status: "No" },
          { itemName: "Visit School", Status: "No" },
        ],
      },
      {
        nameOfTodo: "Daily",
        display: true,
        items: [
          { itemName: "Eat", Status: "Yes" },
          { itemName: "Sleep", Status: "Yes" },
          { itemName: "Play", Status: "No" },
          { itemName: "Gym", Status: "No" },
          { itemName: "Drink Water", Status: "No" },
        ],
      },
      {
        nameOfTodo: "Monthly",
        display: true,
        items: [
          { itemName: "Eye Checkup", Status: "Yes" },
          { itemName: "Trip", Status: "Yes" },
          { itemName: "Visit Doctor", Status: "No" },
          { itemName: "Visit Dentist", Status: "No" },
          { itemName: "Visit Grandparents", Status: "No" },
          { itemName: "Visit Village", Status: "No" },
          { itemName: "Visit School", Status: "No" },
        ],
      },
      {
        nameOfTodo: "Monthly",
        display: true,
        items: [
          { itemName: "Eye Checkup", Status: "Yes" },
          { itemName: "Trip", Status: "Yes" },
          { itemName: "Visit Doctor", Status: "No" },
          { itemName: "Visit Dentist", Status: "No" },
          { itemName: "Visit Grandparents", Status: "No" },
          { itemName: "Visit Village", Status: "No" },
          { itemName: "Visit School", Status: "No" },
        ],
      },
    ],
  };

  return (
    <Router>
      {/* <Header data={data} /> */}
      <Header2 data={data} />
      <SideNav data = {data} />
      <ContentSection user={user} data={data} /> 
    </Router>
  );
}

export default App;
