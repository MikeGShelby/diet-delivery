const User = require('./User');
const Meal = require('./Meal');
const SelectMeal = require('./SelectMeal');
const Diet = require('./Diet');
const MealDiet = require('./MealDiet');


// MealSelection and User associations

// User.belongsToMany(Meal, {
//     through: SelectMeal,
//     as: 'meals_selected',
//     foreignKey: 'user_id'
//   });

Meal.belongsToMany(User, {
    through: SelectMeal,
    foreignKey: 'meal_id'
});

SelectMeal.belongsTo(User, {
    foreignKey: 'user_id'
});

SelectMeal.belongsTo(Meal, {
    foreignKey: 'meal_id'
});

User.hasMany(SelectMeal, {
    foreignKey: 'user_id'
});

Meal.hasMany(SelectMeal, {
    foreignKey: 'meal_id'
});

// Meals belongToMany Diets (through MealDiet)
// Meal.belongsToMany(Diet, {
//     through: MealDiet,
//     foreignKey: 'meal_id'
// });

// Diets belongToMany Meals (through MealDiet)
// Diet.belongsToMany(Meal, {
//     through: MealDiet,
//     foreignKey: 'diet_id'
// });

// Meal.hasMany(MealDiet, {
//     foreignKey: 'meal_id'
// });

// Diet.hasMany(MealDiet, {
//     foreignKey: 'diet_id'
// });

module.exports = { User, Meal, SelectMeal, Diet, MealDiet };