import React,{useState} from "react";
import { Link } from "react-router-dom";

const Header2 = ({ data }) => {
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
                <Link >
                  <i className="material-icons button-link" >add</i>
                  
                </Link>
                <Link to="">
                  <i className="material-icons button-link">notifications</i>
                </Link>
              </div>
            </div>
      );
};

export default Header2;

