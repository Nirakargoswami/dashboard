import React from 'react';
import './header.css';
import { FiSearch, FiBell, FiPlus } from 'react-icons/fi'; // Feather icons
import avatarImg from '../../assets/images/user.png'; // replace with your avatar image

const Header = () => {
  return (
    <header className="header">
      {/* Left Section */}
      <div className="header-left">
        <h1 className="logo">
          <span style={{color:"rgb(39, 217, 217)"}}>Health</span>
          <span style={{color:"black"}} >care.</span>
        </h1>
      </div>

      {/* Middle Section */}
      <div className="header-middle">
        <div className="search-bar">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search" />
          
        </div>
        <FiBell className="icon bell" />
      </div>

      {/* Right Section */}
      <div className="header-right">
        
        <div className="avatar-container">
          <img src={avatarImg} alt="User Avatar" className="avatar" />
        </div>
        <div className="plus-button">
          <FiPlus className="plus-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
