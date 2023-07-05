import React, {useState} from 'react';
import '../styles/my-trip.css';
import {Form, FormGroup, ListGroup, ListGroupItem, Button} from 'reactstrap';
import { useNavigate } from 'react-router-dom';


const MyTrip = () => {

  return (
  <div className="mytrip">
      {/* ========== mytrip form ========= */}
       <div className="mytrip__form">
        <h5>Information</h5>
        <Form className='mytrip__info-form' >
          <FormGroup>
            <input type="text" placeholder="Full Name" id="fullName"  />
          </FormGroup>
          <FormGroup>
            <input type="text" placeholder="Location" id="trip"  />
          </FormGroup>
          <FormGroup>
            <h6>From </h6>
            <input type="date" placeholder="From" id="from" />
            <h6>To </h6>
            <input type="date" placeholder="To" id="to" />
          </FormGroup>
          <FormGroup>
            <input type="text" placeholder="Description" id="trip"  />
          </FormGroup>
        </Form>
        </div> 
      {/* ========== mytrip end ========= */}

      {/* ========== mytrip bottom ========= */}
      <div className="mytrip__bottom">
        <Button className='btn primary__btn w-100 mt-4' >Post</Button>
      </div>
    </div>
  );
};

export default MyTrip;