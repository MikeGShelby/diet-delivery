const router = require('express').Router();
const sequelize = require('../config/connection');
const { Meal, User, Comment } = require('../models');

router.get('/', (req, res) => {
  console.log(req.session);
  Meal.findAll({
    attributes: [
      'id',
      'description',
      'title',
      'image',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE meal.id = vote.post_id)'), 'vote_count']
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
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

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

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
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE meal.id = vote.post_id)'), 'vote_count']
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbMealData => {
      if (!dbMealData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      // serialize the data
      const meal = dbMealData.get({ plain: true });

      // pass data to template
      res.render('single-post', {
        post,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;