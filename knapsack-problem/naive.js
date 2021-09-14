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

/**
 * the way to solve this problem is just by comparing
 * @param {*} values
 * @param {*} capacity
 */
function knapsackImproved(n, values, capacity) {
  console.log("called, n = %s, capacity = %s", n, capacity);
  var result = 0;
  const { weights, prices } = values;
//  if (n ==0) result = 0;
   if (weights[n] <= capacity ) {
    result = Math.max(
      knapsackImproved(n - 1, values, capacity ),
      prices[n] + knapsackImproved(n - 1, values, capacity- weights[n])
    );
  } else if (weights[n] > capacity ) {
    result = knapsackImproved(n - 1, values, capacity);
  }
  return result;
}

// console.log(
//   findKnapSack({ weights: [ 2,3,4,5 ], prices: [1,2,5,6 ] }, 14)
// );

console.log(
  knapsackImproved(3, { weights: [2, 3, 4, 5], prices: [1, 2, 5, 6] }, 14)
);
