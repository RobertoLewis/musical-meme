function powerSet (string) {
 var results = [""], temp = {}, sortedArray = [];
 var newArray = string.split("").sort();

newArray.forEach(function(char){
  if(temp[char] === undefined){temp[char] = 1; }
 });

 for (var key in temp){
   if(temp[key]){
     sortedArray.push(key);
   }
 }
 sortedArray.sort();

 function recurse (array, subset){
   for(var i = 0 ;i < array.length;i++){
     results.push(subset + array[i]);
     recurse(array.slice(i  + 1), subset + array[i]);
   }
 }
  recurse(sortedArray, "");
  return results.sort();
}
