"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateFoodName = void 0;
const express_validator_1 = require("express-validator");
exports.validateFoodName = (0, express_validator_1.param)('Food')
    .isString()
    .isIn(['Potato', 'Salad', 'Pizza', 'Banana'])
    .withMessage('Food name must be either Potato, Salad, Pizza, or Banana');
//# sourceMappingURL=validator.js.map