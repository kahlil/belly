const chalk = require('chalk');

module.exports = {
  genericError: `💥  something went wrong.`,
  startCommit: 'Staging and committing all changes...',
  startPush: 'Pushing to origin...',
  succeedCommit: message => ` belly ${chalk.blue('committed your work')} with this message: ${chalk.magenta(message)}`,
  succeedPush: ` belly ${chalk.blue('pushed your work')} to origin`,
  switchSuccess: ' Switched to last branch',
  cliHelp: `
  Usage
    $ belly [c | s | t | r | n | q]

  Options
    --help                           Display this message
    --message -m "<commit message>"  Add a custom commit message

  Examples
    Commit all staged and unstaged changes with a generic
    commit message and push the commit to origin
    $ belly c

    Commit all staged and unstaged changes with a custom
    commit message and push the commit to origin
    $ belly c -m "Made some awesome changes"

    Switch to last branch or switch to / create a branch with a specific name
    $ belly s [<branch-name>]

    Tag and annotate the current commit with a version number
    and push the tag to origin
    $ belly t <version-number>

    Rename the current branch locally and on origin
    $ belly n <new-branch-name>

    Squash all commits since master
    $ belly q -m "<commit-message>"
  `
};
