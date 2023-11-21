import React from 'react';

const Modal = ({ isOpen, closeModal, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="close-modal" onClick={closeModal}>
                    X
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;