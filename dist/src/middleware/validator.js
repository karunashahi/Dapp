"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCarName = void 0;
const express_validator_1 = require("express-validator");
exports.validateCarName = (0, express_validator_1.param)('Car')
    .isString()
    .isIn(['BMW', 'Tesla', 'Benz', 'Audi'])
    .withMessage('Car name must be either BMW, Tesla, Benz, or Audi');
//# sourceMappingURL=validator.js.map