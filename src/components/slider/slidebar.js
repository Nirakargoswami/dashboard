// src/components/Sidebar/Sidebar.jsx

import React from "react";
import "./sidebar.css";
import navLinks from "../../data/navigationLinks";
import { FiSettings } from 'react-icons/fi'; // Feather icons

function Sidebar() {
  return (
    <aside className="sidebar">

      {Object.values(navLinks).map((section) => (
        <div key={section.name} className="sidebar-section">
          <h4 className="sidebar-title">{section.name}</h4>
          <ul className="sidebar-list">
            {section.data.map(({ id, label, icon }) => (
              <li key={id} className="sidebar-item">
                <span className="sidebar-icon">{icon}</span>
                <span className="sidebar-label">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div style={{marginTop:"129px"}}>
        <span className="sidebar-icon">
          <FiSettings className="plus-icon" />

        </span>


      </div>
    </aside>
  );
}

export default Sidebar;
