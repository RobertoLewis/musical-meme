function evenOccurrence (arr) {
 var results = [], shelf = {}, even = null;

  for (var i = 0; i < arr.length;i++){
    if(shelf[arr[i]] !== undefined){
      shelf[arr[i]]++;
    } else {
      shelf[arr[i]] = 1;
    }
  }

 for (i = 0; i < arr.length;i++){
    if(shelf[arr[i]] % 2 === 0){
      results.push(arr[i]);
    }
  }
  if (results.length){
    even = results[0];
  }
  return even;
  }
  
