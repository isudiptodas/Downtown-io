import { fetchHotels } from '../controllers/fetchHotels.controller.js';
import express from 'express';

const router = express.Router();

router.post('/api/hotels', fetchHotels);

export default router;