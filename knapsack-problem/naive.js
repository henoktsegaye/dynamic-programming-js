/**
 * Naive approach for  solving the napsack 1/0
 * rules
 * - indivisibility
 */
/**
 * this algorithm works for only 3 levels
 * @param {Object} values 
 * @param {Number} capacity 
 * @returns returns the value
 */
function findKnapSack(values, capacity) {
  const { weights, prices } = values;

  var index = 0;
  var maxValue = 0;

  for (var price of prices) {
    if (weights[index] > capacity) {
      return;
    }
    var innerIndex = 0;
    for (var smallerPrices of prices) {
      var currentMaxPrice = price;
      var currentMaxWeight = weights[index];
      if (smallerPrices && innerIndex !== index) {
        if (currentMaxWeight + weights[innerIndex] <= capacity) {
          currentMaxWeight += weights[innerIndex];
          if (currentMaxPrice + smallerPrices > maxValue) {
            currentMaxWeight += weights[innerIndex];
            maxValue = currentMaxPrice + smallerPrices;
          }
          for (var i = 0; i < innerIndex; i++) {
            if (
              currentMaxWeight + weights[i] <= capacity &&
              currentMaxPrice + prices[i] > maxValue
            ) {
              currentMaxWeight += weights[innerIndex];
              maxValue = currentMaxPrice + smallerPrices;
            }
          }
        }
      }
      innerIndex++;
    }

    index++;
  }
  return maxValue;
}


function knapsackImproved (values, capacity) {
    const { weights, prices} = values;

}


console.log(
  findKnapSack({ weights: [ 2,3,4,5 ], prices: [1,2,5,6 ] }, 14)
);
