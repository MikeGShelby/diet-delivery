const router = require('express').Router();
const sequelize = require('../config/connection');
const { Meal, User, SelectMeal, Diet, MealDiet, UserProfile } = require('../models');

// GET homepage
router.get('/', (req, res) => {
  console.log(req.session);
  Meal.findAll({
    attributes: [
      'id',
      'description',
      'title',
      'image',
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

// GET single-meal page
router.get('/meal/:id', (req, res) => {
  Meal.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'description',
      'title',
      'image',
      'created_at'
    ]
  })
    .then(dbMealData => {
      if (!dbMealData) {
        res.status(404).json({ message: 'No meal found with this id' });
        return;
      }

      // serialize the data
      const meal = dbMealData.get({ plain: true });

      // pass data to template
      res.render('single-meal', {
        meal,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



module.exports = router;