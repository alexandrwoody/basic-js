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
  let mas =[];
  if (Array.isArray(members))
  {
 members.forEach((el=>{
    if (typeof(el) !== 'string') return false;
    else {
      el=el.replaceAll(' ' , '');
      mas.push(el[0].toUpperCase());
    }

  }))}
  else return false;
return mas.sort().join('');
  
}

module.exports = {
  createDreamTeam
};
