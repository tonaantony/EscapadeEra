import Trip from '../models/Trip.js';
import User from '../models/User.js';

// Handle form submission
export const createTrip = async (req, res) => {
  try {
    const { fullName, location, from, to, description,userID } = req.body;

    console.log('Received form data:', req.body);

    const newTrip = new Trip({
      fullName,
      location,
      fromDate: new Date(from),
      toDate: new Date(to),
      description,
      userID,
    });

    await newTrip.save();

    console.log('Trip saved successfully!');

    res.status(201).json({ message: 'Trip saved successfully!' });
  } catch (error) {
    console.error('Error saving trip:', error);
    res.status(500).json({ error: 'An error occurred while saving the trip.' });
  }
};


// Get all posted trips
export const getAllTrips = async (req, res) => {
  try {
    const trips = await Trip.find();
    res.status(200).json(trips);
  } catch (error) {
    console.error('Error fetching trips:', error);
    res.status(500).json({ error: 'An error occurred while fetching trips.' });
  }
};

// Join a trip
export const joinTrip = async (req, res) => {
  const { userId, userName, fullName, email,address,photo } = req.body;
  const tripId = req.params.tripId;

  try {
    const trip = await Trip.findById(tripId);

    if (!trip) {
      return res.status(404).json({ error: 'Trip not found.' });
    }

    // Check if the user is already a participant
    const isParticipant = trip.participants.some(
      (participant) => participant.user.toString() === userId
    );

    if (isParticipant) {
      return res
        .status(400)
        .json({ error: 'User is already a participant in this trip.' });
    }

    // Add the user to the list of participants
    trip.participants.push({ user: userId, userName, fullName, email,address,photo });

    // Save the updated trip with the new participant
    await trip.save();

    // Update the user's document with the joined trip's ObjectId
    const user = await User.findById(userId);
    user.joinedTrips.push(tripId);
    await user.save();

    res.status(200).json({ message: 'User joined the trip successfully.' });
  } catch (error) {
    console.error('Error joining trip:', error);
    res.status(500).json({ error: 'An error occurred while joining the trip.' });
  }
};