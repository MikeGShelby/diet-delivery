const router = require('express').Router();
const { User, UserProfile } = require('../../models');


router.get('/user', (req, res) => {
    User.findAll({
      attributes: [
        'username',
        'email'
      ],
      include: [
        {
          model: UserProfile ,
          attributes: ['firstName', 'lastName', 'streetAddress', 'city', 'state', 'zipCode' ]
        }
      ]
    })
      .then(dbUserData => {
        // pass all post objects into the homepage template
        const profiles = dbUserData.map(profile => profile.get({ plain: true }));
        // Added loggedIn data here, as homepage was not properly displaying conditional login/logout link
        res.render('homepage', {
          profiles,
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  // GET single-user profile
  router.get('/user/:id', (req, res) => {
   User.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'username',
        'email'
      ],
      include: [
        {
          model: UserProfile,
          attributes: ['firstName', 'lastName', 'streetAddress', 'city', 'state', 'zipCode' ]
        }
      ]
    })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
  
        // serialize the data
        const user = dbUserData.get({ plain: true });
  
        // pass data to template
        res.render('single-user', {
          user,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  module.exports = router;