/* global test */
const fs = require('fs');

if (fs.existsSync('./node_modules/shelljs')) {
    require('shelljs/global');
    if (!test('-d', './dist')) exec('npm run -s build');
}
