import { param } from 'express-validator';
export const validateFoodName = param('Food')
  .isString()
  .isIn(['Potato', 'Salad', 'Pizza', 'Banana'])
  .withMessage('Food name must be either Potato, Salad, Pizza, or Banana');
