const ora = require('ora');
const git = require('./git');

const pushSpinner = ora(`Force-with-lease-pushing latest changes to origin`);

async function pushForceWithLease() {
  pushSpinner.start();
  await git.push(['--force-with-lease']);
  pushSpinner.succeed('Force-with-lease-pushed latest changes to origin');
}

module.exports = pushForceWithLease;
