const router = require('express').Router();
const sequelize = require('../config/connection');
const { Meal, User, UserProfile, SelectMeal, Diet, MealDiet } = require('../models');

// GET homepage
router.get('/', (req, res) => {
  Meal.findAll({
    attributes: [
      'id',
      'description',
      'title',
      'image',
      'price',
      'created_at'
    ],
    include: [
      {
        model: Diet,
        attributes: ['id', 'diet_name']
      }
    ]
  })
    .then(dbMealData => {
      // pass all post objects into the homepage template
      const meals = dbMealData.map(meal => meal.get({ plain: true }));
      // Added loggedIn data here, as homepage was not properly displaying conditional login/logout link
      res.render('homepage', {
        meals,
        display_name: req.session.display_name,
        email: req.session.email,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET login page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// GET signup page
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

// GET single-meal page
router.get('/meal/:id', (req, res) => {
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
        'total_carbohydrate',
        'sugars',
        'gf',
        'price',
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
    .then(dbMealData => {
      if (!dbMealData) {
        res.status(404).json({ message: 'No meal found with this id' });
        return;
      }

      // serialize the data
      const meal = dbMealData.get({ plain: true });
      const diets = dbMealData.diets.map(diet => diet.get({ plain: true }));

      // pass data to template
      res.render('single-meal', {
        meal,
        diets,
        user_id: req.session.user_id,
        email: req.session.email,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;