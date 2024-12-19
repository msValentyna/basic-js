const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    if (!Array.isArray(members)) {
    return false;
  }
  return members.filter((member) => typeof member === 'string').map((name) => name.trimStart().toUpperCase()[0]).sort((prev, next) => prev.localeCompare(next)).join('');
}

// console.log(createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']))
// console.log(createDreamTeam([
//         '   William Alston ',
//         ' Paul Benacerraf',
//         '  Ross Cameron',
//         '       Gilles Deleuze',
//         '  Arda Denkel ',
//         '  Michael Devitt',
//         '  Kit Fine',
//         ' Nelson Goodman',
//         'David Kolb',
//         '   Saul Kripke',
//         '  Trenton Merricks',
//         '  Jay Rosenberg',
//       ])) //, 'ADGJKMNPRSTW');

// console.log(createDreamTeam([
//         ['David Abram'],
//         ['Robin Attfield'],
//         'Thomas Berry',
//         ['Paul R.Ehrlich'],
//         'donna Haraway',
//         ' BrIaN_gOodWiN  ',
//         {
//           0: 'Serenella Iovino'
//         },
//         'Erazim Kohak',
//         '  val_plumwood',
//       ])) //, 'BDETV');

module.exports = {
  createDreamTeam
};
