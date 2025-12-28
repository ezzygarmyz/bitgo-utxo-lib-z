const typeforce = require('typeforce');

const coins = {
  ZEC: 'zec'
};

coins.isZcash = function (network) {
  return typeforce.value(coins.ZEC)(network.coin);
};

coins.isValidCoin = typeforce.oneOf(
  coins.isZcash
);

module.exports = coins;
