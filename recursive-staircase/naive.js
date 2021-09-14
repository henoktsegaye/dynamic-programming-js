var overall = 0;
var results = {};
function takeStep(noStep = 0, overallSteop = 4,arr) {
  if (noStep === overallSteop) return 1;
  if(noStep > overallSteop) return 0;
  if (arr[noStep]) return arr[noStep];
  arr[noStep] = 0;
  if (noStep < overallSteop) {
    if ((noStep + 1 <= overallSteop, overallSteop)) {
      arr[noStep]+= takeStep(noStep + 1, overallSteop, arr);
    }

    if (noStep + 2 <= overallSteop) {
      arr[noStep]+= takeStep(noStep + 2, overallSteop, arr);
    }
  }
  return arr[noStep];
}
var result = takeStep(0, 5, {});
console.log("step to take", result);
