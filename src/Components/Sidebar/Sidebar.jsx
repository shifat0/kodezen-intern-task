import React from "react";
import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBorderNone,
  faCaretDown,
  faCircleHalfStroke,
  faGear,
  faGlobe,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <FontAwesomeIcon icon={faBars} />
        <h4>Edit Heading</h4>
        <FontAwesomeIcon icon={faBorderNone} />
      </div>
      <div className="sidebar-options">
        <div className="sidebar-options-items">
          <FontAwesomeIcon icon={faPencil} />
          <span>Content</span>
        </div>
        <div className="sidebar-options-items">
          <FontAwesomeIcon icon={faCircleHalfStroke} />
          <span>Style</span>
        </div>
        <div className="sidebar-options-items">
          <FontAwesomeIcon icon={faGear} />
          <span>Advanced</span>
        </div>
      </div>
      <div className="sidebar-items">
        <div className="sidebar-items-header">
          <FontAwesomeIcon icon={faCaretDown} />
          <h4>Title</h4>
        </div>
        <div className="sidebar-item">
          <span>Text Color</span>
          <div className="sidebar-item-icons">
            <FontAwesomeIcon
              icon={faGlobe}
              className="sidebar-icon-globe"
              style={{
                color: "deeppink",
                backgroundColor: "lightgray",
                padding: "5px",
                borderRight: "1px solid gray",
              }}
            />
            <input type="color" className="color-picker" />
          </div>
        </div>
        <div className="sidebar-item">
          <span>Typography</span>
          <div className="sidebar-item-icons">
            <FontAwesomeIcon
              icon={faGlobe}
              className="sidebar-icon-globe"
              style={{
                color: "gray",
                padding: "5px",
                borderRight: "1px solid gray",
              }}
            />
            <FontAwesomeIcon
              icon={faPencil}
              style={{ backgroundColor: "lightgray", padding: "5px" }}
            />
          </div>
        </div>
        <div className="sidebar-item">
          <span>Text Stroke</span>
          <div className="sidebar-item-icons">
            <FontAwesomeIcon icon={faPencil} style={{ padding: "5px" }} />
          </div>
        </div>
        <div className="sidebar-item">
          <span>Text Shadow</span>
          <div className="sidebar-item-icons">
            <FontAwesomeIcon icon={faPencil} style={{ padding: "5px" }} />
          </div>
        </div>
        <div className="sidebar-item">
          <span>Blend Mode</span>
          <div className="sidebar-item-icons">
            <select className="sidebar-input-select">
              <option>Normal</option>
              <option>Multiply</option>
              <option>Overlay</option>
              <option>Color</option>
            </select>
          </div>
        </div>
      </div>
      <div className="sidebar-footer">
        <span>Need Help</span>
        <p>
          <span>?</span>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
