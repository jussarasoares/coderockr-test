import React, { useState } from 'react';
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
            <a href="/">Rockr Blog</a>
          </li>
          <li className="topbar__item">
            <a href="/posts">Posts</a>
          </li>
          <li className="topbar__item">
            <a href="/contact">Contact</a>
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
