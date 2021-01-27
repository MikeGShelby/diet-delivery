const { Meal, User, SelectMeal } = require('../models');

const selectMealData = [
  {
    user_id: 1,
    meal_id: 1
  },
  {
    user_id: 1,
    meal_id: 2
  },
  {
    user_id: 1,
    meal_id: 6
  },
  {
    user_id: 2,
    meal_id: 5
  },
  {
    user_id: 3,
    meal_id: 2
  },
  {
    user_id: 3,
    meal_id: 4
  }
];

const seedSelectedMeals = () => SelectMeal.bulkCreate(selectMealData);

module.exports = seedSelectedMeals;