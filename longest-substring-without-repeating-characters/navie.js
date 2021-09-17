/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  var maxChar = 0;
  if (s.length > 0) {
    maxChar = 1;
  }
  for (var i = 0; i < s.length; i++) {
    var characters = [];

    for (var j = i; j < s.length; j++) {
      var findIndex = characters.findIndex((el) => el == s[j]);
      if (findIndex >= 0) {
        if (j - i > maxChar) maxChar = j - i;
        break;
      }
      characters.push(s[j]);
    }
    if (characters.length > maxChar) {
      maxChar = characters.length;
    }
  }
  return maxChar;
};

console.log(' for string "abcabcbb"', lengthOfLongestSubstring("abcabcbb"));
