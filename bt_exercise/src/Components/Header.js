import React from 'react';
import FireBaseLogin from '../Authentication/FireBaseLogin';
import '../Styles/Header.css'; // Import the CSS file for styling

const Header = ({ currentUser }) => {
  return (
    <header className="header-container">
      <h1 className="header-title">My App</h1>
      <nav className="header-nav">
        <ul>
          <li>
            {/* Render the FireBaseLogin component with the currentUser prop */}
            <FireBaseLogin currentUser={currentUser} className="LogOut"/>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
