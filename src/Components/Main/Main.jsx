import React from "react";
import "./main.css";
import Navbar from "../Navbar/Navbar";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Main = () => {
  return (
    <div className="main-container">
      <Navbar />
      <div className="main-items">
        <h1>React Task</h1>
        <textarea defaultValue="Add your heading task here" />
        <div className="main-upload">
          <div className="main-upload-btns">
            <button>+</button>
            <label>
              <input type="file" />
              <button>
                <FontAwesomeIcon icon={faFolder} className="main-folder-icon" />
              </button>
            </label>
          </div>
          <span>Drag widget here</span>
        </div>
      </div>
    </div>
  );
};

export default Main;
