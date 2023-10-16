import React, { useState } from "react";
import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBorderNone,
  faCaretDown,
  faChevronDown,
  faCircleHalfStroke,
  faDisplay,
  faGear,
  faGlobe,
  faPencil,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [showPopUp, setShowPopUp] = useState(false);
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
              style={{
                backgroundColor: "lightgray",
                padding: "5px",
              }}
              onClick={() => setShowPopUp(!showPopUp)}
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
        {showPopUp && (
          <div className="sidebar-pop-up">
            <span className="sidebar-pop-up-arrow"></span>
            <div className="sidebar-pop-up-header">
              <h4>Typography</h4>
              <div className="sidebar-pop-up-header-btns">
                <button>
                  <FontAwesomeIcon icon={faRotateLeft} />
                </button>
                <button>+</button>
              </div>
            </div>
            <div className="sidebar-pop-up-items">
              <div className="sidebar-pop-up-item">
                <span>Family</span>
                <select>
                  <option>Roboto</option>
                  <option>Times new roman</option>
                  <option>Arial</option>
                </select>
              </div>
              <div className="sidebar-pop-up-item">
                <div className="sidebar-pop-up-item-tag">
                  <div className="sidebar-pop-up-item-tag-label">
                    <span>Size</span>
                    <FontAwesomeIcon icon={faDisplay} />
                  </div>
                  <input type="range" defaultValue="0" />
                </div>
                <div className="sidebar-pop-up-item-select">
                  <div className="sidebar-pop-up-item-select-label">
                    <span>px</span>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </div>
                  <input type="number" min="0" />
                </div>
              </div>
              <div className="sidebar-pop-up-item">
                <span>Weight</span>
                <select>
                  <option>100</option>
                  <option>200</option>
                  <option>300</option>
                  <option>400</option>
                  <option>500</option>
                  <option>600(semi-bold)</option>
                </select>
              </div>
              <div className="sidebar-pop-up-item">
                <span>Transform</span>
                <select>
                  <option>Default</option>
                  <option>capitalize</option>
                  <option>uppercase</option>
                  <option>lowercase</option>
                </select>
              </div>
              <div className="sidebar-pop-up-item">
                <span>Style</span>
                <select>
                  <option>Default</option>
                  <option>italic</option>
                  <option>normal</option>
                  <option>oblique</option>
                </select>
              </div>
              <div className="sidebar-pop-up-item">
                <span>Decoration</span>
                <select>
                  <option>Default</option>
                  <option>dashed</option>
                  <option>dotted</option>
                  <option>underline</option>
                </select>
              </div>
              <div className="sidebar-pop-up-item">
                <div className="sidebar-pop-up-item-tag">
                  <div className="sidebar-pop-up-item-tag-label">
                    <span>Line Height</span>
                    <FontAwesomeIcon icon={faDisplay} />
                  </div>
                  <input type="range" defaultValue="0" />
                </div>
                <div className="sidebar-pop-up-item-select">
                  <div className="sidebar-pop-up-item-select-label">
                    <span>px</span>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </div>
                  <input type="number" min="0" />
                </div>
              </div>
              <div className="sidebar-pop-up-item">
                <div className="sidebar-pop-up-item-tag">
                  <div className="sidebar-pop-up-item-tag-label">
                    <span>Letter Spacing</span>
                    <FontAwesomeIcon icon={faDisplay} />
                  </div>
                  <input type="range" defaultValue="0" />
                </div>
                <div className="sidebar-pop-up-item-select">
                  <div className="sidebar-pop-up-item-select-label">
                    <span>px</span>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </div>
                  <input type="number" min="0" />
                </div>
              </div>
              <div className="sidebar-pop-up-item">
                <div className="sidebar-pop-up-item-tag">
                  <div className="sidebar-pop-up-item-tag-label">
                    <span>Word Spacing</span>
                    <FontAwesomeIcon icon={faDisplay} />
                  </div>
                  <input type="range" defaultValue="0" />
                </div>
                <div className="sidebar-pop-up-item-select">
                  <div className="sidebar-pop-up-item-select-label">
                    <span>px</span>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </div>
                  <input type="number" min="0" />
                </div>
              </div>
            </div>
          </div>
        )}
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
