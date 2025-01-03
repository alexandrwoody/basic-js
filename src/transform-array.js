const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
 if (Array.isArray(arr)){
  let mas = [];
  arr.forEach((item) => {
    if (Number.isFinite(item)) mas.push(item)
  });
  arr.forEach((item, index) => {
    if (!Number.isFinite(item)) {
      switch (item) {
        case '--discard-next':
          mas.splice(index, 1)
          break;

        case '--discard-prev':
          mas.splice(index - 1, 1)
          break;

        case '--double-next':
          mas.splice(index, 0, mas[index])
          break;
        case '--double-prev':
          mas.splice(index - 1, 0, mas[index])
          break;

      }
    }
  });
  return mas;
 }
 else { throw "\'arr\' parameter must be an instance of the Array!";

 }
}

module.exports = {
  transform
};
