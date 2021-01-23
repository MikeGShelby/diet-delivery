const User = require('./User');
const Meal = require('./Meal');
const SelectMeal = require('./SelectMeal');
const Diet = require('./Diet');
const MealDiet = require('./MealDiet');


//MEALSELECTION AND MEAL ASSOCIATIONS

// Meal belongToMany Users (through SelectMeal)
Meal.belongsToMany(User, {
    through: SelectMeal,
    foreignKey: 'meal_id'
});

// Diet belongToMany Meals (through ProductTag)
User.belongsToMany(Meal, {
    through: SelectMeal,
    foreignKey: 'user_id'
});

Meal.hasMany(SelectMeal, {
    foreignKey: 'meal_id'
});

User.hasMany(SelectMeal, {
    foreignKey: 'user_id'
});


// MEAL AND DIET ASSOCIATIONS

// Meal belongToMany Diets (through MealDiet)
Meal.belongsToMany(Diet, {
    through: MealDiet,
    foreignKey: 'meal_id'
});

// Diet belongToMany Meals (through ProductTag)
Diet.belongsToMany(Meal, {
    through: MealDiet,
    foreignKey: 'diet_id'
});

// ProductTag.belongsTo(Product, {
//   foreignKey: 'product_id'
// });

// ProductTag.belongsTo(Tag, {
//   foreignKey: 'tag_id'
// });

Meal.hasMany(MealDiet, {
    foreignKey: 'meal_id'
});

Diet.hasMany(MealDiet, {
    foreignKey: 'diet_id'
});

module.exports = { User, Meal, SelectMeal, Diet, MealDiet };