const path = require('path');
const fs = require('fs');
const os = require('os');
const exec = require('child_process').exec;

const LIB_PACKAGE_CONFIG = require('../dist/drawer-layout/package');
const LIB_PACKAGE_NAME = `ngx-drawer-layout-${LIB_PACKAGE_CONFIG.version}.tgz`;

exec(
  `npm pack`,
  {cwd: path.resolve(__dirname, '../dist/drawer-layout')},
  function (err, stdout) {
    if (err) throw err;
    else {
      console.log(stdout);

      exec(
        `npm publish ${LIB_PACKAGE_NAME}`,
        {cwd: path.resolve(__dirname, '../dist/drawer-layout')},
        function (err, stdout) {
          if (err) throw err;
          else console.log(stdout);
        });
    }
  });
