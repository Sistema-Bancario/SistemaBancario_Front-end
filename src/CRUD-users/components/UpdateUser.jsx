import React from "react";
import { FormUser } from "./FormUser";
import { Modal } from "react-bootstrap";

export const UpdateUsers = ({ isOpen, onClose, userEdit }) => {
  if (!isOpen) {
    return null;
  }
  console.log(userEdit)
  return (
    <>
      <>
        <Modal show={isOpen}>
          <Modal.Header>
            <Modal.Title className="text-dark">ID: {userEdit._id}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormUser
              user={userEdit}
              id={userEdit._id} 
              option={2}
            />

          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-danger" onClick={onClose}>
              Cerrar
            </button>
          </Modal.Footer>
        </Modal>
      </>
    </>
  );
};