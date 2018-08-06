const ora = require('ora');
const git = require('./git');

const pushSpinner = ora(`Force-with-lease-pushing latest changes to origin`);

async function pushForceWithLease() {
  pushSpinner.start();
  const branchSummary = await git.branchLocal();
  const currentBranch = branchSummary.current;
  await git.push(['-u', 'origin', currentBranch, '--force-with-lease']);
  pushSpinner.succeed('Pushed latest changes to origin with --force-with-lease');
}

module.exports = pushForceWithLease;
