const ora = require('ora');
const git = require('./git');
const texts = require('./texts');

const commitSpinner = ora(texts.startCommit);
const pushSpinner = ora(texts.startPush);

async function addAllCommitAndPush(commitMessage, cliInput, push) {
  commitSpinner.start();
  const branchSummary = await git.branchLocal();
  const currentBranch = branchSummary.current;
  await git.add('.');
  const message = commitMessage || cliInput.slice(1).join(' ') || 'belly auto-commit';
  await git.commit(message);
  commitSpinner.stopAndPersist('✨', texts.succeedCommit(message));
  if (push) {
    pushSpinner.start();
    await git.push('origin', currentBranch);
    pushSpinner.stopAndPersist('✨', texts.succeedPush);
  }
}

module.exports = addAllCommitAndPush;
