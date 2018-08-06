# belly

> Git shortcuts for common tasks.

## Install

```
$ npm install --global belly
```

## Why?

There are a few things in Git that I do a lot. Some things I need in regular intervals but I always have to look up the commands. So I created this CLI tool to simplify the Git tasks I need the most.

## Why Not Use Git Aliases?

Sure, I could have used Git aliases but I wanted to have something that I can install with npm and I didn't want to be confined to Git aliases.

## OK, So What Does It Do?

I thought you'd never ask!

### `belly c [<commit message>]`

_Stage everything, commit everything and push to origin._

I do this a lot. I commit early and often in my feature branches and
always push it to the server. That is what `belly c` does.

Type `belly c` and belly will stage everything, commit it with the
commit message `belly auto-commit` and push it to origin.

You can specify a commit message by adding it right after the `c`.

Sometimes it's fine to just commit with a generic commit message.
Especially if it is minor work, you're the only person working on
the project or if you'll squash all commits in the end anyway.

### `belly s [<branch-name>]`

_Switch to the last branch or to an existing branch or create a new branch._

When we navigate between branches we typically either want to switch to an existing branch or
create a new one and switch to that one.

Why do we need multiple commands for that?

`belly s` does it all. If you don't specify a branch name it just switches to the last branch
you were on. If you specify a branch name of an existing branch like: `belly s branch-name`, it will switch to that. If the branch doesn't exist it will create it and switch to it.

### `belly t <version.number> [-d]`

_Tag the current commit with a version number and push tags to the server._

In order to annotated-tag the current commit with a version number and push the tag to the server use `belly t <version-number>`.
You can delete a tag locally and remotely in one go by adding `-d` at the end.

### `belly n <new-branch-name>`

_Rename your local and your remote branch in one go._

`belly n <new-branch-name>` will rename your local branch with `-m <new-branch-name>`, then delete your remote branch with `push :<current-branch-name>` and push the new branch to the server with `push -u <new-branch-name>`.

### `belly q -m <commit-message>`

_Rebase the current branch on to `origin/master` and if it doesn't fail, squash the branch._

If your team wants to keep a clean Git history you will most likely have to rebase your branch on a regular basis and squash your commits into one commit per feature.

`belly q` is here to help! The command will rebase your current branch on to `master` just to make sure you rebased (you have to make sure your master ist up-to-date). Then it will do a `reset --soft` back to `master` and then commit all your changes with either an auto-commit message or the commit message you specified with `-m`.

### `belly p`

If you work with rebasing and squashing in feature branches a lot, you have to force-push a lot. Instead of using `push --force` it is recommended to use `push --force-with-lease`. `belly p` gives you a nice shortcut for doing a `--force-with-lease` push. Make sure you understand [the ways how `--force-with-lease` can fail you though](https://developer.atlassian.com/blog/2015/04/force-with-lease/).

## Usage

```
$ [belly | b] --help

  Usage
    $ belly [c | s | t | n | q]

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

    Switch to last branch or switch to/create a branch with a specific name
    $ belly s [some-branch]

    Tag and annotate the current commit with a version number
    and push the tag to origin
    $ belly t 1.4.2

    Rename the current branch locally and on origin
    $ belly n some-branch

    Squash all commits since master
    $ belly q -m "Made some awesome changes"

    Force push with `--force-with-lease`
    $ belly p

```

## Why "belly"?
When looking for a name I started with `git-shortcuts` which was to long
so I shortened it to `g-cuts`. Still too long. `guts` was cool but a little
gross so `guts` became `belly`.

## License

MIT © [Kahlil Lechelt](https://github.com/kahlil)
