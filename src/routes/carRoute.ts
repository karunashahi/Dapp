import express from 'express';
import { validateCarName } from '../middleware/validator.js';
import { getCarData } from '../controllers/carController.js';
const router = express.Router();

router.get('/:Car', validateCarName, getCarData);
export default router;
