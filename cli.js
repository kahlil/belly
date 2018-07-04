#!/usr/bin/env node
'use strict';

const meow = require('meow');
const gx = require('./gx');
const helpText = require('./help-text');

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
