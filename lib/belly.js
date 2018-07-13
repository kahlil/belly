const addAllCommitAndPush = require('./addAllCommitAndPush');
const switchToBranch = require('./switchToBranch');
const tagAndPushTags = require('./tagAndPushTags');
const renameBranch = require('./renameBranch');
const handleGitError = require('./handleGitError');

module.exports = async cli => {
  const {commitMessage, push} = cli.flags;
  if (cli.input[0] === 'c') {
    try {
      await addAllCommitAndPush(commitMessage, push);
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
      try {
        await tagAndPushTags(cli.input[1]);
      } catch (error) {
        handleGitError(error);
      }
    } else {
      console.error('\nNo version specified');
      process.exit(1);
    }
  } else if (cli.input[0] === 'n') {
    try {
      await renameBranch(cli.input[1]);
    } catch (error) {
      handleGitError(error);
    }
  }
  process.exit(0);
};
