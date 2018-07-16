const ora = require('ora');
const git = require('./git');

const squashSpinner = ora(`Squashing branch commits`);

async function squash(commitMessage) {
  squashSpinner.start();
  await git.reset(['--soft', 'master']);
  await git.add('.');
  await git.commit(commitMessage);
  squashSpinner.succeed('Squashed all branch commits');
}

module.exports = squash;
