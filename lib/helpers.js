module.exports = {
  isEmptyArray(arr) {
    if (Array.isArray(arr)) {
      return arr.length === 0;
    }
    throw new TypeError('Input must be of type Array');
  }
};
