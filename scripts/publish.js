const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;
const {LIB_DIST_FOLDER, LIB_PUBLIC_NAME, LIB_VERSION, ROOT_PATH} = require('./utils');

const LIB_PACKAGE_NAME = `${LIB_PUBLIC_NAME}-${LIB_VERSION}.tgz`;
const LICENSE_PATH = path.resolve(ROOT_PATH, 'LICENSE');
const README_PATH = path.resolve(ROOT_PATH, 'README.md');

fs.copyFileSync(LICENSE_PATH, path.resolve(LIB_DIST_FOLDER, 'LICENSE'));
fs.copyFileSync(README_PATH, path.resolve(LIB_DIST_FOLDER, 'README.md'));

exec(
  `npm pack`,
  {cwd: LIB_DIST_FOLDER},
  function (err, stdout) {
    if (err) throw err;
    else {
      console.log(stdout);

      exec(
        `npm publish ${LIB_PACKAGE_NAME}`,
        {cwd: LIB_DIST_FOLDER},
        function (err, stdout) {
          if (err) throw err;
          else console.log(stdout);
        });
    }
  });
