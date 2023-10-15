import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <h4 className="nav-logo">ALMS Dev</h4>
      <ul>
        <li>Courses</li>
        <li>Dashboard</li>
        <li>Instructor Registration</li>
        <li>React Task</li>
        <li>Sample Page</li>
        <li>Student Registration</li>
      </ul>
    </div>
  );
};

export default Navbar;
