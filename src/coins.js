'use strict';

const typeforce = require('typeforce');

const coins = {
  ZEC: 'zec',
  BTCZ: 'btcz',
  LTZ: 'ltz',
  ZCL: 'zcl',
  ZERC: 'zerc',
  ZER: 'zer',
  GLINK: 'glink',
  YEC: 'yec',
  FLUX: 'flux'
};

const ZCASH_FAMILY = new Set([
  coins.ZEC,
  coins.BTCZ,
  coins.LTZ,
  coins.ZCL,
  coins.ZERC,
  coins.ZER,
  coins.GLINK,
  coins.YEC,
  coins.FLUX
]);


coins.isZcash = function (network) {
  return (
    network &&
    typeof network.coin === 'string' &&
    ZCASH_FAMILY.has(network.coin)
  );
};

coins.isValidCoin = typeforce.oneOf(
  coins.isZcash
);

module.exports = coins;

