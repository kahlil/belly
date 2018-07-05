const {addAllCommitAndPush, switchToLastBranch} = require('./git-api');
const {isEmptyArray} = require('./helpers');

module.exports = async cli => {
  const {commitMessage} = cli.flags;
  if (isEmptyArray(cli.input)) {
    addAllCommitAndPush(commitMessage);
  } else if (cli.input[0] === '-') {
    switchToLastBranch();
  }
};
