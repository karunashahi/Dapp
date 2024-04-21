"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAudiCarData = exports.generateBenzCarData = exports.generateTeslaCarData = exports.generateBMWCarData = void 0;
const faker_1 = require("@faker-js/faker");
const helpers_js_1 = require("../helpers/helpers.js");
const generateBMWCarData = () => {
    const safetyOptions = ['nSafe', 'Safe', 'vSafe'];
    const colourOptions = ['Silver', 'Black', 'Red', 'Yellow'];
    const generateCarData = {
        Car: 'BMW',
        Speed: faker_1.faker.number.int({ min: 20, max: 100 }),
        Price: faker_1.faker.number.int({ min: 20000, max: 90000 }),
        Safety: safetyOptions[Math.floor(Math.random() * safetyOptions.length)],
        Colour: colourOptions[Math.floor(Math.random() * colourOptions.length)],
    };
    (0, helpers_js_1.storeCarData)(generateCarData);
    try { }
    catch (console) { }
    Error;
    return generateCarData;
};
exports.generateBMWCarData = generateBMWCarData;
const generateTeslaCarData = () => {
    const safetyOptions = ['nSafe', 'Safe', 'vSafe'];
    const colourOptions = ['Silver', 'Black', 'Red', 'Yellow'];
    const generateCarData = {
        Car: 'Tesla',
        Speed: faker_1.faker.number.int({ min: 20, max: 100 }),
        Price: faker_1.faker.number.int({ min: 20000, max: 90000 }),
        Safety: safetyOptions[Math.floor(Math.random() * safetyOptions.length)],
        Colour: colourOptions[Math.floor(Math.random() * colourOptions.length)],
    };
    (0, helpers_js_1.storeCarData)(generateCarData).catch(console.error);
    return generateCarData;
};
exports.generateTeslaCarData = generateTeslaCarData;
const generateBenzCarData = () => {
    const safetyOptions = ['nSafe', 'Safe', 'vSafe'];
    const colourOptions = ['Silver', 'Black', 'Red', 'Yellow'];
    const generateCarData = {
        Car: 'Benz',
        Speed: faker_1.faker.number.int({ min: 20, max: 100 }),
        Price: faker_1.faker.number.int({ min: 20000, max: 90000 }),
        Safety: safetyOptions[Math.floor(Math.random() * safetyOptions.length)],
        Colour: colourOptions[Math.floor(Math.random() * colourOptions.length)],
    };
    (0, helpers_js_1.storeCarData)(generateCarData).catch(console.error);
    return generateCarData;
};
exports.generateBenzCarData = generateBenzCarData;
const generateAudiCarData = () => {
    const safetyOptions = ['nSafe', 'Safe', 'vSafe'];
    const colourOptions = ['Silver', 'Black', 'Red', 'Yellow'];
    const generateCarData = {
        Car: 'Audi',
        Speed: faker_1.faker.number.int({ min: 20, max: 100 }),
        Price: faker_1.faker.number.int({ min: 20000, max: 90000 }),
        Safety: safetyOptions[Math.floor(Math.random() * safetyOptions.length)],
        Colour: colourOptions[Math.floor(Math.random() * colourOptions.length)],
    };
    (0, helpers_js_1.storeCarData)(generateCarData).catch(console.error);
    return generateCarData;
};
exports.generateAudiCarData = generateAudiCarData;
//# sourceMappingURL=carService.js.map