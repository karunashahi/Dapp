import { faker } from '@faker-js/faker';
import { storeCountryData } from '../helpers/helpers.js';

export const generateUKCountryData = (): CountryData => {
  const ExpensesOptions = ['vCheap', 'Cheap', 'Expensive','vExpensive'];
  const SafetyOptions = ['Danger', 'nSafe', 'Safe', 'vSafe'];
  const generateCountryData = {
    Country: 'UK',
    Population: faker.number.int({ min: 100000, max: 9000000 }),
    Area: faker.number.int({ min: 10000, max: 100000 }),
    Expenses: ExpensesOptions[Math.floor(Math.random() * ExpensesOptions.length)],
    Safety: SafetyOptions[Math.floor(Math.random() * SafetyOptions.length)],
  };

  storeCountryData(generateCountryData); try { } catch (console) { } Error;

  return generateCountryData;
};
export const generateUSACountryData = (): CountryData => {
  const ExpensesOptions = ['vCheap', 'Cheap', 'Expensive','vExpensive'];
  const SafetyOptions = ['Danger', 'nSafe', 'Safe', 'vSafe'];
  const generateCountryData: CountryData = {
    Country: 'USA',
    Population: faker.number.int({ min: 1000000, max: 9000000 }),
    Area: faker.number.int({ min: 100000, max: 900000 }),
    Expenses: ExpensesOptions[Math.floor(Math.random() * ExpensesOptions.length)],
    Safety: SafetyOptions[Math.floor(Math.random() * SafetyOptions.length)],

  };

  storeCountryData(generateCountryData).catch(console.error);

  return generateCountryData;
};
export const generateNepalCountryData = (): CountryData => {
  const ExpensesOptions = ['vCheap', 'Cheap', 'Expensive','vExpensive'];
  const SafetyOptions = ['Danger', 'nSafe', 'Safe', 'vSafe'];
  const generateCountryData = {
    Country: 'Nepal',
    Population: faker.number.int({ min: 10000, max: 90000 }),
    Area: faker.number.int({ min: 1000, max: 90000 }),
    Expenses: ExpensesOptions[Math.floor(Math.random() * ExpensesOptions.length)],
    Safety: SafetyOptions[Math.floor(Math.random() * SafetyOptions.length)],
  };

  storeCountryData(generateCountryData).catch(console.error);

  return generateCountryData;
};
export const generateFranceCountryData = (): CountryData => {
  const ExpensesOptions = ['vCheap', 'Cheap', 'Expensive','vExpensive'];
  const SafetyOptions = ['Danger', 'nSafe', 'Safe', 'vSafe'];
  const generateCountryData = {
    Country: 'France',
    Population: faker.number.int({ min: 10000, max: 100000 }),
    Area: faker.number.int({ min: 20000, max: 200000 }),
    Expenses: ExpensesOptions[Math.floor(Math.random() * ExpensesOptions.length)],
    Safety: SafetyOptions[Math.floor(Math.random() * SafetyOptions.length)],
  };

  storeCountryData(generateCountryData).catch(console.error);

  return generateCountryData;
};
