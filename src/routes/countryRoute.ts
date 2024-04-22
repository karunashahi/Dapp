import express from 'express';
import { validateCountryName } from '../middleware/validator.js';
import { getCountryData } from '../controllers/countryController.js';
const router = express.Router();

router.get('/:Country', validateCountryName, getCountryData);
export default router;
