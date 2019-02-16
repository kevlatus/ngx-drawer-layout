const path = require('path');

const ROOT_PATH = path.resolve(__dirname, '..');
const DIST_PATH = path.resolve(ROOT_PATH, 'dist');
const PROJECTS_PATH = path.resolve(ROOT_PATH, 'projects');

const COMPANION_APP_NAME = require(path.resolve(ROOT_PATH, 'package.json')).name;
const LIB_PROJECT_NAME = COMPANION_APP_NAME.replace('-app', '');
const LIB_PUBLIC_NAME = 'ngx-' + LIB_PROJECT_NAME;
const LIB_SOURCE_FOLDER = path.resolve(PROJECTS_PATH, LIB_PROJECT_NAME);
const LIB_DIST_FOLDER = path.resolve(DIST_PATH, LIB_PROJECT_NAME);
const LIB_VERSION = require(path.resolve(LIB_SOURCE_FOLDER, 'package.json')).version;

module.exports = {
  LIB_DIST_FOLDER,
  LIB_PUBLIC_NAME,
  LIB_SOURCE_FOLDER,
  LIB_VERSION,
  ROOT_PATH,
};
