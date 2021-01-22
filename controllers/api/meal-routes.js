const router = require('express').Router();
const { Meal, User, SelectMeal, Diet } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');
const { selectMeal } = require('../../models/Meal');

// get all meals
router.get('/', (req, res) => {
    Meal.findAll({
      order: [['title', 'ASC']],
      attributes: [
        'id',
        'title',
        'description',
        'image',
        'created_at',
        [sequelize.literal('(SELECT COUNT(*) FROM select_meal WHERE meal.id = select_meal.meal_id)'), 'meal_selected']
      ]

    })
      .then(dbMealData => res.json(dbMealData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// Get one meal associated with provided ID
router.get('/:id', (req, res) => {
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
        [sequelize.literal('(SELECT COUNT(*) FROM select_meal WHERE meal.id = select_meal.meal_id)'), 'meal_selected']
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

// PUT /api/meals/select-meal (select a meal, WITHOUT login auth)
router.put('/select-meal', (req, res) => {
    Meal.selectMeal(req.body, { SelectMeal, User })
      .then(updatedSelectMealData => res.json(updatedSelectMealData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  }
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

// Delete a post
// router.delete('/:id', withAuth, (req, res) => {
//     Post.destroy({
//       where: {
//         id: req.params.id
//       }
//     })
//       .then(dbPostData => {
//         if (!dbPostData) {
//           res.status(404).json({ message: 'No post found with this id' });
//           return;
//         }
//         res.json(dbPostData);
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
// });

module.exports = router;