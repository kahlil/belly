const git = require('simple-git')();
const chalk = require('chalk');
const ora = require('ora');

const blueGx = chalk.blue('gx');
const commitSpinner = ora(`${blueGx}: Committing latest changes`);
const pushSpinner = ora(`${blueGx}: Pushing latest changes`);
const switchSpinner = ora(`${blueGx}: Switching to last branch`);
const texts = {
  genericError: `💥 ${blueGx}: Something went wrong.`,
  commitSuccess: `${blueGx}: Changes committed`,
  pushSuccess: `${blueGx}: Latest commit was pushed to origin`,
  switchSuccess: `${blueGx}: Switched to last branch`
};

module.exports = {
  addAllCommitAndPush(commitMessage) {
    commitSpinner.start();
    git.add('.')
      .commit(
        commitMessage,
        err => {
          if (err) {
            throw new Error(texts.genericError);
          }
          commitSpinner.succeed(texts.commitSuccess);
          pushSpinner.start();
        }
      )
      .push(
        (err, data) => {
          if (err) {
            throw new Error(err);
          }
          pushSpinner.succeed(texts.pushSuccess);
          console.log('\rGit output:\r' + data);
        }
      );
  },
  switchToLastBranch() {
    switchSpinner.start();
    git.checkout('-', (err, data) => {
      if (err) {
        throw new Error(err);
      }
      switchSpinner.succeed(texts.switchSuccess);
      console.log('\rGit output:\r' + data);
    });
  }
};
