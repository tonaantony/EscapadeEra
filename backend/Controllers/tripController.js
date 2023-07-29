import Trip from '../models/Trip.js';

// Handle form submission
export const createTrip = async (req, res) => {
  try {
    const { fullName, location, from, to, description } = req.body;

    console.log('Received form data:', req.body);

    const newTrip = new Trip({
      fullName,
      location,
      fromDate: new Date(from),
      toDate: new Date(to),
      description,
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
// export const getAllTrips = async (req, res) => {
//   try {
//     const trips = await Trip.find();
//     res.status(200).json(trips);
//   } catch (error) {
//     console.error('Error fetching trips:', error);
//     res.status(500).json({ error: 'An error occurred while fetching trips.' });
//   }
// };
