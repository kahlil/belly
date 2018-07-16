const ora = require('ora');
const git = require('./git');
const texts = require('./texts');
const handleGitError = require('./handleGitError');

const commitSpinner = ora(`Staging and committing all latest changes`);
const pushSpinner = ora(`Pushing latest changes to origin`);

async function addAllCommitAndPush(commitMessage) {
  commitSpinner.start();
  try {
    const branchSummary = await git.branchLocal();
    const currentBranch = branchSummary.current;
    await git.add('.');
    await git.commit(commitMessage);
    commitSpinner.succeed(texts.commitSuccess);
    pushSpinner.start();
    await git.push('origin', currentBranch);
    pushSpinner.succeed();
  } catch (err) {
    handleGitError(err);
  }
}

module.exports = addAllCommitAndPush;
