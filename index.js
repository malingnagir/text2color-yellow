#!/usr/bin/env node

const chalk = require('chalk');
const { program } = require('commander');

program
  .version('1.0.0')
  .description('Change text color to yellow')
  .argument('<text>', 'text to colorize')
  .action((text) => {
    console.log(chalk.yellow(text));
  });

program.parse(process.argv);
