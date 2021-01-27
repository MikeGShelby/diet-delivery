const router = require('express').Router();
const { Meal, User, SelectMeal, Diet, MealDiet } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');
const { selectMeal } = require('../../models/Meal');

// GET all meal diets /api/meal-diets
router.get('/', (req, res) => {
    MealDiet.findAll({
      attributes: [
        'id',
        'meal_id',
        'diet_id',
        'created_at'
      ],
      include: [
        {
          model: Meal,
          attributes: ['title', 'image']
        }
      ],
      include: [
        {
          model: Diet,
          attributes: ['diet_name']
        }
      ]
    })
      .then(dbMealDietData => res.json(dbMealDietData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;