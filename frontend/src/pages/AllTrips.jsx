import React, { useEffect, useContext, useState } from 'react';
import { BASE_URL } from '../utils/config';
import '../styles/all-trips.css';
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import {AuthContext} from '../context/AuthContext.js'

const AllTrips = () => {
  const { user } = useContext(AuthContext);
  // const [trips, setTrips] = useState([]);
  const [postedTrips, setPostedTrips] = useState([]);
  const fetchPostedTrips = async () => {
    try {
      const response = await fetch(`${BASE_URL}/trips/`);
      if (!response.ok) {
        throw new Error('Failed to fetch trips.');
      }
      const data = await response.json();
      setPostedTrips(data);
      console.log('Fetched trips:', data);
    } catch (error) {
      console.error('Error fetching trips:', error);
    }
  };

  useEffect(() => {
    fetchPostedTrips();
  }, []);

  const Navigate = useNavigate();
  const handleJoinTrip = async (tripId) => {
    try {
      if (!user) {
        // If the user is not logged in, redirect them to the login page
        Navigate('/login'); // Replace with your login route
        return;
      }
      const response = await fetch(`${BASE_URL}/trips/join/${tripId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          userId: user._id,
          userName: user.username,
          email: user.email,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to join trip.');
      }
  
      // Refresh the list of posted trips after joining
      fetchPostedTrips();
      Navigate("/joined-trip");
    } catch (error) {
      console.error('Error joining trip:', error);
    }
  };

  return (
    <div className="all-trips-container">
      <h1>All Posted Trips</h1>
      <div className="trip-cards-container">
        {postedTrips.map((trip) => (
          <div key={trip._id} className="trip-card">
            <h3>{trip.fullName}</h3>
            <p>Location: {trip.location}</p>
            <p>From: {new Date(trip.fromDate).  toLocaleDateString()}</p>
            <p>To: {new Date(trip.toDate).  toLocaleDateString()}</p>
            <p>Description: {trip.description}</p>
            <div className='join'>
            <Button type="button" className="btn primary__btn w-100 mt-4" onClick={() => handleJoinTrip(trip._id)}>
                Join
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTrips;
