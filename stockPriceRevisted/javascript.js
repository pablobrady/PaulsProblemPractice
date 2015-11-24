var  get_max_profit = function( history ) {
  "use strict";

  var lowestPrice = history[0];
  var lowestPriceIndex = 0;
  var highestPrice = history[0];
  var highestPriceIndex = 0;

  for(let i=1; i<history.length; i++) {
console.log( ">>> " + i + " lowestPrice = " + lowestPrice + " idx=" + lowestPriceIndex);
console.log( "          HI=" + highestPrice + " idx=" + highestPriceIndex );

    if( history[i]<lowestPrice ) {
      lowestPrice = history[i];
      lowestPriceIndex = i;
      highestPrice = lowestPrice;
      highestPriceIndex = i;
    } else if( history[i]>highestPrice && highestPriceIndex>=lowestPriceIndex ) {
      highestPrice = history[i];
      highestPriceIndex = i;
    }
  }



  return [lowestPrice, highestPrice];
};



// 9:30 = 9 * 60 + 30 = 570 start time, index 0


var stock_prices_yesterday = [10, 7, 5, 8, 11, 9];

console.log( "Max profit = ", get_max_profit(stock_prices_yesterday) );
// # returns 6 (buying for $5 and selling for $11)




