import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header2 = ({ data, logOut,openPopUp }) => {

  const typesOfLists = [
    "Daily",
    "Monthly",
    "Quaterly",
    "Half-Yearly",
    "Yearly",
    "Custom",
  ];

  return (
    <div className="header2 glass">
      <h3 className="left-content">CheckLists' & Reminders'</h3>
      <div className="right-elements">
        
          <i className="material-icons button-link" onClick = {openPopUp}>add</i>
        
        
          <i className="material-icons button-link">notifications</i>
        
          <i className="material-icons button-link"  onClick={logOut}>logout</i>
      </div>
    </div>
  );
};

export default Header2;
