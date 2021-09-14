var overall = 0;
var results = {};
function takeStep(noStep = 0, overallStep = 4,arr) {
  if (noStep === overallStep) return 1;
  if(noStep > overallStep) return 0;
  if (arr[noStep]) return arr[noStep];
  arr[noStep] = 0;
  if (noStep < overallStep) {
    if ((noStep + 1 <= overallStep, overallStep)) {
      arr[noStep]+= takeStep(noStep + 1, overallStep, arr);
    }

    if (noStep + 2 <= overallStep) {
      arr[noStep]+= takeStep(noStep + 2, overallStep, arr);
    }
  }
  return arr[noStep];
}
var result = takeStep(0, 5, {});
console.log("step to take", result);
