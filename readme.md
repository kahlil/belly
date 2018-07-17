# belly

> Git shortcuts for common tasks.


## Install

```
$ npm install --global belly
```

## Why?

There are a few things in Git that I do a lot. They involve
typing multiple commands. I was tired of typing them all the time so I made
this tool to make my Git workflows more convenient.

### Why Not Use Git Aliases?

Sure, I could have done that but I wanted to have something a bit more portable, shareable and
easier to install.

### OK, So What Does It Do?

I thought you'd never ask!

#### `belly c`: Stage Everything, Commit Everything & Push To Origin

I do this a lot. I commit early and often in my feature branches and
always push it to the server. That is what `belly c` does.

Type `belly c` and belly will stage everything, commit it with the
commit message `belly auto-commit` and push it to origin.

You can specify a commit message with `-m`.

Sometimes it's fine to just commit with a generic commit message.
Especially if it is minor work, you're the only person working on
the project or if you'll squash all commits in the end anyway.

#### `belly s`: Switch To The Last Branch Or To An Existing Branch Or Create A New Branch

When we navigate between branches we typically either want to switch to an existing branch or
create a new one and switch to that one.

Why do we need multiple commands for that?

`belly s` does it all. If you don't specify a branch name it just switches to the last branch
you were on. If you specify a branch name of an existing branch like: `belly s branch-name`, it will switch to that. If the branch doesn't exist it will create it and switch to it.


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
```

## Why "belly"?
When looking for a name I started with `git-shortcuts` which was to long
so I shortened it to `g-cuts`. Still too long. `guts` was cool but a little
gross so `guts` became `belly`.

## License

MIT © [Kahlil Lechelt](https://github.com/kahlil)
