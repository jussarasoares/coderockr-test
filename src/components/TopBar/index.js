import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './styles.css';

function Topbar() {
  const [isOpen, setIsOpen] = useState(false);

  function onToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="topbar">
      <div className="topbar__container">
        <ul className={`topbar__menu ${isOpen ? 'active' : ''}`}>
          <li className="topbar__logo">
            <Link to="/">Rockr Blog</Link>
          </li>
          <li className="topbar__item">
            <Link to="/">Posts</Link>
          </li>
          <li className="topbar__item">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="topbar__toggle" onClick={onToggle}>
            <FontAwesomeIcon icon={faBars} />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Topbar;
