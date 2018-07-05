function handleGitError(err) {
  console.log('\n\n' + err);
  process.exit(1);
}

module.exports = handleGitError;
