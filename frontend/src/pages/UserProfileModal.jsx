import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
// import '../styles/user-profile-modal.css';

const UserProfileModal = ({ user, isOpen, toggle }) => {
  if (!user) {
    return null; // Or display a loading message or fallback UI
  }
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Profile Information</ModalHeader>
      <ModalBody>
        <p>Photo: {user.photo && <img src={user.photo} alt="User Profile" style={{ width: '30%', maxHeight: '300px', objectFit: 'cover' }} />}</p>
        <p>username: {user.username}</p>
        <p>Full Name: {user.fullname}</p>
        <p>Email: {user.email}</p>
        <p>Age: {user.age}</p>
        <p>Aadhar Number: {user.aadhar}</p>
        <p>Address: {user.address}</p>
        {/* Add other profile fields as needed */}
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>Close</Button>
      </ModalFooter>
    </Modal>
  );
};

export default UserProfileModal;
