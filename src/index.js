module.exports = function check(str, bracketsConfig) {
  let newConfig = bracketsConfig.map(x => x.join(''));

  for(let i = 0; i<newConfig.length; i++) {
    if(str.includes(newConfig[i])) {
      return check(str.split(newConfig[i]).join(''),bracketsConfig);
    }
  }

  return str.length == 0;
}
