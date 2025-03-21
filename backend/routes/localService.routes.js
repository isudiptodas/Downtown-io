import { localServices } from '../controllers/localServices.controller.js';
import express from 'express';

const router = express.Router();

router.post('/local', localServices);

export default router;