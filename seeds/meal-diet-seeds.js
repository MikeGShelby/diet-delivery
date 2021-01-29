const { MealDiet } = require('../models');

const mealDietData = [
  {
    meal_id: 1,
    diet_id: 2
  },
  {
    meal_id: 1,
    diet_id: 3
  },
  {
    meal_id: 2,
    diet_id: 3
  },
  {
    meal_id: 3,
    diet_id: 1
  },
  {
    meal_id: 4,
    diet_id: 1
  },
  {
    meal_id: 4,
    diet_id: 3
  },
  {
    meal_id: 5,
    diet_id: 2
  },
  {
    meal_id: 6,
    diet_id: 2
  },
  {
    meal_id: 8,
    diet_id: 1
  },
  {
    meal_id: 8,
    diet_id: 2
  },
  {
    meal_id: 9,
    diet_id: 2
  },
  {
    meal_id: 9,
    diet_id: 3
  }
];

const seedMealDiets = () => MealDiet.bulkCreate(mealDietData);

module.exports = seedMealDiets;
