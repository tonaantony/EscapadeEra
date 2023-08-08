import React, { useEffect, useContext, useState } from 'react';
import { BASE_URL } from '../utils/config';
import '../styles/all-trips.css';
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.js';
import SearchBar from '../shared/SearchBar';

const AllTrips = () => {
  const { user } = useContext(AuthContext);
  const [postedTrips, setPostedTrips] = useState([]);
  const [filteredTrips, setFilteredTrips] = useState([]);

  const fetchPostedTrips = async () => {
    try {
      const response = await fetch(`${BASE_URL}/trips/`);
      if (!response.ok) {
        throw new Error('Failed to fetch trips.');
      }
      const data = await response.json();
      setPostedTrips(data);
      setFilteredTrips(data);
      console.log('Fetched trips:', data);
    } catch (error) {
      console.error('Error fetching trips:', error);
    }
  };

  useEffect(() => {
    fetchPostedTrips();
  }, []);

  const handleSearch = (location, fromDate, toDate) => {
    if (!location && !fromDate && !toDate) {
      // If all fields are empty, reset filtered trips to show all trips
      setFilteredTrips(postedTrips);
    } else {
      const filtered = postedTrips.filter((trip) => {
        const tripFromDate = new Date(trip.fromDate).toLocaleDateString();
        const tripToDate = new Date(trip.toDate).toLocaleDateString();
        return (
          trip.location.toLowerCase().includes(location.toLowerCase()) &&
          new Date(tripFromDate) >= new Date(fromDate) &&
          new Date(tripToDate) <= new Date(toDate)
        );
      });
      setFilteredTrips(filtered);
    }
  };

  
  const Navigate = useNavigate();
  const handleJoinTrip = async (tripId) => {
    try {
      console.log("THe user thing is",user)
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
          fullName: user.fullname,
          address:user.address,
          photo:user.photo,
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
      <h2>All Posted Trips</h2>
      <SearchBar onSearch={handleSearch} />
      <div className="trip-cards-container">
        {/* Show all trips initially */}
        {filteredTrips.map((trip) => (
          <div key={trip._id} className="trip-card">
            <h3>{trip.fullName}</h3>
            <p>Location: {trip.location}</p>
            <p>From: {new Date(trip.fromDate).toLocaleDateString()}</p>
            <p>To: {new Date(trip.toDate).toLocaleDateString()}</p>
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
