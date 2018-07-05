const ora = require('ora');
const git = require('./git');
const texts = require('./texts');
const handleGitError = require('./handleGitError');

const switchSpinner = ora(`Switching to last branch`);

async function switchToLastBranch() {
  switchSpinner.start();
  try {
    await git.checkout('-');
    switchSpinner.succeed(texts.switchSuccess);
  } catch (err) {
    handleGitError(err);
  }
}

module.exports = switchToLastBranch;
