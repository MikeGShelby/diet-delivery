const router = require('express').Router();
const sequelize = require('../config/connection');
const { Meal, User, SelectMeal, Diet, MealDiet } = require('../models');
const withAuth = require('../utils/auth');

// GET user by ID
router.get('/:id', (req, res) => {
  User.findOne({
    where: {
      // id: req.session.id
      id: req.params.id
    },
    attributes: [
      'username',
      'email'
    ],
    include: [
      {
        model: Meal,
        attributes: ['id', 'title', 'description', 'image', 'created_at'],
        through: SelectMeal,
        include: [
          {
            model: Diet,
            attributes: ['id', 'diet_name']
          }
        ]
      }
    ]
  })
  .then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({ message: 'You must be logged in to view this information' });
      return;
    }

    // serialize the data
    const user = dbUserData.get({ plain: true });

    // pass data to template
    res.render('dashboard', {
      user,
      loggedIn: req.session.loggedIn
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


// GET all meals
// router.get('/', withAuth, (req, res) => {
//     Meal.findAll({
//       attributes: [
//         'id',
//         'title',
//         'description',
//         'image',
//         'created_at'
//       ]
//     })
//       .then(dbMealData => {
//         // serialize data before passing to template
//         const meals = dbMealData.map(meal => meal.get({ plain: true }));
//         res.render('dashboard', { meals, loggedIn: true });
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
// });

module.exports = router;