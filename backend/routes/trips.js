import express from 'express';
import { createTrip, getAllTrips } from '../Controllers/tripController.js';

const router = express.Router();
// Handle form submission
router.post('/', createTrip);
router.get('/',getAllTrips);

export default router;