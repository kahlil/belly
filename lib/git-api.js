const git = require('simple-git/promise')();
const chalk = require('chalk');
const ora = require('ora');

const commitSpinner = ora(`Staging and committing all latest changes`);
const pushSpinner = ora(`Pushing latest changes to origin`);
const switchSpinner = ora(`Switching to last branch`);
const texts = {
  genericError: `💥 Something went wrong.`,
  commitSuccess: `Everything was committed`,
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
  },
  async switchToLastBranch() {
    switchSpinner.start();
    try {
      await git.checkout('-');
      switchSpinner.succeed(texts.switchSuccess);
    } catch (err) {
      console.log(' ');
      throw new Error(err);
    }
  }
};
