
var saving = {};
function knapsackMemoization(n, values, capacity) {
  var result = 0;
  if (saving[n] && saving[n][capacity]) {
    return saving[n][capacity];
  }
  const { weights, prices } = values;
  //  if (n ==0) result = 0;
  if (weights[n] <= capacity) {
    result = Math.max(
      knapsackMemoization(n - 1, values, capacity),
      prices[n] + knapsackMemoization(n - 1, values, capacity - weights[n])
    );
  } else if (weights[n] > capacity) {
    result = knapsackMemoization(n - 1, values, capacity);
  }
  saving[n] = { ...saving[n], [capacity]: result };
  return result;
}

console.log(
  findKnapSack({ weights: [ 2,3,4,5 ], prices: [1,2,5,6 ] }, 14)
);

console.log(
  knapsackMemoization(2, { weights: [10, 20, 30], prices: [60, 100, 120] }, 50)
);

console.log(
  knapsackImproved(4, { weights: [1, 2, 4, 2, 5], prices: [5, 3, 5, 3, 2] }, 50)
);
