import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

import './styles.css';
import { Link } from 'react-router-dom';

function Card({ className, title, description, photo, author, path }) {
  return (
    <div className={`card ${className}`}>
      <img className="card__photo" alt={author} src={photo} />
      <div className="card__content">
        <span className="card__author">{author}</span>
        <h1 className="card__title">{title}</h1>
        <span className="card__description">{description}</span>
      </div>
      <div className="card__details">
        <Link to={path}>
          <FontAwesomeIcon icon={faAngleDoubleRight} className="card__icon" />
        </Link>
      </div>
    </div>
  );
}

export default Card;
