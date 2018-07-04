const git = require('simple-git');
const chalk = require('chalk');

const blueGx = chalk.blue('gx');
const texts = {
  genericError: `💥 ${blueGx}: something went wrong.`,
  commitSuccess: `✨ ${blueGx}: commit executed`,
  pushSuccess: `✨ ${blueGx}: latest commit was pushed to origin`
};

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
      `gx: ${commitMessage}`,
      err => {
        if (err) {
          throw new Error(texts.genericError);
        }
        console.info(texts.commitSuccess);
      }
    )
    .push(
      ['origin', 'master'],
      (err, data) => {
        if (err) {
          throw new Error(err);
        }
        console.log(data);
      }
    );
}
