const ora = require('ora');
const git = require('./git');
const handleGitError = require('./handleGitError');

async function tagAndPushTags(tag) {
  const tagSpinner = ora('Tagging and annotating latest commit with ' + tag);
  const pushTagsSpinner = ora('Push tags to origin');
  tagSpinner.start();
  try {
    await git.addAnnotatedTag(tag, tag);
    tagSpinner.succeed('Tagged and annotated latest commit wiith ' + tag);
    pushTagsSpinner.start();
    await git.pushTags('origin');
    pushTagsSpinner.succeed('Pushed tags to origin');
  } catch (err) {
    handleGitError(err);
  }
}

module.exports = tagAndPushTags;
