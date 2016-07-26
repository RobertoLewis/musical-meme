function isBalanced (string) {
  if (string === ""){return true;}
  var stringArray = string.split(""), left = [], right = [], both = [];
  for (var i = 0; i < stringArray.length;i++){
    if(stringArray[i] === "("){
      left.push(stringArray[i]);
      both.push(stringArray[i]);
    }
    if(stringArray[i] === ")"){
      right.push(stringArray[i]);
      both.push(stringArray[i]);
    }

  }
  if(both[0] === ")" || both[both.length - 1] === "("){ return false;}
  return left.length === right.length;
}
