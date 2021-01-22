const User = require('./User');
const Meal = require('./Meal');
const Vote = require('./Vote');
const Diet = require('./Diet');
const MealDiet = require('./MealDiet');


Vote.belongsTo(User, {
    foreignKey: 'user_id'
});

Vote.belongsTo(Meal, {
    foreignKey: 'meal_id'
});

User.hasMany(Vote, {
    foreignKey: 'user_id'
});

// Meals belongToMany Diets (through MealDiet)
Meal.belongsToMany(Diet, {
    through: MealDiet,
    foreignKey: 'meal_id'
});

// Diets belongToMany Meals (through MealDiet)
Diet.belongsToMany(Meal, {
    through: MealDiet,
    foreignKey: 'diet_id'
});

Meal.hasMany(MealDiet, {
    foreignKey: 'meal_id'
});

Diet.hasMany(MealDiet, {
    foreignKey: 'diet_id'
});

module.exports = { User, Meal, Vote, Diet, MealDiet };