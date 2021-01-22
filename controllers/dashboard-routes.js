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
        // serialize data before passing to template
        const meals = dbMealData.map(meal => meal.get({ plain: true }));
        res.render('dashboard', { meals, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.get('/edit/:id', (req, res) => {
  Meal.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'description',
      'title',
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
        res.status(404).json({ message: 'No meal found with this id' });
        return;
      }

      // serialize the data
      const meal = dbMealData.get({ plain: true });

      // pass data to template
      res.render('edit-post', {
        meal,
        loggedIn: true
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



module.exports = router;