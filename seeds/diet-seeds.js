const { Diet } = require('../models');

const dietData = [
  {
   diet_name: 'renal',
  },
  {
    diet_name: 'diabetic',
   },
   {
    diet_name: 'low FODMAP',
   }
];

const seedDiets = () => Diet.bulkCreate(dietData);

module.exports = seedDiets;
