import React, { useContext } from "react";
import "./main.css";
import Navbar from "../Navbar/Navbar";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { typographyContext } from "../../App";

const Main = () => {
  const [typography] = useContext(typographyContext);
  const style = {
    fontFamily: `${typography.fontFamily}, sans-serif`,
    fontSize: `${typography.size}px`,
    fontWeight: `${typography.weight}`,
    textTransform: `${typography.transform}`,
    fontStyle: `${typography.style}`,
    textDecoration: `${typography.decoration}`,
    lineHeight: `${typography.lineHeight}px`,
    letterSpacing: `${typography.letterSpacing}px`,
    wordSpacing: `${typography.wordSpacing}px`,
  };
  return (
    <div className="main-container">
      <Navbar />
      <div className="main-items">
        <h1>React Task</h1>
        <textarea defaultValue="Add your heading task here" style={style} />
        <div className="main-upload">
          <div className="main-upload-btns">
            <button>+</button>
            <label>
              <input type="file" />
              <FontAwesomeIcon icon={faFolder} className="main-folder-icon" />
            </label>
          </div>
          <span>Drag widget here</span>
        </div>
      </div>
    </div>
  );
};

export default Main;
