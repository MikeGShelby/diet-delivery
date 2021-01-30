const { UserProfile } = require('../models');

const userProfileData = [
    {
     user_id: 1,
     display_name: 'DisplayName1',
     first_name: 'FirstName1',
     last_name: 'LastName1',
     street_address: '1111 Street Dr',
     city: 'City1',
     state: 'TX1',
     zip_code: '11111'
   },
   {
     user_id: 2,
     display_name: 'DisplayName2',
     first_name: 'FirstName2',
     last_name: 'LastName2',
     street_address: '2222 Street Dr',
     city: 'City2',
     state: 'TX2',
     zip_code: '22222'
   },
   {
    user_id: 3,
    display_name: 'DisplayName3',
    first_name: 'FirstName3',
    last_name: 'LastName3',
    street_address: '3333 Street Dr',
    city: 'City3',
    state: 'TX3',
    zip_code: '33333'
  }
];

const seedUserProfile = () => UserProfile.bulkCreate(userProfileData);

module.exports = seedUserProfile;