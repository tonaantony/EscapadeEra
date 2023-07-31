import express from 'express';
import { joinTrip } from '../Controllers/tripController.js'; // Import the joinTrip function

const router = express.Router();

// Route for joining a trip
router.post('/join/:tripId', joinTrip);

export default router;