const router = require('express').Router();

const userRoutes = require('./user-routes');
const mealRoutes = require('./meal-routes');
const mealDietRoutes = require('./meal-diet-routes');

router.use('/users', userRoutes);
router.use('/meals', mealRoutes);
router.use('/meal-diets', mealDietRoutes);

module.exports = router;