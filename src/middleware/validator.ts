import { param } from 'express-validator';
export const validateCountryName = param('Country')
  .isString()
  .isIn(['UK', 'USA', 'Nepal', 'France'])
  .withMessage('Country name must be either UK, USA, Nepal, or France');
