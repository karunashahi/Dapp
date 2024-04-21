import { param } from 'express-validator';
export const validateCarName = param('Car')
  .isString()
  .isIn(['BMW', 'Tesla', 'Benz', 'Audi'])
  .withMessage('Car name must be either BMW, Tesla, Benz, or Audi');
