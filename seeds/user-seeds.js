const { User } = require('../models');

const userData = [
  {
    first_name: 'Username1',
    last_name: 'alex',
    email: 'email1@email.com',
    password: 'password1',
    address: '152 dgfd',
    city: 'austin',
    state: 'texas',
    zip: '78878'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
