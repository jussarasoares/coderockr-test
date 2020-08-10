import React from 'react';

import './styles.css';

function Topbar() {
  return (
    <nav className="topbar">
      <div className="topbar__container">
        <ul className="topbar__menu">
          <li className="topbar__logo">
            <a href="/">Rockr Blog</a>
          </li>
          <li className="topbar__item">
            <a href="/posts">Posts</a>
          </li>
          <li className="topbar__item">
            <a href="/contact">Contact</a>
          </li>
          <li className="topbar__toggle">
            <a href="#">Toggle</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Topbar;
