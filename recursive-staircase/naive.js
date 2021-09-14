
var overall = 0;

/**
 * 
 * know that this problem uses sideeffect for storing values. 
 */

function takeStep(noStep = 0, overallSteop = 4, ) {

  if (noStep === overallSteop) overall++;
  if (noStep < overallSteop) {
    if (noStep + 1 <= overallSteop,overallSteop) {
      takeStep(noStep + 1,overallSteop);
    }

    if (noStep + 2 <= overallSteop) {
      takeStep(noStep + 2,overallSteop);
    }
  }

}
takeStep(0,3)
console.log('step to take', overall);