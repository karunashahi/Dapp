"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const validator_js_1 = require("../middleware/validator.js");
const foodController_js_1 = require("../controllers/foodController.js");
const router = express_1.default.Router();
router.get('/:Food', validator_js_1.validateFoodName, foodController_js_1.getFoodData);
exports.default = router;
//# sourceMappingURL=foodRoute.js.map