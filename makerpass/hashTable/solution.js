var makeHashTable = function(){
  var table = {};
  var storage = [];
  var storageLimit = 1000;

   table.insert = function(key, value){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    storage[index] = storage[index] || [];
    var collision = false;
     if (storage[index]){
       for (var i = 0; i < storage[index].length;i++){
         if (storage[index][i][0] === key){
        storage[index][i][1] = value;
          collision = true;
          return;}
       }
      if (collision === false){
        storage[index].push([key, value]);
      }
    } else {
      storage[index].push([key, value]);
    }
  };

  table.retrieve = function(key){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    if(storage[index]){
      for(var e = 0; e < storage[index].length; e++){
        if(storage[index][e][0] === key){
          return storage[index][e][1];
        }
      }
    }
  };

  table.remove = function(key){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    if(storage[index]){
      for(var u = 0; u < storage[index].length; u++){
        if(storage[index][u][0] === key){
          storage[index][u] = [];
        return;}
      }
    }
  };
  return table;
};

var getIndexBelowMaxForKey = function(str, max){
 var hash = 0;
 for (var i = 0; i < str.length; i++) {
   hash = (hash<<5) + hash + str.charCodeAt(i);
   hash = hash & hash; // Convert to 32bit integer
   hash = Math.abs(hash);
 }
 return hash % max;
};
