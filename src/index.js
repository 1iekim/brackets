module.exports = function check(str, bracketsConfig) {
  
  let brackets = [];
  for (let brackVal of bracketsConfig) {
    for (let brackValTo of brackVal) {
    brackets.push(brackValTo);
    }
  }
 // brackets = brackets.join(''); 13+ 7-
  console.log(brackets);
  console.log('str: ' + str);
  let stack = [];
  let caunt = 0;
  for(let bracket of str) {
    let bracketsIndex = brackets.indexOf(bracket)
   // console.log(`bracket: ${bracket} ; brackets: ${brackets} ; stack: ${stack};`);
    if (bracketsIndex === -1){
      continue;
    }
    if (bracket == '|') {caunt++;}
    if(bracketsIndex % 2 == 0) {
      stack.push(bracketsIndex + 1);
    } else {
      if(stack.pop() !== bracketsIndex) {
        return false;
      }
    }
  }
  if (caunt != 0 && caunt%2 == 0) return true;
  return stack.length == 0;
}
