const ora = require('ora');
const git = require('./git');
const texts = require('./texts');
const handleGitError = require('./handleGitError');

const switchSpinner = ora(`Checking out branch`);

async function switchToBranch(branchName = '-') {
  switchSpinner.start();
  const branchSummary = await git.branchLocal();
  try {
    if (branchSummary.all.includes(branchName)) {
      await git.checkout(branchName);
      switchSpinner.succeed('Switched to branch: ' + branchName);
    } else if (branchName === '-') {
      await git.checkout(branchName);
      switchSpinner.succeed(texts.switchSuccess);
    } else {
      await git.checkoutLocalBranch(branchName);
      switchSpinner.succeed('Checked out new branch: ' + branchName);
    }
  } catch (err) {
    handleGitError(err);
  }
}

module.exports = switchToBranch;
