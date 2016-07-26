function characterFrequency (string) {
  var result = [], collection = {}, numCollection = {};
  if(string === ''){ return result }

  var arr = string.split('');


  arr.forEach(function(char){
    if(collection[char]){
      collection[char][1]++;

    }
    else {
      collection[char] = [ char, 1 ];

    }
  });

  for(var key in collection){
    if(numCollection[collection[key][1]]){
      numCollection[collection[key][1]].push(collection[key]);
    }
    else {
      numCollection[collection[key][1]] = [];
      numCollection[collection[key][1]].push(collection[key]);

    }
  }

  for(var num in numCollection){
    if(numCollection[num]){
      numCollection[num].sort();
      result.push(numCollection[num]);
    }

  }

  result.sort(function(a, b){ return b[0][1] - a[0][1] });

  return result.reduce(function(a, b){
    return a.concat(b);
  });

  return result;
}
