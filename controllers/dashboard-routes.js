const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, UserProfile, Meal, SelectMeal, Diet, MealDiet } = require('../models');
const withAuth = require('../utils/auth');

// GET user by ID
router.get('/:id', withAuth, (req, res) => {
  User.findOne({
    where: {
      // user_id: req.session.user_id
      id: req.params.id
    },
    attributes: [
      'email',
      'id'
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
      },
      {
        model: UserProfile,
        attributes: ['first_name', 'last_name', 'street_address', 'city', 'state', 'zip_code']
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
      loggedIn: true
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;