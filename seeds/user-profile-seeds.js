
const { UserProfile } = require('../models');
const userProfileData = [
    {
        user_id: 1,
        firstName: 'Jennifer',
        lastName: 'Ortiz',
        streetAddress: '6305 Emerald Forest Dr',
        city: 'Austin',
        state: 'TX',
        zipCode: '78745'
   },
   {
        user_id: 2,
        firstName: 'Herman',
        lastName: 'Munster',
        streetAddress: '1313 Mockingbird Lane',
        city: 'San Marcos',
        state: 'TX',
        zipCode: '78666'
   },
];
const seedUserProfile = () => UserProfile.bulkCreate(userProfileData);
module.exports = seedUserProfile;