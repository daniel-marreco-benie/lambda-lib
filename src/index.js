const log = require('./log');
const stringUtil = require('./string-util');
const Client = require('./client');
const LambdaEndpoint = require('./lambda-endpoint-builder');
const HandledException = require('./handled-exception');

module.exports = Object.assign({
    log,
    stringUtil,
    Client,
    LambdaEndpoint,
    HandledException
}, Client);