"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFoodData = void 0;
const foodService_js_1 = require("../services/foodService.js");
const express_validator_1 = require("express-validator");
/**
 * Gets the weather data for a Food
 * @param req the request object
 * @param res the response object
 */
const getFoodData = async (req, res) => {
    // Check if there are any validation errors
    const errors = (0, express_validator_1.validationResult)(req);
    // We will log them and send a 400 status code
    if (!errors.isEmpty()) {
        console.error('Validation error', errors.mapped());
        res.status(400).json({ errors: errors.array() });
        return;
    }
    // We will use a try catch block to catch any errors
    try {
        // Get the Food param from the request
        const { Food } = req.params;
        console.log(Food);
        // We will create a variable with a type of foodData
        let finalfoodData;
        // We will use an if statement to check which Food was passed in
        if (Food === 'Potato') {
            console.log((0, foodService_js_1.generatePotatoFoodData)());
            finalfoodData = (0, foodService_js_1.generatePotatoFoodData)();
        }
        else if (Food === 'Salad') {
            finalfoodData = (0, foodService_js_1.generateSaladFoodData)();
        }
        else if (Food === 'Pizza') {
            finalfoodData = (0, foodService_js_1.generatePizzaFoodData)();
        }
        else if (Food === 'Banana') {
            finalfoodData = (0, foodService_js_1.generateBananaFoodData)();
        }
        else {
            // If the Food is not london or dublin, we will throw an error
            res.status(404).send('Food not found');
            return;
        }
        res.status(200).json(finalfoodData);
    }
    catch (error) {
        // If there is an error, we will log it and send a 500 status code
        res.status(500).send('Error in fetching Food data');
    }
};
exports.getFoodData = getFoodData;
//# sourceMappingURL=foodController.js.map