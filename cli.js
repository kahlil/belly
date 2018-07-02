#!/usr/bin/env node
'use strict';
const meow = require('meow');

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

console.log(cli.input[0] || 'unicorns');
