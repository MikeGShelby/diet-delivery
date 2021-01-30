const router = require('express').Router();
const { User, UserProfile } = require('../../models');


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