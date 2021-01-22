const router = require('express').Router();
const { Meal, User, Vote, Comment } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

// get all meals
router.get('/', (req, res) => {
    Meal.findAll({
      order: [['created_at', 'ASC']],
      attributes: [
        'id',
        'description',
        'title',
        'image',
        'created_at',
        [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE meal.id = vote.post_id)'), 'vote_count']
      ],
      include: [
        // include the Comment model here:
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
        [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE meal.id = vote.post_id)'), 'vote_count']
      ],
      include: [
        // include the Comment model here:
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
        res.json(dbMealData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// Create new post (not needed. Meal data will be seeded into db)
// router.post('/', withAuth, (req, res) => {
//     // expects {title: 'Taskmaster goes public!', post_url: 'https://taskmaster.com/press', user_id: 1}
//     Post.create({
//       title: req.body.title,
//       post_url: req.body.post_url,
//       user_id: req.session.user_id
//     })
//       .then(dbPostData => res.json(dbPostData))
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
// });

// PUT /api/posts/upvote (add a vote to a post)
router.put('/upvote', withAuth, (req, res) => {
  // make sure the session exists first
  if (req.session) {
    // pass session id along with all destructured properties on req.body
    Meal.upvote({ ...req.body, user_id: req.session.user_id }, { Vote, Comment, User })
      .then(updatedVoteData => res.json(updatedVoteData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});

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