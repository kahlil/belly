const git = require('simple-git');
const chalk = require('chalk');

const blueGx = chalk.blue('gx');

module.exports = async cli => {
  const {commitMessage} = cli.flags;
  if (isEmptyArray(cli.input)) {
    addAllCommitAndPush(commitMessage);
  }
};

function isEmptyArray(arr) {
  if (Array.isArray(arr)) {
    return arr.length === 0;
  }
  throw new TypeError('Input must be of type Array');
}

function addAllCommitAndPush(commitMessage) {
  git()
    .add('.')
    .commit(
      `${blueGx}: ${commitMessage}`,
      (err, data) => {
        if (err) {
          throw new Error(`  💥 ${blueGx}: something went wrong.`);
        }
        console.info(`  ✨ ${blueGx}: commit executed with data`, data.summary);
      }
    );
}
