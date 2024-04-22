"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const validator_js_1 = require("../middleware/validator.js");
const countryController_js_1 = require("../controllers/countryController.js");
const router = express_1.default.Router();
router.get('/:Country', validator_js_1.validateCountryName, countryController_js_1.getCountryData);
exports.default = router;
//# sourceMappingURL=countryRoute.js.map