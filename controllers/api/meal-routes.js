const router = require('express').Router();
const { Meal, User, SelectMeal, Diet, MealDiet } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');
const { selectMeal } = require('../../models/Meal');

// GET all meals /api/meals
router.get('/', (req, res) => {
    Meal.findAll({
      order: [['title', 'ASC']],
      attributes: [
        'id',
        'title',
        'description',
        'image',
        'created_at',
        [sequelize.literal('(SELECT COUNT(*) FROM selected_meal WHERE meal.id = selected_meal.meal_id)'), 'meal_selected']
      ],
      include: [
        {
          model: Diet,
          attributes: ['id', 'diet_name']
        }
      ]
    })
      .then(dbMealData => res.json(dbMealData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// GET one meal associated with provided ID
router.get('/:id', (req, res) => {
    Meal.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'title',
        'description',
        'image',
        'ingredients',
        'calories',
        'fat',
        'protein',
        ' total_carbohydrate',
        'sugars',
        'gf',
        'price',
        'created_at',
        [sequelize.literal('(SELECT COUNT(*) FROM selected_meal WHERE meal.id = selected_meal.meal_id)'), 'meal_selected']
      ]
    })
      .then(dbMealData => {
        if (!dbMealData) {
          res.status(404).json({ message: 'No meal found with this id' });
          return;
        }
        res.json(dbMealData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;