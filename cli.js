#!/usr/bin/env node
'use strict';

const meow = require('meow');
const belly = require('./lib/belly');
const {cliHelp} = require('./lib/texts');

const config = {
  flags: {
    commitMessage: {
      type: 'string',
      default: undefined,
      alias: 'm'
    },
    push: {
      type: 'boolean',
      default: true,
      alias: 'p'
    },
    del: {
      type: 'boolean',
      default: false,
      alias: 'd'
    }
  }
};

const cli = meow(cliHelp, config);

belly(cli);
