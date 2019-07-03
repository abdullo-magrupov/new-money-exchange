// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  // Initial check for valid input
  if (currency <= 0) {
    return {};
  } else if (currency > 10000) {
    return {
      error: "You are rich, my friend! We don't have so much coins for exchange"
    };
  }

  // Reusable function for coin calculation
  // Automatically populates result object and decreases currency amount
  function calcCoins(coin) {
    let coinCount = Math.floor(currency / coin.coinAmount);

    if (coinCount > 0) {
      currency = currency - coinCount * coin.coinAmount;
      result[coin.coinCode] = coinCount;
    }
  }

  let result = {};
  let coins = [
    { coinCode: "H", coinAmount: 50 },
    { coinCode: "Q", coinAmount: 25 },
    { coinCode: "D", coinAmount: 10 },
    { coinCode: "N", coinAmount: 5 },
    { coinCode: "P", coinAmount: 1 }
  ];

  // Making calculations for each coin
  for (i = 0; i < coins.length; i++) {
    calcCoins(coins[i]);
  }

  return result;
};
