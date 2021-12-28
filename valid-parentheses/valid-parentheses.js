/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var stack = [];
  var arr = s.split('');
  
  for (var c of arr) {
    if (c === '[') stack.push(']');
    else if (c === '{') stack.push('}');
    else if (c === '(') stack.push(')');
    else if (stack.length === 0 || c !== stack.pop()) return false;
  }
  
  if (stack.length === 0) return true;
    
    return false;
};