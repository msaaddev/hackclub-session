#!/usr/bin/env node

// import packages
const init = require('./utils/init');
const cli = require('./utils/cli');
const end = require('./utils/end');

(async () => {
    let flags = [];
    flags = [...process.argv.slice(2)];

    const isAlphaOnly = flags.indexOf('--alpha') !== -1 ? true : false;

    init();

    await cli(isAlphaOnly);

    end();
})();
