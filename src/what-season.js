const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(/*date8*/) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
//   let season;
// if (arguments.length===0) return 'Unable to determine the time of year!' 
// if (isNaN(date.getTime())) {
//   throw new NotImplementedError('Invalid date!')
// } else {
//  if (date.getMonth()<3) season = 'winter';
//  else if ((date.getMonth()>=3) && (date.getMonth()<=5))  season = 'spring';
//  else if ((date.getMonth()>=6) && (date.getMonth()<=8))  season = 'summer';
//  else if ((date.getMonth()>=9) && (date.getMonth()<=11))  season = 'autumn';
//  else if (date.getMonth()===12)  season = 'winter';


// }
// return season;
}

module.exports = {
  getSeason
};
