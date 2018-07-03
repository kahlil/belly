#!/usr/bin/env node
'use strict';

const chalk = require('chalk');
const meow = require('meow');
const gx = require('./gx');
const helpText = require('./help-text');

const config = {
  flags: {
    commitMessage: {
      type: 'string',
      default: `${chalk.blue('gx')} auto-commit`,
      alias: 'm'
    }
  }
};

const cli = meow(helpText, config);

gx(cli);
