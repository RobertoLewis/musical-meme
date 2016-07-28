commonCharacters = function(string1, string2){
   var characters = {}, shared = [], temp = '';

  if(string1 === '' || string2 === ''){
    return '';
  }

  var string2 = string2.replace(/\s/g, "");
  var string1 = string1.replace(/\s/g, "");

  for (var i = 0; i < string2.length;i++){
    if (!characters.hasOwnProperty(string2[i])){
      characters[string2[i]] = 1;
    }
  }

  for (i = 0; i < string1.length;i++){
    if (characters[string1[i]] && characters[string1[i]] === 1){
      shared.push(string1[i]);
      characters[string1[i]]++;
    }
  }
  
  return shared.join("");
};
