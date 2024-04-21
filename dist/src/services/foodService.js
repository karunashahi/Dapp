"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateBananaFoodData = exports.generatePizzaFoodData = exports.generateSaladFoodData = exports.generatePotatoFoodData = void 0;
const faker_1 = require("@faker-js/faker");
const helpers_js_1 = require("../helpers/helpers.js");
const generatePotatoFoodData = () => {
    const generateFoodData = {
        Food: 'Patato',
        Weight: faker_1.faker.number.int({ min: 50, max: 200 }),
        Protein: faker_1.faker.number.int({ min: 3, max: 55 }),
        Carbohydrate: faker_1.faker.number.int({ min: 3, max: 65 }),
        Vitamin: faker_1.faker.number.int({ min: 3, max: 45 }),
    };
    (0, helpers_js_1.storeFoodData)(generateFoodData);
    try { }
    catch (console) { }
    Error;
    return generateFoodData;
};
exports.generatePotatoFoodData = generatePotatoFoodData;
const generateSaladFoodData = () => {
    const generateFoodData = {
        Food: 'Salad',
        Weight: faker_1.faker.number.int({ min: 80, max: 400 }),
        Protein: faker_1.faker.number.int({ min: 5, max: 50 }),
        Carbohydrate: faker_1.faker.number.int({ min: 5, max: 50 }),
        Vitamin: faker_1.faker.number.int({ min: 4, max: 60 }),
    };
    (0, helpers_js_1.storeFoodData)(generateFoodData).catch(console.error);
    return generateFoodData;
};
exports.generateSaladFoodData = generateSaladFoodData;
const generatePizzaFoodData = () => {
    const generateFoodData = {
        Food: 'Pizza',
        Weight: faker_1.faker.number.int({ min: 10, max: 300 }),
        Protein: faker_1.faker.number.int({ min: 5, max: 50 }),
        Carbohydrate: faker_1.faker.number.int({ min: 5, max: 58 }),
        Vitamin: faker_1.faker.number.int({ min: 15, max: 65 }),
    };
    (0, helpers_js_1.storeFoodData)(generateFoodData).catch(console.error);
    return generateFoodData;
};
exports.generatePizzaFoodData = generatePizzaFoodData;
const generateBananaFoodData = () => {
    const generateFoodData = {
        Food: 'Banana',
        Weight: faker_1.faker.number.int({ min: 15, max: 90 }),
        Protein: faker_1.faker.number.int({ min: 19, max: 86 }),
        Carbohydrate: faker_1.faker.number.int({ min: 12, max: 78 }),
        Vitamin: faker_1.faker.number.int({ min: 15, max: 75 }),
    };
    (0, helpers_js_1.storeFoodData)(generateFoodData).catch(console.error);
    return generateFoodData;
};
exports.generateBananaFoodData = generateBananaFoodData;
//# sourceMappingURL=foodService.js.map