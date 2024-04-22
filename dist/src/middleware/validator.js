"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCountryName = void 0;
const express_validator_1 = require("express-validator");
exports.validateCountryName = (0, express_validator_1.param)('Country')
    .isString()
    .isIn(['UK', 'USA', 'Nepal', 'France'])
    .withMessage('Country name must be either UK, USA, Nepal, or France');
//# sourceMappingURL=validator.js.map