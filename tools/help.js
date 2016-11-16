const chalk = require('chalk');

const border = chalk.green.underline(' '.repeat(70));
const commands = [
  {
    cmd: 'npm run build',
    description: 'build assets for production',
  },
  {
    cmd: 'npm run build:dev',
    description: 'build assets without optimizations and compressing',
  },
  {
    cmd: 'npm run build:both',
    description: 'run build:dev and build',
    spacerAfter: true,
  },
  {
    cmd: 'npm start',
    description: `${chalk.bold('npm run build:dev')} with watchers and livereload`,
  },
  {
    cmd: 'npm run start:prod',
    description: `${chalk.bold('npm run build')} with watchers and livereload`,
    spacerAfter: true,
  },
  {
    cmd: 'npm run clean',
    description: 'clean public directory',
  },
  {
    cmd: 'npm run favicons',
    description: 'generate favicons',
    spacerAfter: true,
  },
  {
    cmd: 'npm run lint',
    description: 'run lint:js and lint:css',
  },
  {
    cmd: 'npm run lint:js',
    description: 'linting javascript source code',
  },
  {
    cmd: 'npm run lint:css',
    description: 'linting styles source code',
  },
];

console.log(`${border}\n`);
commands.forEach((item) => {
  console.log(`${chalk.bold.green(item.cmd)} - ${item.description}`);
  if (item.spacerAfter) console.log('');
});
console.log(`${border}`);
