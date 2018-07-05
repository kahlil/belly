#!/usr/bin/env node
'use strict';

const meow = require('meow');
const gx = require('./lib/gx');
const helpText = require('./lib/help-text');

const config = {
  flags: {
    commitMessage: {
      type: 'string',
      default: `gx auto-commit`,
      alias: 'm'
    }
  }
};

const cli = meow(helpText, config);

gx(cli);
