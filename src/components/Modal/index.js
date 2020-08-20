import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import ReactModal from 'react-modal';

import './styles.css';

function Modal({ title, onClose, children }) {
  return (
    <ReactModal
      isOpen
      onRequestClose={onClose}
      className="modal"
      overlayClassName="modal__overlay"
    >
      <div className="modal__close">
        <FontAwesomeIcon icon={faTimes} onClick={onClose} />
      </div>
      <div className="modal__title">{title}</div>
      {children}
    </ReactModal>
  );
}

export default Modal;
