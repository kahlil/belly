# belly

> Git shortcuts for common tasks.


## Install

```
$ npm install --global belly
```


## Usage

```
$ belly --help

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


## License

MIT © [Kahlil Lechelt](https://github.com/kahlil)
