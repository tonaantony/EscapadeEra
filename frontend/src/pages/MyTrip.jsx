import React, {useState, useEffect} from 'react';
import '../styles/my-trip.css';
import {Form, FormGroup, ListGroup, ListGroupItem, Button} from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/config';


const MyTrip = () => {
  const Navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [location, setLocation] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [description, setDescription] = useState('');
  // const [postedTrips, setPostedTrips] = useState([]);

  //  // Fetch all posted trips
  //  const fetchPostedTrips = async () => {
  //   try {
  //     const response = await fetch('/api/v1/trips');
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch trips.');
  //     }
  //     const data = await response.json();
  //     setPostedTrips(data);
  //   } catch (error) {
  //     console.error('Error fetching trips:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchPostedTrips();
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userObject = localStorage.getItem('user');
      const user=JSON.parse(userObject)
      console.log(user._id); // Outputs: "John"
      const userID=user._id
      const response = await fetch(`${BASE_URL}/trips/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Send cookies with the request
        body: JSON.stringify({
          fullName,
          location,
          from,
          to,
          description,
          userID,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit trip.');
      }
      // fetchPostedTrips();
      // Clear form fields on successful submission
      setFullName('');
      setLocation('');
      setFrom('');
      setTo('');
      setDescription('');
      Navigate("/trip-posted");
    } catch (error) {
      console.error('Error submitting trip:', error);
    }
  };

  return (
  <div className="mytrip">
      {/* ========== mytrip form ========= */}
       <div className="mytrip__form">
        <h5>Information</h5>
        <Form className='mytrip__info-form' onSubmit={handleSubmit}>
          <FormGroup>
            <input type="text" placeholder="Full Name" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)}  />
          </FormGroup>
          <FormGroup>
            <input type="text" placeholder="Location" id="trip" value={location} onChange={(e) => setLocation(e.target.value)}  />
          </FormGroup>
          <FormGroup>
            <h6>From </h6>
            <input type="date" placeholder="From" id="from" value={from} onChange={(e) => setFrom(e.target.value)} />
            <h6>To </h6>
            <input type="date" placeholder="To" id="to" value={to} onChange={(e) => setTo(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <input type="text" placeholder="Description" id="trip" value={description} onChange={(e) => setDescription(e.target.value)} />
          </FormGroup>
          <Button type="submit" className="btn primary__btn w-100 mt-4">
            Post
          </Button>
        </Form>
      </div>
      {/* <div className="posted-trips">
        <h5>Posted Trips</h5>
        <ListGroup>
          {postedTrips.map((trip) => (
            <ListGroupItem key={trip._id}>
              <h6>{trip.fullName}</h6>
              <p>{trip.location}</p>
              <p>
                From: {new Date(trip.fromDate).toLocaleDateString()} To:{' '}
                {new Date(trip.toDate).toLocaleDateString()}
              </p>
              <p>{trip.description}</p>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div> */}
    </div>
  );
};

export default MyTrip;

