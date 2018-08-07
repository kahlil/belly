const ora = require('ora');
const git = require('./git');

const squashSpinner = ora(`Squashing branch commits`);

async function squash(commitMessage, cliInput) {
  squashSpinner.start();
  await git.fetch('origin', 'master');
  await git.rebase(['origin/master']);
  await git.reset(['--soft', 'origin/master']);
  await git.add('.');
  await git.commit(commitMessage || cliInput.slice(1).join(' '));
  squashSpinner.succeed(`Squashed all branch commits with message: "${commitMessage}"`);
}

module.exports = squash;
