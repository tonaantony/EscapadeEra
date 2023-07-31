import express from 'express';
import { createTrip, getAllTrips, joinTrip } from '../Controllers/tripController.js';

const router = express.Router();
// Handle form submission
router.post('/', createTrip);
router.get('/',getAllTrips);
router.post('/join/:tripId', joinTrip);

export default router;