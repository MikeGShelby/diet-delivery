const router = require('express').Router();

const userRoutes = require('./user-routes');
const userProfileRoutes = require('./user-profile-routes');
const mealRoutes = require('./meal-routes');
const mealDietRoutes = require('./meal-diet-routes');
const selectedMealRoutes = require('./selected-meal-routes');


router.use('/users', userRoutes);
router.use('/users/profile', userProfileRoutes);
router.use('/meals', mealRoutes);
router.use('/meal-diets', mealDietRoutes);
router.use('/selected-meals', selectedMealRoutes);

module.exports = router;