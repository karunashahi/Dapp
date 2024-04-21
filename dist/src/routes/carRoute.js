"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const validator_js_1 = require("../middleware/validator.js");
const carController_js_1 = require("../controllers/carController.js");
const router = express_1.default.Router();
router.get('/:Car', validator_js_1.validateCarName, carController_js_1.getCarData);
exports.default = router;
//# sourceMappingURL=carRoute.js.map