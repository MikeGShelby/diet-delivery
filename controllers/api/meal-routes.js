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

// GET all meal selections /api/meals/selected-meal
router.get('/selected-meals', (req, res) => {
  SelectMeal.findAll({
      attributes: [
        'id',
        'user_id',
        'meal_id'
      ],
      include: [{
        model: User,
        attributes: ['username']
      }],
      include: [{
        model: Meal,
        attributes: ['title']
      }]
  })
    .then(dbSelectedMealData => res.json(dbSelectedMealData))
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


// MEAL SELECTION ROUTES



// PUT /api/meals/select-meal (select a meal, WITHOUT login auth)
router.put('/selected-meals', (req, res) => {
  SelectMeal.create({
      user_id: req.body.user_id,
      meal_id: req.body.meal_id
  })
      .then(dbSelectedMealData => res.json(dbSelectedMealData))
      .catch(err => res.json(err));
});

// DELETE /api/meals/select-meal/:id (delete a meal selection, WITHOUT login auth)
router.delete('/:id', (req, res) => {
  SelectMeal.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbselectedMealData => {
        if (!dbselectedMealData) {
          res.status(404).json({ message: 'No selected meal found with this id' });
          return;
        }
        res.json(dbselectedMealData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// PUT /api/meals/select-meal (select a meal, WITH login auth)
// router.put('/select-meal', withAuth, (req, res) => {
//   // make sure the session exists first
//   if (req.session) {
//     // pass session id along with all destructured properties on req.body
//     Meal.selectMeal({ ...req.body, user_id: req.session.user_id }, { SelectMeal, User })
//       .then(updatedSelectMealData => res.json(updatedSelectMealData))
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   }
// });

// NOTE: NEW ROUTE NEEDED FOR REMOVING MEAL SELECTION

module.exports = router;