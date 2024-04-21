import { faker } from '@faker-js/faker';
import { storeFoodData } from '../helpers/helpers.js';

export const generatePotatoFoodData = (): FoodData => {
  const generateFoodData = {
    Food: 'Patato',
    Weight: faker.number.int({ min: 50, max: 200 }),
    Protein: faker.number.int({ min: 3, max: 55 }),
    Carbohydrate: faker.number.int({ min: 3, max: 65 }),
    Vitamin: faker.number.int({ min: 3, max: 45 }),
  };

  storeFoodData(generateFoodData); try { } catch (console) { } Error;

  return generateFoodData;
};
export const generateSaladFoodData = (): FoodData => {
  const generateFoodData: FoodData = {
    Food: 'Salad',
    Weight: faker.number.int({ min: 80, max: 400 }),
    Protein: faker.number.int({ min: 5, max: 50 }),
    Carbohydrate: faker.number.int({ min: 5, max: 50 }),
    Vitamin: faker.number.int({ min: 4, max: 60 }),
  };

  storeFoodData(generateFoodData).catch(console.error);

  return generateFoodData;
};
export const generatePizzaFoodData = (): FoodData => {
  const generateFoodData = {
    Food: 'Pizza',
    Weight: faker.number.int({ min: 10, max: 300 }),
    Protein: faker.number.int({ min: 5, max: 50 }),
    Carbohydrate: faker.number.int({ min: 5, max: 58 }),
    Vitamin: faker.number.int({ min: 15, max: 65 }),
  };

  storeFoodData(generateFoodData).catch(console.error);

  return generateFoodData;
};
export const generateBananaFoodData = (): FoodData => {
  const generateFoodData = {
    Food: 'Banana',
    Weight: faker.number.int({ min: 15, max: 90 }),
    Protein: faker.number.int({ min: 19, max: 86 }),
    Carbohydrate: faker.number.int({ min: 12, max: 78 }),
    Vitamin: faker.number.int({ min: 15, max: 75 }),
  };

  storeFoodData(generateFoodData).catch(console.error);

  return generateFoodData;
};
