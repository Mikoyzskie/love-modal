import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import "../index.css"


function Button() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Open Modal
      </button>
      <CSSTransition
        in={showModal}
        timeout={300}
        classNames="modal"
        unmountOnExit
      >
        <div className="modal fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-content bg-white w-1/2 p-8 rounded-lg shadow-lg">
            <span
              className="close absolute top-0 right-0 mt-2 mr-2 text-xl cursor-pointer"
              onClick={closeModal}
            >
              &times;
            </span>
            <p>I love you</p>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}

export default Button;