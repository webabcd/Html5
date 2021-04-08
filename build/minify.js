/* eslint-disable no-console, camelcase */

const fs = require('fs');
const uglify = require('uglify-js');

const options = {
  nameCache: {},
  output: {
    comments: false
  },
  mangle: true,
  compress: {
    sequences: true,
    dead_code: true,
    conditionals: true,
    booleans: true,
    unused: true,
    if_return: true,
    join_vars: true,
    drop_console: false,
    typeofs: false
  }
};

const minify = (file, dest) => {
  const code = fs.readFileSync(file, 'utf8');
  const minified = uglify.minify(code, options);

  if (minified.error) {
    console.error(minified.error);
    return;
  }

  if (minified.warnings) {
    console.warn(minified.warnings);
  }

  fs.writeFileSync(dest, minified.code, 'utf8');
};

console.log('compress files start');
minify('dist/index.js', 'dist/index.min.js');
console.log('compress files end');
