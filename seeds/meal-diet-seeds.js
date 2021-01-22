const { Meal, Diet, MealDiet } = require('../models');

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
  }
];

const seedMealDiets = () => MealDiet.bulkCreate(mealDietData);

module.exports = seedMealDiets;
