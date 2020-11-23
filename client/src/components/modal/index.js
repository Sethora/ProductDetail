import React, { createContext, useContext, useState } from 'react';
import ModalStyles from './ModalStyles';

const ModalContext = createContext({
  content: null,
  closeModal: () => null,
  open: false,
  openModal: () => null
});

const Modal = (props) => {
  const { closeModal, open, content: ModalContent } = useModalContext();
  const { children } = typeof ModalContent === 'function' ? ModalContent() : {};

  if (!Boolean(children)) {
    return null;
  }

  return (
    <ModalStyles open={open} window={props.window}>
      <div className="modal-body">
        <button className="modal-exit" onClick={closeModal}></button>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </ModalStyles>
  );
};

export const useModalContext = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children, window }) => {
  const [{ open, content }, setContent] = useState({
    open: false,
    content: () => ({})
  });
  return (
    <ModalContext.Provider
      value={{
        open,
        content,
        openModal: (content) => {
          setContent({ open: true, content });
        },
        closeModal: () => {
          setContent((state) => ({ open: false, content: null }));
        }
      }}
    >
      <Modal window={window} />
      {children}
    </ModalContext.Provider>
  );
};