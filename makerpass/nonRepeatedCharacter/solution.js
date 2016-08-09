function firstNonRepeatedCharacter (string) {
  var container = {};

  var singleCharacters = [];

  //iterate over string

  for (var i = 0; i < string.length;i++){
    if (container.hasOwnProperty(string[i])){
      container[string[i]] = "REPEAT";

    } else {
      container[string[i]] = i;

    }
  }
  console.log(container);

  for (var key in container){
    if(container[key] !== "REPEAT"){
      singleCharacters.push([key, container[key]]);
    }
  }


  console.log(singleCharacters);


  if(singleCharacters.length  < 1){
    return "sorry";
  }
  if (singleCharacters.length === 1){
    return singleCharacters[0][0];
  }
  var lowest = singleCharacters[0];
  for(var i = 1;i < singleCharacters.length;i++){
    if (singleCharacters[i][1] < lowest[1]){
      lowest = singleCharacters[i];
    }
  }
  return lowest[0];
}
