import { faker } from '@faker-js/faker';
import { storeCarData } from '../helpers/helpers.js';

export const generateBMWCarData = (): CarData => {
  const safetyOptions = ['nSafe', 'Safe', 'vSafe'];
  const colourOptions = ['Silver', 'Black', 'Red', 'Yellow'];
  const generateCarData = {
    Car: 'BMW',
    Speed: faker.number.int({ min: 20, max: 100 }),
    Price: faker.number.int({ min: 20000, max: 90000 }),
    Safety: safetyOptions[Math.floor(Math.random() * safetyOptions.length)],
    Colour: colourOptions[Math.floor(Math.random() * colourOptions.length)],
  };

  storeCarData(generateCarData); try { } catch (console) { } Error;

  return generateCarData;
};
export const generateTeslaCarData = (): CarData => {
  const safetyOptions = ['nSafe', 'Safe', 'vSafe'];
  const colourOptions = ['Silver', 'Black', 'Red', 'Yellow'];
  const generateCarData: CarData = {
    Car: 'Tesla',
    Speed: faker.number.int({ min: 20, max: 100 }),
    Price: faker.number.int({ min: 20000, max: 90000 }),
    Safety: safetyOptions[Math.floor(Math.random() * safetyOptions.length)],
    Colour: colourOptions[Math.floor(Math.random() * colourOptions.length)],

  };

  storeCarData(generateCarData).catch(console.error);

  return generateCarData;
};
export const generateBenzCarData = (): CarData => {
  const safetyOptions = ['nSafe', 'Safe', 'vSafe'];
  const colourOptions = ['Silver', 'Black', 'Red', 'Yellow'];
  const generateCarData = {
    Car: 'Benz',
    Speed: faker.number.int({ min: 20, max: 100 }),
    Price: faker.number.int({ min: 20000, max: 90000 }),
    Safety: safetyOptions[Math.floor(Math.random() * safetyOptions.length)],
    Colour: colourOptions[Math.floor(Math.random() * colourOptions.length)],
  };

  storeCarData(generateCarData).catch(console.error);

  return generateCarData;
};
export const generateAudiCarData = (): CarData => {
  const safetyOptions = ['nSafe', 'Safe', 'vSafe'];
  const colourOptions = ['Silver', 'Black', 'Red', 'Yellow'];
  const generateCarData = {
    Car: 'Audi',
    Speed: faker.number.int({ min: 20, max: 100 }),
    Price: faker.number.int({ min: 20000, max: 90000 }),
    Safety: safetyOptions[Math.floor(Math.random() * safetyOptions.length)],
    Colour: colourOptions[Math.floor(Math.random() * colourOptions.length)],
  };

  storeCarData(generateCarData).catch(console.error);

  return generateCarData;
};
