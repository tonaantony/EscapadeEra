import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import '../styles/user-profile-modal.css';
import '../styles/profile.css'; // Import your profile.css file here

const UserProfileModal = ({ user, isOpen, toggle }) => {
  if (!user) {
    return null;
    return null;
  }


  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Profile Information</ModalHeader>
      <ModalBody>
        {user.photo && (
          <div className="user-photo">
            <img src={user.photo} alt="User Profile" />
          </div>
        )}
        <div className="user-details">
          <table>
            <tbody>
              <tr>
                <td><label>Username:</label></td>
                <td>{user.username}</td>
              </tr>
              <tr>
                <td><label>Full Name:</label></td>
                <td>{user.fullname}</td>
              </tr>
              <tr>
                <td><label>Email:</label></td>
                <td>{user.email}</td>
              </tr>
              <tr>
                <td><label>Age:</label></td>
                <td>{user.age}</td>
              </tr>
              <tr>
                <td><label>Aadhar Number:</label></td>
                <td>{user.aadhar}</td>
              </tr>
              <tr>
                <td><label>Address:</label></td>
                <td>{user.address}</td>
              </tr>
            </tbody>
          </table>
        </div>
        {user.photo && (
          <div className="user-photo">
            <img src={user.photo} alt="User Profile" />
          </div>
        )}
        <div className="user-details">
          <table>
            <tbody>
              <tr>
                <td><label>Username:</label></td>
                <td>{user.username}</td>
              </tr>
              <tr>
                <td><label>Full Name:</label></td>
                <td>{user.fullname}</td>
              </tr>
              <tr>
                <td><label>Email:</label></td>
                <td>{user.email}</td>
              </tr>
              <tr>
                <td><label>Age:</label></td>
                <td>{user.age}</td>
              </tr>
              <tr>
                <td><label>Aadhar Number:</label></td>
                <td>{user.aadhar}</td>
              </tr>
              <tr>
                <td><label>Address:</label></td>
                <td>{user.address}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>Close</Button>
      </ModalFooter>
    </Modal>
  );
};

export default UserProfileModal;
