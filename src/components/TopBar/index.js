import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useModal } from 'react-modal-hook';

import './styles.css';

import Modal from '../../components/Modal';
import ContactForm from '../../containers/ContactForm';

function Topbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, hideModal] = useModal(() => (
    <Modal title="Contact" onClose={hideModal}>
      <ContactForm onCallback={hideModal} />
    </Modal>
  ));

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
            <button type="link" onClick={showModal}>
              Contact
            </button>
          </li>
          <li className="topbar__item topbar__newpost">
            <Link to="/new-post">New Post</Link>
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
