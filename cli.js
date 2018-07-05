#!/usr/bin/env node
'use strict';

const meow = require('meow');
const gx = require('./lib/gx');
const {cliHelp} = require('./lib/texts');

const config = {
  flags: {
    commitMessage: {
      type: 'string',
      default: `gx auto-commit`,
      alias: 'm'
    }
  }
};

const cli = meow(cliHelp, config);

gx(cli);
