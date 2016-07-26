function arrayception (array) {
  var depth = [0];

  function recurse(collection, level){
    if(collection.length === 0){
    return;
  }
    collection.forEach(function(element){
    if (typeof element !== 'object'){
      depth.push(level);
      return;
     }
   });
   collection.forEach(function(element){
     if(typeof element === 'object'){
       recurse(element, level + 1);
     }
   });
  }
  recurse(array, 1 );
  depth.sort(function(a, b){return a - b;});
  return depth[depth.length - 1];
}
