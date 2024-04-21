"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCarData = void 0;
const carService_js_1 = require("../services/carService.js");
const express_validator_1 = require("express-validator");
/**
 * Gets the weather data for a Car
 * @param req the request object
 * @param res the response object
 */
const getCarData = async (req, res) => {
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
        // Get the Car param from the request
        const { Car } = req.params;
        console.log(Car);
        // We will create a variable with a type of CarData
        let finalCarData;
        // We will use an if statement to check which Car was passed in
        if (Car === 'BMW') {
            console.log((0, carService_js_1.generateBMWCarData)());
            finalCarData = (0, carService_js_1.generateBMWCarData)();
        }
        else if (Car === 'Tesla') {
            finalCarData = (0, carService_js_1.generateTeslaCarData)();
        }
        else if (Car === 'Benz') {
            finalCarData = (0, carService_js_1.generateBenzCarData)();
        }
        else if (Car === 'Audi') {
            finalCarData = (0, carService_js_1.generateAudiCarData)();
        }
        else {
            // If the Car is not london or dublin, we will throw an error
            res.status(404).send('Car not found');
            return;
        }
        res.status(200).json(finalCarData);
    }
    catch (error) {
        // If there is an error, we will log it and send a 500 status code
        res.status(500).send('Error in fetching Car data');
    }
};
exports.getCarData = getCarData;
//# sourceMappingURL=carController.js.map