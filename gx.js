const git = require('simple-git');

module.exports = cli => {
  const {commitMessage} = cli.flags;
  if (isEmptyArray(cli.input)) {
    git()
      .add('.')
      .commit(commitMessage, () => console.log(commitMessage));
  }
};

function isEmptyArray(arr) {
  if (Array.isArray(arr)) {
    return arr.length === 0;
  }
  throw new TypeError('Input must be of type Array');
}
