import React, { useContext, useState } from "react";
import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBorderNone,
  faCaretDown,
  faChevronDown,
  faChevronLeft,
  faCircleHalfStroke,
  faDisplay,
  faGear,
  faGlobe,
  faPencil,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { typographyContext } from "../../App";

const Sidebar = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [typography, setTypography] = useContext(typographyContext);
  console.log(typography);

  // handling onChange events
  const handleChange = (e, tag) => {
    if (tag === "size") setTypography({ ...typography, size: e.target.value });
    if (tag === "lh")
      setTypography({ ...typography, lineHeight: e.target.value });
    if (tag === "ls")
      setTypography({ ...typography, letterSpacing: e.target.value });
    if (tag === "ws")
      setTypography({ ...typography, wordSpacing: e.target.value });
    if (tag === "family")
      setTypography({ ...typography, fontFamily: e.target.value });
    if (tag === "weight")
      setTypography({ ...typography, weight: e.target.value });
    if (tag === "transform")
      setTypography({ ...typography, transform: e.target.value });
    if (tag === "style")
      setTypography({ ...typography, style: e.target.value });
    if (tag === "decoration")
      setTypography({ ...typography, decoration: e.target.value });
  };

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
          <select className="sidebar-input-select">
            <option>Normal</option>
            <option>Multiply</option>
            <option>Overlay</option>
            <option>Color</option>
          </select>
        </div>

        {/* Typography Pop-Up */}

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
                <select onChange={(e) => handleChange(e, "family")}>
                  <option>Roboto</option>
                  <option>Gabarito</option>
                  <option>Fira Sans</option>
                  <option>Rubik</option>
                </select>
              </div>
              <div className="sidebar-pop-up-item">
                <div className="sidebar-pop-up-item-tag">
                  <div className="sidebar-pop-up-item-tag-label">
                    <span>Size</span>
                    <FontAwesomeIcon icon={faDisplay} />
                  </div>
                  <input
                    type="range"
                    value={typography.size === "" ? 0 : typography.size}
                    min="0"
                    max="100"
                    onChange={(e) => handleChange(e, "size")}
                  />
                </div>
                <div className="sidebar-pop-up-item-select">
                  <div className="sidebar-pop-up-item-select-label">
                    <span>px</span>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </div>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={typography.size}
                    onChange={(e) => handleChange(e, "size")}
                  />
                </div>
              </div>
              <div className="sidebar-pop-up-item">
                <span>Weight</span>
                <select
                  defaultValue="600"
                  onChange={(e) => handleChange(e, "weight")}
                >
                  <option>100</option>
                  <option>200</option>
                  <option>300</option>
                  <option>400</option>
                  <option>500</option>
                  <option>600</option>
                  <option>700</option>
                </select>
              </div>
              <div className="sidebar-pop-up-item">
                <span>Transform</span>
                <select onChange={(e) => handleChange(e, "transform")}>
                  <option>Default</option>
                  <option>capitalize</option>
                  <option>uppercase</option>
                  <option>lowercase</option>
                </select>
              </div>
              <div className="sidebar-pop-up-item">
                <span>Style</span>
                <select onChange={(e) => handleChange(e, "style")}>
                  <option>Default</option>
                  <option>italic</option>
                  <option>normal</option>
                  <option>oblique</option>
                </select>
              </div>
              <div className="sidebar-pop-up-item">
                <span>Decoration</span>
                <select onChange={(e) => handleChange(e, "decoration")}>
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
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={
                      typography.lineHeight === "" ? 0 : typography.lineHeight
                    }
                    onChange={(e) => handleChange(e, "lh")}
                  />
                </div>
                <div className="sidebar-pop-up-item-select">
                  <div className="sidebar-pop-up-item-select-label">
                    <span>px</span>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </div>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={typography.lineHeight}
                    onChange={(e) => handleChange(e, "lh")}
                  />
                </div>
              </div>
              <div className="sidebar-pop-up-item">
                <div className="sidebar-pop-up-item-tag">
                  <div className="sidebar-pop-up-item-tag-label">
                    <span>Letter Spacing</span>
                    <FontAwesomeIcon icon={faDisplay} />
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={
                      typography.letterSpacing === ""
                        ? 0
                        : typography.letterSpacing
                    }
                    onChange={(e) => handleChange(e, "ls")}
                  />
                </div>
                <div className="sidebar-pop-up-item-select">
                  <div className="sidebar-pop-up-item-select-label">
                    <span>px</span>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </div>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={typography.letterSpacing}
                    onChange={(e) => handleChange(e, "ls")}
                  />
                </div>
              </div>
              <div className="sidebar-pop-up-item">
                <div className="sidebar-pop-up-item-tag">
                  <div className="sidebar-pop-up-item-tag-label">
                    <span>Word Spacing</span>
                    <FontAwesomeIcon icon={faDisplay} />
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={
                      typography.wordSpacing === "" ? 0 : typography.wordSpacing
                    }
                    onChange={(e) => handleChange(e, "ws")}
                  />
                </div>
                <div className="sidebar-pop-up-item-select">
                  <div className="sidebar-pop-up-item-select-label">
                    <span>px</span>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </div>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={typography.wordSpacing}
                    onChange={(e) => handleChange(e, "ws")}
                  />
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

      <span className="sidebar-collapse-arrow">
        <FontAwesomeIcon icon={faChevronLeft} />
      </span>
    </div>
  );
};

export default Sidebar;
