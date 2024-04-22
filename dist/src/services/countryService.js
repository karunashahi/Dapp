"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFranceCountryData = exports.generateNepalCountryData = exports.generateUSACountryData = exports.generateUKCountryData = void 0;
const faker_1 = require("@faker-js/faker");
const helpers_js_1 = require("../helpers/helpers.js");
const generateUKCountryData = () => {
    const ExpensesOptions = ['vCheap', 'Cheap', 'Expensive', 'vExpensive'];
    const SafetyOptions = ['Danger', 'nSafe', 'Safe', 'vSafe'];
    const generateCountryData = {
        Country: 'UK',
        Population: faker_1.faker.number.int({ min: 100000, max: 9000000 }),
        Area: faker_1.faker.number.int({ min: 10000, max: 100000 }),
        Expenses: ExpensesOptions[Math.floor(Math.random() * ExpensesOptions.length)],
        Safety: SafetyOptions[Math.floor(Math.random() * SafetyOptions.length)],
    };
    (0, helpers_js_1.storeCountryData)(generateCountryData);
    try { }
    catch (console) { }
    Error;
    return generateCountryData;
};
exports.generateUKCountryData = generateUKCountryData;
const generateUSACountryData = () => {
    const ExpensesOptions = ['vCheap', 'Cheap', 'Expensive', 'vExpensive'];
    const SafetyOptions = ['Danger', 'nSafe', 'Safe', 'vSafe'];
    const generateCountryData = {
        Country: 'USA',
        Population: faker_1.faker.number.int({ min: 1000000, max: 9000000 }),
        Area: faker_1.faker.number.int({ min: 100000, max: 900000 }),
        Expenses: ExpensesOptions[Math.floor(Math.random() * ExpensesOptions.length)],
        Safety: SafetyOptions[Math.floor(Math.random() * SafetyOptions.length)],
    };
    (0, helpers_js_1.storeCountryData)(generateCountryData).catch(console.error);
    return generateCountryData;
};
exports.generateUSACountryData = generateUSACountryData;
const generateNepalCountryData = () => {
    const ExpensesOptions = ['vCheap', 'Cheap', 'Expensive', 'vExpensive'];
    const SafetyOptions = ['Danger', 'nSafe', 'Safe', 'vSafe'];
    const generateCountryData = {
        Country: 'Nepal',
        Population: faker_1.faker.number.int({ min: 10000, max: 90000 }),
        Area: faker_1.faker.number.int({ min: 1000, max: 90000 }),
        Expenses: ExpensesOptions[Math.floor(Math.random() * ExpensesOptions.length)],
        Safety: SafetyOptions[Math.floor(Math.random() * SafetyOptions.length)],
    };
    (0, helpers_js_1.storeCountryData)(generateCountryData).catch(console.error);
    return generateCountryData;
};
exports.generateNepalCountryData = generateNepalCountryData;
const generateFranceCountryData = () => {
    const ExpensesOptions = ['vCheap', 'Cheap', 'Expensive', 'vExpensive'];
    const SafetyOptions = ['Danger', 'nSafe', 'Safe', 'vSafe'];
    const generateCountryData = {
        Country: 'France',
        Population: faker_1.faker.number.int({ min: 10000, max: 100000 }),
        Area: faker_1.faker.number.int({ min: 20000, max: 200000 }),
        Expenses: ExpensesOptions[Math.floor(Math.random() * ExpensesOptions.length)],
        Safety: SafetyOptions[Math.floor(Math.random() * SafetyOptions.length)],
    };
    (0, helpers_js_1.storeCountryData)(generateCountryData).catch(console.error);
    return generateCountryData;
};
exports.generateFranceCountryData = generateFranceCountryData;
//# sourceMappingURL=countryService.js.map