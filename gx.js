const git = require('simple-git');

function isEmptyArray(arr) {
  if (Array.isArray(arr)) {
    return arr.length === 0;
  }
  throw new TypeError('Input must be of type Array');
}

module.exports = cli => {
  if (isEmptyArray(cli.input)) {
    git()
      .add('.')
      .commit('gx auto-commit', () => console.log('gx commited your code'));
  }
};
