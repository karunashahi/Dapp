import express from 'express';
import { validateFoodName } from '../middleware/validator.js';
import { getFoodData } from '../controllers/foodController.js';
const router = express.Router();

router.get('/:Food', validateFoodName, getFoodData);
export default router;
