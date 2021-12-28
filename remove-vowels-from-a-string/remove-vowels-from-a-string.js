/**
 * @param {string} S
 * @return {string}
 */
// var removeVowels = function(S) {
//   var vowels = ['a', 'e', 'i', 'o', 'u']
//   var word = '';
  
//   for (var i = 0; i < S.length; i++) {
//     if (!vowels.includes(S[i])) {
//       word += S[i]
//     }
//   }
  
//   return word;
// };

var removeVowels = function(S) {
  return S.replace(/[aeiou]/g,'');
}