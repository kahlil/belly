const git = require('simple-git');
const chalk = require('chalk');
const ora = require('ora');

const commitSpinner = ora('Committing latest changes');
const pushSpinner = ora('Pushing latest changes');

const blueGx = chalk.blue('gx');
const texts = {
  genericError: `💥 ${blueGx}: something went wrong.`,
  commitSuccess: `${blueGx}: commit executed`,
  pushSuccess: `${blueGx}: latest commit was pushed to origin`
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
  commitSpinner.start();
  git()
    .add('.')
    .commit(
      `gx: ${commitMessage}`,
      err => {
        if (err) {
          throw new Error(texts.genericError);
        }
        commitSpinner.succeed(texts.commitSuccess);
        pushSpinner.start();
      }
    )
    .push(
      ['origin', 'master'],
      err => {
        if (err) {
          throw new Error(err);
        }
        pushSpinner.succeed(texts.pushSuccess);
      }
    );
}
