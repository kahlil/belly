const ora = require('ora');
const git = require('./git');

const renameSpinner = ora(`Renaming local branch`);
const renameRemoteSpinner = ora(`Renaming remote branch`);

async function renameBranch(newName) {
  renameSpinner.start();
  const branchSummary = await git.branchLocal();
  const currentBranch = branchSummary.current;
  await git.branch(['--move', newName]);
  renameSpinner.succeed('Renamed local branch to ' + newName);
  renameRemoteSpinner.start();
  await git.push('origin', ':' + currentBranch);
  await git.push('origin', newName, '-u');
  renameRemoteSpinner.succeed('Renamed remote branch');
}

module.exports = renameBranch;
