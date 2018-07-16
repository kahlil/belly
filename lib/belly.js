const addAllCommitAndPush = require('./addAllCommitAndPush');
const switchToBranch = require('./switchToBranch');
const tagAndPushTags = require('./tagAndPushTags');
const handleGitError = require('./handleGitError');

module.exports = async cli => {
  const {commitMessage} = cli.flags;
  if (cli.input[0] === 'c') {
    try {
      await addAllCommitAndPush(commitMessage);
    } catch (error) {
      handleGitError(error);
    }
  } else if (cli.input[0] === 's') {
    try {
      await switchToBranch(cli.input[1]);
    } catch (error) {
      handleGitError(error);
    }
  } else if (cli.input[0] === 't') {
    if (cli.input[1]) {
      tagAndPushTags(cli.input[1]);
    } else {
      console.error('\nNo version specified');
      process.exit(1);
    }
  }
  process.exit(0);
};
