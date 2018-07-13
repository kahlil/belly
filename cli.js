#!/usr/bin/env node
'use strict';

const meow = require('meow');
const belly = require('./lib/belly');
const {cliHelp} = require('./lib/texts');

const config = {
  flags: {
    commitMessage: {
      type: 'string',
      default: `belly auto-commit`,
      alias: 'm'
    },
    push: {
      type: 'boolean',
      default: true,
      alias: 'p'
    }
  }
};

const cli = meow(cliHelp, config);

belly(cli);
