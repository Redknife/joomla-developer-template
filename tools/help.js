const chalk = require('chalk');

const border = chalk.green.underline(' '.repeat(70));
const commands = [
  {
    cmd: 'npm run build',
    description: `alias for ${chalk.bold('npm run build')}`,
  },
  {
    cmd: 'npm run build:dev',
    description: 'build assets without optimizations and compressing',
  },
  {
    cmd: 'npm run build:prod',
    description: 'build assets for production',
    spacerAfter: true,
  },
  {
    cmd: 'npm start',
    description: `alias form ${chalk.bold('npm run start:dev')}`,
  },
  {
    cmd: 'npm run start:dev',
    description: 'npm run build:dev with watchers',
  },
  {
    cmd: 'npm run start:prod',
    description: 'npm run build:prod with watchers',
    spacerAfter: true,
  },
  {
    cmd: 'npm run clean',
    description: 'clean public directory',
  },
  {
    cmd: 'npm run favicons',
    description: 'generate favicons',
  },
];

console.log(`${border}\n`);
commands.forEach((item) => {
  console.log(`${chalk.bold.green(item.cmd)} - ${item.description}`);
  if (item.spacerAfter) console.log('');
});
console.log(`\n${border}`);
