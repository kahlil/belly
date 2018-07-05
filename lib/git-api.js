const git = require('simple-git/promise')();
const chalk = require('chalk');
const ora = require('ora');

const commitSpinner = ora(`Committing latest changes`);
const pushSpinner = ora(`Pushing latest changes`);
const switchSpinner = ora(`Switching to last branch`);
const texts = {
  genericError: `💥 Something went wrong.`,
  commitSuccess: `Changes committed`,
  pushSuccess: `Latest commit was pushed to origin`,
  switchSuccess: `Switched to last branch`
};

module.exports = {
  async addAllCommitAndPush(commitMessage) {
    commitSpinner.start();
    try {
      await git.add('.');
      await git.commit(commitMessage);
      commitSpinner.succeed(texts.commitSuccess);
      pushSpinner.start();
      await git.push();
      pushSpinner.succeed();
    } catch (err) {
      throw new Error(err);
    }
    pushSpinner.start();
  },
  switchToLastBranch() {
    switchSpinner.start();
    git.checkout('-', (err, data) => {
      if (err) {
        throw new Error(err);
      }
      switchSpinner.succeed(texts.switchSuccess);
      // console.log('\rGit output:\r' + data);
    });
  }
};
