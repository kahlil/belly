#!/usr/bin/env node
'use strict';
const meow = require('meow');

const git = require('simple-git');

const cli = meow(`
	Usage
	  $ g [input]

	Options
	  --foo  Lorem ipsum [Default: false]

	Examples
	  $ g
	  unicorns & rainbows
	  $ g ponies
	  ponies & rainbows
`);

git().checkout('-');

console.log(cli.input[0] || 'unicorns');
