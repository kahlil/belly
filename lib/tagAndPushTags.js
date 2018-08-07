const ora = require('ora');
// const writePkg = require('write-pkg');
// const readPkg = require('read-pkg');
const git = require('./git');
const handleGitError = require('./handleGitError');

async function tagAndPushTags(tag, del) {
  if (!tag) {
    console.error('\nNo version specified');
    process.exit(1);
  }
  const tagSpinner = ora('');
  if (del) {
    await deleteTag(tag, tagSpinner);
    return;
  }
  tagSpinner.start('Tagging and annotating latest commit with ' + tag);
  const pushTagsSpinner = ora('Push tags to origin');
  tagSpinner.start();
  try {
    await git.addAnnotatedTag(tag, tag);
    tagSpinner.succeed('Tagged and annotated latest commit with ' + tag);
    pushTagsSpinner.start();
    await git.pushTags('origin');
    pushTagsSpinner.succeed('Pushed tags to origin');
  } catch (err) {
    handleGitError(err);
  }
}

async function deleteTag(tag, spinner) {
  spinner.start(`Deleting tag "${tag}" locally and on origin`);
  await git.tag(['-d', tag]);
  await git.push('origin', `:refs/tags/${tag}`);
  spinner.succeed(`Deleted tag "${tag}" locally and on origin`);
}

module.exports = tagAndPushTags;
