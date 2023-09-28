import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const ListSettings = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  console.log("inListSettings1");

  return (
    <div>
      <Popup open={isOpen} modal>
        <div>
          <div >
            <span className="close" onClick={onClose}>
              &times;
            </span>
            {console.log("inListSettings")}
            <h3>Modal Content Goes Here</h3>
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default ListSettings;
