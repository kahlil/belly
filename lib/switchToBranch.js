const ora = require('ora');
const git = require('./git');
const texts = require('./texts');
const handleGitError = require('./handleGitError');

const switchSpinner = ora(`Switching to last branch`);

async function switchToBranch(branchName = '-') {
  // switchSpinner.start();
  // try {
  //   await git.checkoutLocalBranch(branchName);
  //   switchSpinner.succeed(texts.switchSuccess);
  // } catch (err) {
  //   handleGitError(err);
  // }
  const branchSummary = await git.branchLocal();
  if (branchSummary.all.includes(branchName)) {
    await git.checkout(branchName);
  } else {
    await git.checkoutLocalBranch(branchName);
  }
  // console.log(branchName, branchSummary);
}

module.exports = switchToBranch;
