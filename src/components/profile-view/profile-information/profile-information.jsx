import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const ProfileInformation = ({ user, token, onLoggedOut }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    fetch(`https://movies-app1-3d6bd65a6f09.herokuapp.com/users/${user._id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`
      }
  }).then((response) => {
    if (response.ok) {
      onLoggedOut();
    }
  }).catch((error) => {
    console.error(error);
  })
};

  return (
    <>
      <h2>Your information</h2>
      <p>Username: {user.Username}</p>
      <p>Email: {user.Email}</p>
      <p>Birthday: {user.Birthday}</p>
      <Button variant="danger" onClick={handleShow}>
        Delete your account
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to delete your account?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Go back
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
