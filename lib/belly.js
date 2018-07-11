const addAllCommitAndPush = require('./addAllCommitAndPush');
const switchToBranch = require('./switchToBranch');
const tagAndPushTags = require('./tagAndPushTags');

module.exports = async cli => {
  const {commitMessage} = cli.flags;
  if (cli.input[0] === 'c') {
    addAllCommitAndPush(commitMessage);
  } else if (cli.input[0] === 's') {
    // TODO: rename it to switchToBranch
    // and create new branches if they don't exist.
    try {
      await switchToBranch(cli.input[1]);
    } catch (e) {
      console.log(e);
    }
  } else if (cli.input[0] === 't') {
    if (cli.input[1]) {
      tagAndPushTags(cli.input[1]);
    } else {
      console.error('\nNo version specified');
      process.exit(1);
    }
  }
  process.exit(1);
};
