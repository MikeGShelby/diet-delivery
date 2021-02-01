const router = require('express').Router();
const { User, UserProfile } = require('../../models');

// POST /api/users/profile (create new user profile)
router.post('/', (req, res) => {
  UserProfile.create({
    user_id: req.session.user_id,
    display_name: req.body.display_name,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    street_address: req.body.street_address,
    city: req.body.city,
    state: req.body.state,
    zip_code: req.body.zip_code
  })
  .then(dbUserProfileData => {
    req.session.save(() => {
      req.session.display_name = dbUserProfileData.display_name;
      res.json(dbUserProfileData);
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// PUT /api/users/profile/id (update user name and address info, WITH auth)
// router.put('/:id', withAuth, (req, res) => { }

// PUT /api/users/profile/id (update user name and address info, WITHOUT auth)
router.put('/:id', (req, res) => {
  // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
  UserProfile.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
    .then(dbUserProfileData => {
      if (!dbUserProfileData[0]) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserProfileData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;