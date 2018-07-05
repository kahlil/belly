const addAllCommitAndPush = require('./addAllCommitAndPush');
const switchToLastBranch = require('./switchToLastBranch');
const {isEmptyArray} = require('./helpers');

module.exports = async cli => {
  const {commitMessage} = cli.flags;
  if (isEmptyArray(cli.input)) {
    addAllCommitAndPush(commitMessage);
  } else if (cli.input[0] === '-') {
    switchToLastBranch();
  } else if (cli.input[0] === 't') {
    tagAndPushTags();
  }
};
