const git = require('simple-git/promise')();

git.silent(true);

module.exports = git;
