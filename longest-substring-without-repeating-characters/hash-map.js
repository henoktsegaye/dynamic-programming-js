/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  var maxChar = 0;
  if (s.length == 1) {
    maxChar = 1;
  }
  var hash = {};
  var start = 0;
  var end = 0;

  for (var i = 0; i < s.length; i++) {
    if ((hash[s[i]] || hash[s[i]] >= 0) && hash[s[i]] >= start) {
      end = i;

      var whatWeGoSoFar = end - start;
      if (whatWeGoSoFar > maxChar) {
        maxChar = whatWeGoSoFar;
      }
      if (hash[s[i]] + 1 > start) {
        start = hash[s[i]] + 1;
      }
    } else if (i === s.length - 1) {
      i++;
    }

    end = i;
    hash[s[i]] = i;
  }

  if (end - start > maxChar) {
    maxChar = end - start;
  }

  return maxChar;
};
