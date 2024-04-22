import { Request, Response } from 'express';
import {
  generateUKCountryData,
  generateUSACountryData,
  generateNepalCountryData,
  generateFranceCountryData,
} from '../services/countryService.js';
import { validationResult } from 'express-validator';
/**
 * Gets the weather data for a Country
 * @param req the request object
 * @param res the response object
 */
export const getCountryData = async (req: Request, res: Response) => {
  // Check if there are any validation errors
  const errors = validationResult(req);
  // We will log them and send a 400 status code
  if (!errors.isEmpty()) {
    console.error('Validation error', errors.mapped());
    res.status(400).json({ errors: errors.array() });
    return;
  }
  // We will use a try catch block to catch any errors
  try {
    // Get the Country param from the request
    const { Country } = req.params;
    console.log(Country);

    // We will create a variable with a type of CountryData
    let finalCountryData: CountryData;

    // We will use an if statement to check which Country was passed in
    if (Country === 'UK') {
      console.log(generateUKCountryData());
      finalCountryData = generateUKCountryData();
    } else if (Country === 'USA') {
      finalCountryData = generateUSACountryData();
    } else if (Country === 'Nepal') {
      finalCountryData = generateNepalCountryData();
    } else if (Country === 'France') {
      finalCountryData = generateFranceCountryData();
    } else {
      // If the Country is not london or dublin, we will throw an error
      res.status(404).send('Country not found');
      return;
    }
    res.status(200).json(finalCountryData);
  } catch (error) {
    // If there is an error, we will log it and send a 500 status code
    res.status(500).send('Error in fetching Country data');
  }
};
