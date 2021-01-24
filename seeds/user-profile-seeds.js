const { UserProfile } = require('../models');

const userProfileData = [
    {
        user_id: 1,
        first_name: 'Jennifer',
        last_name: 'Ortiz',
        street_address: '6305 Emerald Forest Dr',
        city: 'Austin',
        state: 'TX',
        zip_code: '78745'
   },
   {
        user_id: 2,
        first_name: 'Herman',
        last_name: 'Munster',
        street_address: '1313 Mockingbird Lane',
        city: 'San Marcos',
        state: 'TX',
        zip_code: '78666'
   },
];

const seedUserProfile = () => UserProfile.bulkCreate(userProfileData);

module.exports = seedUserProfile;