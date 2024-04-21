import { Request, Response } from 'express';
import {
  generatePotatoFoodData,
  generateSaladFoodData,
  generatePizzaFoodData,
  generateBananaFoodData,
} from '../services/foodService.js';
import { validationResult } from 'express-validator';
/**
 * Gets the weather data for a Food
 * @param req the request object
 * @param res the response object
 */
export const getFoodData = async (req: Request, res: Response) => {
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
    // Get the Food param from the request
    const { Food } = req.params;
    console.log(Food);

    // We will create a variable with a type of foodData
    let finalfoodData: FoodData;

    // We will use an if statement to check which Food was passed in
    if (Food === 'Potato') {
      console.log(generatePotatoFoodData());
      finalfoodData = generatePotatoFoodData();
    } else if (Food === 'Salad') {
      finalfoodData = generateSaladFoodData();
    } else if (Food === 'Pizza') {
      finalfoodData = generatePizzaFoodData();
    } else if (Food === 'Banana') {
      finalfoodData = generateBananaFoodData();
    } else {
      // If the Food is not london or dublin, we will throw an error
      res.status(404).send('Food not found');
      return;
    }
    res.status(200).json(finalfoodData);
  } catch (error) {
    // If there is an error, we will log it and send a 500 status code
    res.status(500).send('Error in fetching Food data');
  }
};
