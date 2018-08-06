const ora = require('ora');
const git = require('./git');

const commitSpinner = ora(`Staging and committing all changes...`);
const pushSpinner = ora(`Pushing to origin...`);

async function addAllCommitAndPush(commitMessage, cliInput, push) {
  commitSpinner.start();
  const branchSummary = await git.branchLocal();
  const currentBranch = branchSummary.current;
  await git.add('.');
  const message = commitMessage || cliInput.slice(1).join(' ') || 'belly auto-commit';
  await git.commit(message);
  commitSpinner.succeed(`All work was committed with this message: "${message}"`);
  if (push) {
    pushSpinner.start();
    await git.push('origin', currentBranch);
    pushSpinner.succeed('Pushed to origin');
  }
}

module.exports = addAllCommitAndPush;
