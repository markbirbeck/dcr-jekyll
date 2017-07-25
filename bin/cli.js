#!/usr/bin/env node

/*
 * Note that we want this to run as widely as possible so we're not using
 * any ES6 features.
 */

var path = require('path');
var dcr = require('docker-compose-run');

/**
 * Call the command processor with the app name and the path to the Docker
 * Compose file:
 */

dcr('jekyll', path.join(__dirname, '..'), 'jekyll');
