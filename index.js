'use strict';

var contracts = require('./contracts');
var providers = require('./providers');
var utils = require('./utils');
var wallet = require('./wallet');

module.exports = {
    SigningKey: wallet.SigningKey,
    Wallet: wallet.Wallet,

    HDNode: wallet.HDNode,

    Contract: contracts.Contract,
    Interface: contracts.Interface,

    networks: providers.networks,
    providers: providers,

    utils: utils,

    _SigningKey: wallet.SigningKey,
};

require('./utils/standalone.js')(module.exports);
