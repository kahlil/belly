const addAllCommitAndPush = require('./addAllCommitAndPush');
const switchToLastBranch = require('./switchToLastBranch');
const tagAndPushTags = require('./tagAndPushTags');
const {isEmptyArray} = require('./helpers');

module.exports = async cli => {
  const {commitMessage} = cli.flags;
  if (isEmptyArray(cli.input)) {
    addAllCommitAndPush(commitMessage);
  } else if (cli.input[0] === '-') {
    switchToLastBranch();
  } else if (cli.input[0] === 't') {
    if (cli.input[1]) {
      tagAndPushTags(cli.input[1]);
    } else {
      console.error('\nNo version specified')
      process.exit(1);
    }
  }
};
