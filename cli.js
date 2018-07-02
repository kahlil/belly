#!/usr/bin/env node
'use strict';

const meow = require('meow');
const gx = require('./gx');
const helpText = require('./help-text');

const cli = meow(helpText);

gx();
console.log(cli.input || 'unicorns');
