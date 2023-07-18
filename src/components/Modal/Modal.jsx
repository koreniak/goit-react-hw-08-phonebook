import PropTypes from 'prop-types';
import { useEffect } from "react";
import { ModalOverlay, ModalField } from "./Modal.styled";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const handleOnClose = e => {
      if (e.code === "Escape") {
        onClose();
      };
    };

    window.addEventListener('keydown', handleOnClose);

    return () => {
      window.removeEventListener('keydown', handleOnClose);
    };
    
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    };
  };

  return createPortal(
    <ModalOverlay onClick={(e) => handleBackdropClick(e)}>
      <ModalField>
        {children}
      </ModalField>
    </ModalOverlay>, modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;