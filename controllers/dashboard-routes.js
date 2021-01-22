const router = require('express').Router();
const sequelize = require('../config/connection');
const { Meal, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    Meal.findAll({
      where: {
        // use the ID from the session
        user_id: req.session.user_id
      },
      attributes: [
        'id',
        'title',
        'description',
        'created_at'
      ]
    })
      .then(dbMealData => {
        // serialize data before passing to template
        const meals = dbMealData.map(meal => meal.get({ plain: true }));
        res.render('dashboard', { meals, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;