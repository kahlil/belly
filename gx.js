const git = require('simple-git');

module.exports = async cli => {
  const {commitMessage} = cli.flags;
  if (isEmptyArray(cli.input)) {
    git()
      .add('.')
      .commit(
        commitMessage,
        (err, data) => {
          if (err) {
            console.error('💥 gx: something went wrong.');
            return;
          }
          console.info('✨ gx: commit executed with data', data);
        }
      );
  }
};

function isEmptyArray(arr) {
  if (Array.isArray(arr)) {
    return arr.length === 0;
  }
  throw new TypeError('Input must be of type Array');
}
