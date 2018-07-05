const addAllCommitAndPush = require('./add-all-commit-and-push');
const switchToLastBranch = require('./switch-to-last-branch');
const {isEmptyArray} = require('./helpers');

module.exports = async cli => {
  const {commitMessage} = cli.flags;
  if (isEmptyArray(cli.input)) {
    addAllCommitAndPush(commitMessage);
  } else if (cli.input[0] === '-') {
    switchToLastBranch();
  }
};
