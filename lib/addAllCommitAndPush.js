const ora = require('ora');
const git = require('./git');
const texts = require('./texts');

const commitSpinner = ora(`Staging and committing all latest changes`);
const pushSpinner = ora(`Pushing latest changes to origin`);

async function addAllCommitAndPush(commitMessage, push) {
  commitSpinner.start();
  const branchSummary = await git.branchLocal();
  const currentBranch = branchSummary.current;
  await git.add('.');
  await git.commit(commitMessage);
  commitSpinner.succeed(texts.commitSuccess);
  if (push) {
    pushSpinner.start();
    await git.push('origin', currentBranch);
    pushSpinner.succeed('Pushed latest changes to origin');
  }
}

module.exports = addAllCommitAndPush;
