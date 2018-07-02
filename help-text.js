module.exports = `
  Usage
    $ gx [branch name]

  Options
    --help                           Display this message
    --message -m "<commit message>"  Add a custom commit message
    --tag -t "<new version number>"  Tag and annotate the current commit with
                                     the passed version number
    --rename -r "<new branch name>"  Rename the branch locally and remote



  Examples
    Commit all staged and unstaged changes with a generic
    commit message and push the commit to origin
    $ gx

    Commit all staged and unstaged changes with a custom
    commit message and push the commit to origin
    $ gx -m "Made some awesome changes"

    Switch to an existing branch
    $ gx existing-branch

    If the specified name is not an existing branch a
    branch with that name will be created
    $ gx non-existing-branch

    Swith to last branch
    $ gx -

    Tag and annotate the current commit with a version number
    and push the tag to origin
    $ gx -t "1.4.5"
`;
