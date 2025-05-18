import React from 'react';
import { FaLungs, FaTooth, FaBone } from 'react-icons/fa';
import { GiHeartBeats } from 'react-icons/gi';
import { MdOutlineDirectionsRun } from 'react-icons/md';
import './AnatomySection.css';
import Body from "../../assets/images/body.png"
const DashboardMainContent = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
        <span className="dashboard-week">This Week</span>
      </div>

      <div className="dashboard-body">
        <div className="body-figure-section">
          <div className="body-image">
            <img src={Body} alt="Human Body" />
            <div className="tag heart"><GiHeartBeats /> Healthy Heart</div>
            <div className="tag leg"><MdOutlineDirectionsRun /> Healthy Leg</div>
          </div>
        </div>

        <div className="status-section">
          <div className="status-card">
            <FaLungs className="status-icon lungs" />
            <div className="status-text">
              <p className="title">Lungs</p>
              <p className="date">Date: 26 Okt 2021</p>
              <div className="status-bar red"></div>
            </div>
          </div>

          <div className="status-card">
            <FaTooth className="status-icon tooth" />
            <div className="status-text">
              <p className="title">Teeth</p>
              <p className="date">Date: 26 Okt 2021</p>
              <div className="status-bar green"></div>
            </div>
          </div>

          <div className="status-card">
            <FaBone className="status-icon bone" />
            <div className="status-text">
              <p className="title">Bone</p>
              <p className="date">Date: 26 Okt 2021</p>
              <div className="status-bar orange"></div>
            </div>
          </div>
          <a  className="details-link">Details →</a>
        </div>
      </div>

      <div className="activity-section">
        <div className="activity-header">
          <p>Activity</p>
          <span>3 appointment on this week</span>
        </div>
        <div className="activity-graph">
          {/* Mock graph bars */}
          {['Mon','Tues','Wed','Thurs','Fri','Sat','Sun'].map((day, idx) => (
            <div className="graph-bar" key={idx}>
              <div className="bar blue"></div>
              <div className="bar teal"></div>
              <div className="bar light"></div>
              <span className="day-label">{day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardMainContent;
