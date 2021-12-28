/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
  const stack = [];
  let parens;
  let counter = 0;

  for (let i = 0; i < S.length; i++) {
      parens = S[i];
    
      if (parens === "(") {
        stack.push(parens);
      } else if (parens === ")") {
          if (!stack.length) {
            counter++;
          } else {
            stack.pop();
          }
      }
  }
  counter += stack.length;
  return counter;
};
