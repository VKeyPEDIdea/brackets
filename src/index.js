module.exports = function check(str, bracketsConfig) {
  if (str.length % 2) return false;

  let bracketsArray = str.split('');
  let controller = [];

  bracketsArray.forEach(bracket => {
    let bracketIndex = getBracketIndex(bracket, bracketsConfig);
    
    switch(bracketIndex[1]) {
      case 0:
        controller.push(bracketIndex[0]);
        break;
      case 1:
        if (controller[controller.length - 1] == bracketIndex[0] && controller.length != 0) {
          controller.pop()
        } else {
          return false;
        }
        break;
    } 
  });

  // console.log('controller: ' + controller);
  if (controller.length) {
    return false;
  }
  
  return true;
}

function getBracketIndex(bracket, config) {
  let j = -1, i = -1;

  while (i == -1) {
    j++;
    i = config[j].indexOf(bracket);
  }

  if (config[j][0] == config[j][1]) return [j, 1]; 

  return [j, i];
}

// bracketIndex[0] - любое число
// bracketsIndex[1] - 0 или 1