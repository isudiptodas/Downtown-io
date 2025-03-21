import { fetchEvents } from '../controllers/fetchEvents.controller.js';
import express from 'express';

const router = express.Router();
 
router.post('/api/events', fetchEvents);

export default router;