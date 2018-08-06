const addAllCommitAndPush = require('./addAllCommitAndPush');
const switchToBranch = require('./switchToBranch');
const tagAndPushTags = require('./tagAndPushTags');
const renameBranch = require('./renameBranch');
const squash = require('./squash');
const pushForceWithLease = require('./pushForceWithLease');
const handleGitError = require('./handleGitError');

module.exports = async cli => {
  const {commitMessage, push, del} = cli.flags;

  switch (cli.input[0]) {
    case 'c':
      await addAllCommitAndPush(commitMessage, cli.input, push)
        .catch(handleGitError);
      break;

    case 's':
      await await switchToBranch(cli.input[1])
        .catch(handleGitError);
      break;

    case 't':
      await tagAndPushTags(cli.input[1], del)
        .catch(handleGitError);
      break;

    case 'n':
      await renameBranch(cli.input[1])
        .catch(handleGitError);
      break;

    case 'q':
      await squash(commitMessage)
        .catch(handleGitError);
      break;

    case 'p':
      await pushForceWithLease()
        .catch(handleGitError);
      break;

    default:
      break;
  }

  process.exit(0);
};
